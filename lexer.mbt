///|
/// All possible token kinds produced by the YARA lexer.
pub(all) enum TokenKind {
  // Keywords
  KwRule
  KwMeta
  KwStrings
  KwCondition
  KwNocase
  KwWide
  KwAscii
  KwAnd
  KwOr
  KwNot
  KwAt
  KwIn
  KwOf
  KwThem
  KwFilesize
  KwTrue
  KwFalse
  KwUint8
  KwUint16
  KwUint16Be
  KwUint32
  KwUint32Be

  // Delimiters and operators
  LBrace
  RBrace
  LParen
  RParen
  Colon
  Assign
  Eq
  Neq
  Lt
  Lte
  Gt
  Gte
  DotDot
  Comma

  // Literals and identifiers
  StringLit(String)
  HexBlock(Array[Byte], Array[Byte]) // (target_bytes, mask_bytes)
  IntLit(Int)
  StringIdent(String) // e.g. "$a"
  CountIdent(String) // e.g. "#a"
  OffsetIdent(String) // e.g. "@a"
  Ident(String) // e.g. "RuleName", "author"
  Eof
} derive(Eq, Debug)

///|
/// A token with its source location for error reporting.
pub(all) struct Token {
  kind : TokenKind
  line : Int
  col : Int
} derive(Eq, Debug)

///|
/// Errors encountered during lexical analysis.
pub(all) suberror LexError {
  UnexpectedChar(line~ : Int, col~ : Int, char~ : Char)
  UnterminatedString(line~ : Int, col~ : Int)
  UnterminatedComment(line~ : Int, col~ : Int)
  UnterminatedHexBlock(line~ : Int, col~ : Int)
  InvalidHexDigit(line~ : Int, col~ : Int, char~ : Char)
  InvalidHexBlock(line~ : Int, col~ : Int, msg~ : String)
} derive(Eq, Debug)

///|
/// Lexical scanner for YARA rule texts.
priv struct Lexer {
  input : Array[Char]
  mut pos : Int
  mut line : Int
  mut col : Int
  mut prev_was_assign : Bool
}

///|
fn Lexer::new(input : String) -> Lexer {
  { input: input.to_array(), pos: 0, line: 1, col: 1, prev_was_assign: false }
}

///|
fn Lexer::peek(self : Lexer, offset? : Int = 0) -> Char? {
  let idx = self.pos + offset
  if idx < self.input.length() {
    Some(self.input[idx])
  } else {
    None
  }
}

///|
fn Lexer::advance(self : Lexer) -> Char? {
  if self.pos < self.input.length() {
    let ch = self.input[self.pos]
    self.pos += 1
    if ch == '\n' {
      self.line += 1
      self.col = 1
    } else {
      self.col += 1
    }
    Some(ch)
  } else {
    None
  }
}

///|
fn Lexer::skip_whitespace_and_comments(self : Lexer) -> Unit raise LexError {
  while self.pos < self.input.length() {
    match self.peek() {
      Some(' ' | '\t' | '\r' | '\n') => ignore(self.advance())
      Some('/') =>
        match self.peek(offset=1) {
          Some('/') => {
            // Line comment: skip until newline or EOF
            ignore(self.advance())
            ignore(self.advance())
            while self.pos < self.input.length() {
              match self.peek() {
                Some('\n') => {
                  ignore(self.advance())
                  break
                }
                _ => ignore(self.advance())
              }
            }
          }
          Some('*') => {
            // Block comment: skip until */
            let start_line = self.line
            let start_col = self.col
            ignore(self.advance())
            ignore(self.advance())
            let mut closed = false
            while self.pos < self.input.length() {
              if self.peek() == Some('*') && self.peek(offset=1) == Some('/') {
                ignore(self.advance())
                ignore(self.advance())
                closed = true
                break
              }
              ignore(self.advance())
            }
            if !closed {
              raise LexError::UnterminatedComment(
                line=start_line,
                col=start_col,
              )
            }
          }
          _ => break
        }
      _ => break
    }
  }
}

///|
fn hex_val(c : Char) -> Int? {
  if c >= '0' && c <= '9' {
    Some(c.to_int() - '0'.to_int())
  } else if c >= 'a' && c <= 'f' {
    Some(c.to_int() - 'a'.to_int() + 10)
  } else if c >= 'A' && c <= 'F' {
    Some(c.to_int() - 'A'.to_int() + 10)
  } else {
    None
  }
}

