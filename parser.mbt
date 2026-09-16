///|
/// Errors encountered during parsing of YARA rule tokens.
pub(all) suberror ParseError {
  UnexpectedToken(line~ : Int, col~ : Int, expected~ : String, found~ : String)
  UnexpectedEof(expected~ : String)
  InvalidExpression(line~ : Int, col~ : Int, msg~ : String)
} derive(Eq, Debug)

///|
priv struct Parser {
  tokens : Array[Token]
  mut pos : Int
}

///|
fn Parser::new(tokens : Array[Token]) -> Parser {
  { tokens, pos: 0 }
}

///|
fn Parser::peek(self : Parser) -> Token {
  if self.pos < self.tokens.length() {
    self.tokens[self.pos]
  } else {
    { kind: TokenKind::Eof, line: 0, col: 0 }
  }
}

///|
fn Parser::peek_next(self : Parser) -> Token {
  if self.pos + 1 < self.tokens.length() {
    self.tokens[self.pos + 1]
  } else {
    { kind: TokenKind::Eof, line: 0, col: 0 }
  }
}

///|
fn Parser::advance(self : Parser) -> Token {
  let tok = self.peek()
  if self.pos < self.tokens.length() {
    self.pos += 1
  }
  tok
}

///|
fn token_kind_name(kind : TokenKind) -> String {
  match kind {
    KwRule => "rule"
    KwMeta => "meta"
    KwStrings => "strings"
    KwCondition => "condition"
    KwNocase => "nocase"
    KwWide => "wide"
    KwAscii => "ascii"
    KwAnd => "and"
    KwOr => "or"
    KwNot => "not"
    KwAt => "at"
    KwIn => "in"
    KwOf => "of"
    KwThem => "them"
    KwFilesize => "filesize"
    KwTrue => "true"
    KwFalse => "false"
    LBrace => "{"
    RBrace => "}"
    LParen => "("
    RParen => ")"
    Colon => ":"
    Assign => "="
    Eq => "=="
    Neq => "!="
    Lt => "<"
    Lte => "<="
    Gt => ">"
    Gte => ">="
    DotDot => ".."
    Comma => ","
    StringLit(s) => "\"\{s}\""
    HexBlock(_) => "{ <hex bytes> }"
    IntLit(i) => i.to_string()
    StringIdent(id) => id
    CountIdent(id) => id
    Ident(id) => id
    Eof => "<EOF>"
  }
}

///|
fn Parser::expect_ident(self : Parser) -> String raise ParseError {
  let tok = self.peek()
  match tok.kind {
    Ident(id) => {
      ignore(self.advance())
      id
    }
    _ =>
      raise ParseError::UnexpectedToken(
        line=tok.line,
        col=tok.col,
        expected="identifier",
        found=token_kind_name(tok.kind),
      )
  }
}

///|
fn Parser::expect(
  self : Parser,
  expected_kind : TokenKind,
) -> Token raise ParseError {
  let tok = self.peek()
  if tok.kind == expected_kind {
    self.advance()
  } else {
    raise ParseError::UnexpectedToken(
      line=tok.line,
      col=tok.col,
      expected=token_kind_name(expected_kind),
      found=token_kind_name(tok.kind),
    )
  }
}