///|
fn Lexer::scan_hex_block(self : Lexer) -> Token raise LexError {
  let start_line = self.line
  let start_col = self.col
  ignore(self.advance()) // Consume '{'

  let target_bytes : Array[Byte] = []
  let mask_bytes : Array[Byte] = []

  while true {
    // Skip whitespaces and comments inside hex block
    while self.pos < self.input.length() {
      match self.peek() {
        Some(' ' | '\t' | '\r' | '\n') => ignore(self.advance())
        Some('/') =>
          match self.peek(offset=1) {
            Some('/') => {
              ignore(self.advance())
              ignore(self.advance())
              while self.pos < self.input.length() {
                if self.peek() == Some('\n') {
                  ignore(self.advance())
                  break
                }
                ignore(self.advance())
              }
            }
            Some('*') => {
              ignore(self.advance())
              ignore(self.advance())
              let mut closed = false
              while self.pos < self.input.length() {
                if self.peek() == Some('*') && self.peek(offset=1) == Some('/') {
                  ignore(self.advance())
                  ignore(self.advance())
                  closed = true
                  break
                }
                ignore(self.advance())
              }
              if !closed {
                raise LexError::UnterminatedHexBlock(
                  line=start_line,
                  col=start_col,
                )
              }
            }
            _ => break
          }
        _ => break
      }
    }

    match self.peek() {
      None =>
        raise LexError::UnterminatedHexBlock(line=start_line, col=start_col)
      Some('}') => {
        ignore(self.advance())
        break
      }
      Some(c1) => {
        let cur_line = self.line
        let cur_col = self.col
        ignore(self.advance())
        match self.peek() {
          None =>
            raise LexError::UnterminatedHexBlock(line=start_line, col=start_col)
          Some(c2) => {
            ignore(self.advance())
            // Now parse c1 and c2
            let (target, mask) = if c1 == '?' && c2 == '?' {
              (0, 0)
            } else if c1 == '?' {
              match hex_val(c2) {
                Some(v2) => (v2, 0x0F)
                None =>
                  raise LexError::InvalidHexDigit(
                    line=cur_line,
                    col=cur_col + 1,
                    char=c2,
                  )
              }
            } else if c2 == '?' {
              match hex_val(c1) {
                Some(v1) => (v1 << 4, 0xF0)
                None =>
                  raise LexError::InvalidHexDigit(
                    line=cur_line,
                    col=cur_col,
                    char=c1,
                  )
              }
            } else {
              match (hex_val(c1), hex_val(c2)) {
                (Some(v1), Some(v2)) => ((v1 << 4) | v2, 0xFF)
                (None, _) =>
                  raise LexError::InvalidHexDigit(
                    line=cur_line,
                    col=cur_col,
                    char=c1,
                  )
                (_, None) =>
                  raise LexError::InvalidHexDigit(
                    line=cur_line,
                    col=cur_col + 1,
                    char=c2,
                  )
              }
            }
            target_bytes.push(target.to_byte())
            mask_bytes.push(mask.to_byte())
          }
        }
      }
    }
  }

  { kind: HexBlock(target_bytes, mask_bytes), line: start_line, col: start_col }
}

///|
fn Lexer::scan_string(self : Lexer) -> Token raise LexError {
  let start_line = self.line
  let start_col = self.col
  ignore(self.advance()) // Consume opening '"'

  let sb = StringBuilder::new()
  while true {
    match self.advance() {
      None => raise LexError::UnterminatedString(line=start_line, col=start_col)
      Some('"') => break
      Some('\\') =>
        match self.advance() {
          None =>
            raise LexError::UnterminatedString(line=start_line, col=start_col)
          Some('n') => sb.write_char('\n')
          Some('r') => sb.write_char('\r')
          Some('t') => sb.write_char('\t')
          Some('\\') => sb.write_char('\\')
          Some('"') => sb.write_char('"')
          Some('x') => {
            // Hex escape e.g. \x41
            let h1 = self.advance()
            let h2 = self.advance()
            match (h1, h2) {
              (Some(c1), Some(c2)) =>
                match (hex_val(c1), hex_val(c2)) {
                  (Some(v1), Some(v2)) => {
                    let code = (v1 << 4) | v2
                    sb.write_char(code.to_char().unwrap_or('?'))
                  }
                  _ => {
                    sb.write_char('\\')
                    sb.write_char('x')
                    sb.write_char(c1)
                    sb.write_char(c2)
                  }
                }
              _ =>
                raise LexError::UnterminatedString(
                  line=start_line,
                  col=start_col,
                )
            }
          }
          Some(other) => {
            sb.write_char('\\')
            sb.write_char(other)
          }
        }
      Some(c) => sb.write_char(c)
    }
  }

  { kind: StringLit(sb.to_string()), line: start_line, col: start_col }
}

///|
fn is_ident_start(c : Char) -> Bool {
  c.is_ascii_alphabetic() || c == '_'
}

///|
fn is_ident_continue(c : Char) -> Bool {
  c.is_ascii_alphabetic() || c.is_ascii_digit() || c == '_'
}

///|
fn Lexer::scan_number(self : Lexer) -> Token {
  let start_line = self.line
  let start_col = self.col

  let mut is_hex = false
  if self.peek() == Some('0') &&
    (self.peek(offset=1) == Some('x') || self.peek(offset=1) == Some('X')) {
    is_hex = true
    ignore(self.advance())
    ignore(self.advance())
  }

  let mut num = 0
  if is_hex {
    while self.pos < self.input.length() {
      match self.peek() {
        Some(c) =>
          match hex_val(c) {
            Some(v) => {
              num = (num << 4) | v
              ignore(self.advance())
            }
            None => break
          }
        None => break
      }
    }
  } else {
    while self.pos < self.input.length() {
      match self.peek() {
        Some(c) if c.is_ascii_digit() => {
          num = num * 10 + (c.to_int() - '0'.to_int())
          ignore(self.advance())
        }
        _ => break
      }
    }
    // Check for KB / MB suffixes
    if self.peek() == Some('K') && self.peek(offset=1) == Some('B') {
      ignore(self.advance())
      ignore(self.advance())
      num = num * 1024
    } else if self.peek() == Some('M') && self.peek(offset=1) == Some('B') {
      ignore(self.advance())
      ignore(self.advance())
      num = num * 1024 * 1024
    }
  }

  { kind: IntLit(num), line: start_line, col: start_col }
}

///|
fn Lexer::scan_ident(self : Lexer) -> Token {
  let start_line = self.line
  let start_col = self.col

  let sb = StringBuilder::new()
  while self.pos < self.input.length() {
    match self.peek() {
      Some(c) if is_ident_continue(c) => {
        sb.write_char(c)
        ignore(self.advance())
      }
      _ => break
    }
  }

  let text = sb.to_string()
  let kind = match text {
    "rule" => TokenKind::KwRule
    "meta" => TokenKind::KwMeta
    "strings" => TokenKind::KwStrings
    "condition" => TokenKind::KwCondition
    "nocase" => TokenKind::KwNocase
    "wide" => TokenKind::KwWide
    "ascii" => TokenKind::KwAscii
    "and" => TokenKind::KwAnd
    "or" => TokenKind::KwOr
    "not" => TokenKind::KwNot
    "at" => TokenKind::KwAt
    "in" => TokenKind::KwIn
    "of" => TokenKind::KwOf
    "them" => TokenKind::KwThem
    "filesize" => TokenKind::KwFilesize
    "true" => TokenKind::KwTrue
    "false" => TokenKind::KwFalse
    "uint8" => TokenKind::KwUint8
    "uint16" => TokenKind::KwUint16
    "uint16be" => TokenKind::KwUint16Be
    "uint32" => TokenKind::KwUint32
    "uint32be" => TokenKind::KwUint32Be
    _ => TokenKind::Ident(text)
  }

  { kind, line: start_line, col: start_col }
}