///|
fn Parser::parse_rule(self : Parser) -> Rule raise ParseError {
  ignore(self.expect(KwRule))
  let name = self.expect_ident()

  // Optional tags: : tag1 tag2
  let tags : Array[String] = []
  if self.peek().kind == Colon {
    ignore(self.advance())
    while true {
      match self.peek().kind {
        Ident(tag) => {
          ignore(self.advance())
          tags.push(tag)
        }
        _ => break
      }
    }
  }

  ignore(self.expect(LBrace))

  let metas : Array[MetaEntry] = []
  let strings : Array[StringDef] = []
  let mut condition : ConditionExpr? = None

  while self.peek().kind != RBrace && self.peek().kind != Eof {
    match self.peek().kind {
      KwMeta => {
        ignore(self.advance())
        ignore(self.expect(Colon))
        while true {
          match self.peek().kind {
            Ident(key) => {
              ignore(self.advance())
              ignore(self.expect(Assign))
              let val_tok = self.advance()
              let val = match val_tok.kind {
                StringLit(s) => MetaValue::MetaString(s)
                IntLit(i) => MetaValue::MetaInt(i)
                KwTrue => MetaValue::MetaBool(true)
                KwFalse => MetaValue::MetaBool(false)
                other =>
                  raise ParseError::UnexpectedToken(
                    line=val_tok.line,
                    col=val_tok.col,
                    expected="string, integer or boolean literal in meta",
                    found=token_kind_name(other),
                  )
              }
              metas.push({ key, value: val })
            }
            _ => break
          }
        }
      }
      KwStrings => {
        ignore(self.advance())
        ignore(self.expect(Colon))
        while true {
          match self.peek().kind {
            StringIdent(id) => {
              ignore(self.advance())
              ignore(self.expect(Assign))
              let pattern_tok = self.advance()
              let pattern = match pattern_tok.kind {
                StringLit(s) => {
                  let mut nocase = false
                  let mut wide = false
                  while true {
                    match self.peek().kind {
                      KwNocase => {
                        ignore(self.advance())
                        nocase = true
                      }
                      KwWide => {
                        ignore(self.advance())
                        wide = true
                      }
                      KwAscii => ignore(self.advance())
                      _ => break
                    }
                  }
                  PatternKind::Text(s, nocase~, wide~)
                }
                HexBlock(targets, masks) => PatternKind::Hex(targets, masks)
                other =>
                  raise ParseError::UnexpectedToken(
                    line=pattern_tok.line,
                    col=pattern_tok.col,
                    expected="string literal or hex block",
                    found=token_kind_name(other),
                  )
              }
              strings.push({ identifier: id, pattern })
            }
            _ => break
          }
        }
      }
      KwCondition => {
        ignore(self.advance())
        ignore(self.expect(Colon))
        let cond = self.parse_condition_expr()
        condition = Some(cond)
      }
      other => {
        let tok = self.peek()
        raise ParseError::UnexpectedToken(
          line=tok.line,
          col=tok.col,
          expected="meta, strings or condition section",
          found=token_kind_name(other),
        )
      }
    }
  }

  ignore(self.expect(RBrace))

  match condition {
    Some(cond) => { name, tags, metas, strings, condition: cond }
    None =>
      raise ParseError::UnexpectedToken(
        line=self.peek().line,
        col=self.peek().col,
        expected="condition section",
        found="end of rule",
      )
  }
}

///|
fn Parser::parse_condition_expr(
  self : Parser,
) -> ConditionExpr raise ParseError {
  self.parse_or()
}

///|
fn Parser::parse_or(self : Parser) -> ConditionExpr raise ParseError {
  let mut left = self.parse_and()
  while self.peek().kind == KwOr {
    ignore(self.advance())
    let right = self.parse_and()
    left = ConditionExpr::Or(left, right)
  }
  left
}

///|
fn Parser::parse_and(self : Parser) -> ConditionExpr raise ParseError {
  let mut left = self.parse_comparison()
  while self.peek().kind == KwAnd {
    ignore(self.advance())
    let right = self.parse_comparison()
    left = ConditionExpr::And(left, right)
  }
  left
}

///|
fn Parser::parse_comparison(self : Parser) -> ConditionExpr raise ParseError {
  let left = self.parse_unary()
  match self.peek().kind {
    Eq => {
      ignore(self.advance())
      let right = self.parse_unary()
      ConditionExpr::Eq(left, right)
    }
    Neq => {
      ignore(self.advance())
      let right = self.parse_unary()
      ConditionExpr::Neq(left, right)
    }
    Lt => {
      ignore(self.advance())
      let right = self.parse_unary()
      ConditionExpr::Lt(left, right)
    }
    Lte => {
      ignore(self.advance())
      let right = self.parse_unary()
      ConditionExpr::Lte(left, right)
    }
    Gt => {
      ignore(self.advance())
      let right = self.parse_unary()
      ConditionExpr::Gt(left, right)
    }
    Gte => {
      ignore(self.advance())
      let right = self.parse_unary()
      ConditionExpr::Gte(left, right)
    }
    _ => left
  }
}

///|
fn Parser::parse_unary(self : Parser) -> ConditionExpr raise ParseError {
  if self.peek().kind == KwNot {
    ignore(self.advance())
    let sub = self.parse_unary()
    ConditionExpr::Not(sub)
  } else {
    self.parse_primary()
  }
}