///|
fn Lexer::scan_variable(self : Lexer, prefix : Char) -> Token {
  let start_line = self.line
  let start_col = self.col
  ignore(self.advance()) // Consume '$', '#', or '@'

  let sb = StringBuilder::new()
  sb.write_char(prefix)
  while self.pos < self.input.length() {
    match self.peek() {
      Some(c) if is_ident_continue(c) => {
        sb.write_char(c)
        ignore(self.advance())
      }
      _ => break
    }
  }

  let text = sb.to_string()
  let kind = match prefix {
    '$' => TokenKind::StringIdent(text)
    '#' => TokenKind::CountIdent(text)
    _ => TokenKind::OffsetIdent(text)
  }

  { kind, line: start_line, col: start_col }
}

///|
/// Extract all tokens from input YARA rule source text.
pub fn tokenize(input : String) -> Array[Token] raise LexError {
  let lexer = Lexer::new(input)
  let tokens : Array[Token] = []

  while true {
    lexer.skip_whitespace_and_comments()
    if lexer.pos >= lexer.input.length() {
      tokens.push({ kind: TokenKind::Eof, line: lexer.line, col: lexer.col })
      break
    }

    let start_line = lexer.line
    let start_col = lexer.col
    let ch = lexer.peek().unwrap()

    if ch == '{' && lexer.prev_was_assign {
      let tok = lexer.scan_hex_block()
      tokens.push(tok)
      lexer.prev_was_assign = false
      continue
    }

    let tok : Token = match ch {
      '{' => {
        ignore(lexer.advance())
        { kind: TokenKind::LBrace, line: start_line, col: start_col }
      }
      '}' => {
        ignore(lexer.advance())
        { kind: TokenKind::RBrace, line: start_line, col: start_col }
      }
      '(' => {
        ignore(lexer.advance())
        { kind: TokenKind::LParen, line: start_line, col: start_col }
      }
      ')' => {
        ignore(lexer.advance())
        { kind: TokenKind::RParen, line: start_line, col: start_col }
      }
      ':' => {
        ignore(lexer.advance())
        { kind: TokenKind::Colon, line: start_line, col: start_col }
      }
      ',' => {
        ignore(lexer.advance())
        { kind: TokenKind::Comma, line: start_line, col: start_col }
      }
      '.' =>
        if lexer.peek(offset=1) == Some('.') {
          ignore(lexer.advance())
          ignore(lexer.advance())
          { kind: TokenKind::DotDot, line: start_line, col: start_col }
        } else {
          ignore(lexer.advance())
          raise LexError::UnexpectedChar(
            line=start_line,
            col=start_col,
            char='.',
          )
        }
      '=' =>
        if lexer.peek(offset=1) == Some('=') {
          ignore(lexer.advance())
          ignore(lexer.advance())
          { kind: TokenKind::Eq, line: start_line, col: start_col }
        } else {
          ignore(lexer.advance())
          { kind: TokenKind::Assign, line: start_line, col: start_col }
        }
      '!' =>
        if lexer.peek(offset=1) == Some('=') {
          ignore(lexer.advance())
          ignore(lexer.advance())
          { kind: TokenKind::Neq, line: start_line, col: start_col }
        } else {
          ignore(lexer.advance())
          raise LexError::UnexpectedChar(
            line=start_line,
            col=start_col,
            char='!',
          )
        }
      '<' =>
        if lexer.peek(offset=1) == Some('=') {
          ignore(lexer.advance())
          ignore(lexer.advance())
          { kind: TokenKind::Lte, line: start_line, col: start_col }
        } else {
          ignore(lexer.advance())
          { kind: TokenKind::Lt, line: start_line, col: start_col }
        }
      '>' =>
        if lexer.peek(offset=1) == Some('=') {
          ignore(lexer.advance())
          ignore(lexer.advance())
          { kind: TokenKind::Gte, line: start_line, col: start_col }
        } else {
          ignore(lexer.advance())
          { kind: TokenKind::Gt, line: start_line, col: start_col }
        }
      '"' => lexer.scan_string()
      '$' => lexer.scan_variable('$')
      '#' => lexer.scan_variable('#')
      '@' => lexer.scan_variable('@')
      c if c.is_ascii_digit() => lexer.scan_number()
      c if is_ident_start(c) => lexer.scan_ident()
      other => {
        ignore(lexer.advance())
        raise LexError::UnexpectedChar(
          line=start_line,
          col=start_col,
          char=other,
        )
      }
    }

    lexer.prev_was_assign = tok.kind == TokenKind::Assign
    tokens.push(tok)
  }

  tokens
}