///|
fn Parser::parse_primary(self : Parser) -> ConditionExpr raise ParseError {
  let tok = self.peek()
  match tok.kind {
    KwTrue => {
      ignore(self.advance())
      ConditionExpr::TrueLit
    }
    KwFalse => {
      ignore(self.advance())
      ConditionExpr::FalseLit
    }
    KwFilesize => {
      ignore(self.advance())
      ConditionExpr::FileSize
    }
    IntLit(i) =>
      // Check if this is "N of them" or "N of ($a, $b)"
      if self.peek_next().kind == KwOf {
        ignore(self.advance()) // consume int
        ignore(self.advance()) // consume 'of'
        match self.peek().kind {
          KwThem => {
            ignore(self.advance())
            ConditionExpr::NumOfThem(IntLit(i))
          }
          LParen => {
            ignore(self.advance())
            let set : Array[String] = []
            while true {
              match self.peek().kind {
                StringIdent(id) => {
                  ignore(self.advance())
                  set.push(id)
                  if self.peek().kind == Comma {
                    ignore(self.advance())
                  }
                }
                _ => break
              }
            }
            ignore(self.expect(RParen))
            ConditionExpr::NumOfSet(IntLit(i), set)
          }
          other =>
            raise ParseError::UnexpectedToken(
              line=self.peek().line,
              col=self.peek().col,
              expected="'them' or set after 'of'",
              found=token_kind_name(other),
            )
        }
      } else {
        ignore(self.advance())
        ConditionExpr::IntLit(i)
      }
    Ident("any") if self.peek_next().kind == KwOf => {
      ignore(self.advance()) // consume 'any'
      ignore(self.advance()) // consume 'of'
      match self.peek().kind {
        KwThem => {
          ignore(self.advance())
          ConditionExpr::AnyOfThem
        }
        LParen => {
          ignore(self.advance())
          let set : Array[String] = []
          while true {
            match self.peek().kind {
              StringIdent(id) => {
                ignore(self.advance())
                set.push(id)
                if self.peek().kind == Comma {
                  ignore(self.advance())
                }
              }
              _ => break
            }
          }
          ignore(self.expect(RParen))
          ConditionExpr::NumOfSet(IntLit(1), set)
        }
        other =>
          raise ParseError::UnexpectedToken(
            line=self.peek().line,
            col=self.peek().col,
            expected="'them' or set after 'of'",
            found=token_kind_name(other),
          )
      }
    }
    Ident("all") if self.peek_next().kind == KwOf => {
      ignore(self.advance()) // consume 'all'
      ignore(self.advance()) // consume 'of'
      match self.peek().kind {
        KwThem => {
          ignore(self.advance())
          ConditionExpr::AllOfThem
        }
        LParen => {
          ignore(self.advance())
          let set : Array[String] = []
          while true {
            match self.peek().kind {
              StringIdent(id) => {
                ignore(self.advance())
                set.push(id)
                if self.peek().kind == Comma {
                  ignore(self.advance())
                }
              }
              _ => break
            }
          }
          ignore(self.expect(RParen))
          ConditionExpr::NumOfSet(IntLit(set.length()), set)
        }
        other =>
          raise ParseError::UnexpectedToken(
            line=self.peek().line,
            col=self.peek().col,
            expected="'them' or set after 'of'",
            found=token_kind_name(other),
          )
      }
    }
    StringIdent(id) => {
      ignore(self.advance())
      // Check for "$a at offset" or "$a in (start..end)"
      if self.peek().kind == KwAt {
        ignore(self.advance())
        let offset_expr = self.parse_primary()
        ConditionExpr::At(id, offset_expr)
      } else if self.peek().kind == KwIn {
        ignore(self.advance())
        ignore(self.expect(LParen))
        let start_expr = self.parse_primary()
        ignore(self.expect(DotDot))
        let end_expr = self.parse_primary()
        ignore(self.expect(RParen))
        ConditionExpr::In(id, start_expr, end_expr)
      } else {
        ConditionExpr::StringId(id)
      }
    }
    CountIdent(id) => {
      ignore(self.advance())
      ConditionExpr::MatchCount(id)
    }
    LParen => {
      ignore(self.advance())
      let expr = self.parse_condition_expr()
      ignore(self.expect(RParen))
      expr
    }
    other =>
      raise ParseError::UnexpectedToken(
        line=tok.line,
        col=tok.col,
        expected="condition expression",
        found=token_kind_name(other),
      )
  }
}

///|
/// Parses a list of rules from token sequence.
pub fn parse_rules(tokens : Array[Token]) -> Array[Rule] raise ParseError {
  let parser = Parser::new(tokens)
  let rules : Array[Rule] = []

  while parser.peek().kind != Eof {
    let rule = parser.parse_rule()
    rules.push(rule)
  }

  rules
}

///|
/// Convenience function to tokenize and parse rules from source string.
pub fn parse_rules_from_string(input : String) -> Array[Rule] raise {
  let tokens = tokenize(input)
  parse_rules(tokens)
}
