///|
/// Errors encountered during regular expression parsing or compilation.
pub(all) suberror RegexError {
  UnexpectedEnd
  InvalidEscape(String)
  UnclosedGroup
  UnclosedClass
  InvalidRange(Char, Char)
  InvalidRepeat
} derive(Eq, Debug)

///|
/// Virtual machine instruction for Thompson NFA regular expression engine.
pub(all) enum RegexInst {
  MatchByte(FixedArray[Bool]) // 256-entry byte lookup table
  Split(Int, Int) // fork to target1, target2
  Jump(Int) // unconditional jump
  MatchSuccess // accept state
} derive(Eq, Debug)

///|
/// Compiled regular expression bytecode ready for linear-time scanning.
pub(all) struct CompiledRegex {
  instructions : Array[RegexInst]
} derive(Eq, Debug)

///|
priv enum RegexNode {
  Class(FixedArray[Bool])
  Seq(Array[RegexNode])
  Alt(Array[RegexNode])
  Star(RegexNode)
  Plus(RegexNode)
  Quest(RegexNode)
}

///|
fn make_byte_table() -> FixedArray[Bool] {
  FixedArray::make(256, false)
}

///|
fn set_code(table : FixedArray[Bool], v : Int, nocase : Bool) -> Unit {
  if v >= 0 && v < 256 {
    table[v] = true
    if nocase {
      if v >= 65 && v <= 90 {
        table[v + 32] = true
      } else if v >= 97 && v <= 122 {
        table[v - 32] = true
      }
    }
  }
}

///|
fn set_char(table : FixedArray[Bool], c : Char, nocase : Bool) -> Unit {
  set_code(table, c.to_int(), nocase)
}

///|
fn set_range(
  table : FixedArray[Bool],
  c1 : Char,
  c2 : Char,
  nocase : Bool,
) -> Unit {
  let v1 = c1.to_int()
  let v2 = c2.to_int()
  let (start, end) = if v1 <= v2 { (v1, v2) } else { (v2, v1) }
  for i = start; i <= end; i = i + 1 {
    set_code(table, i, nocase)
  }
}

///|
fn invert_table(table : FixedArray[Bool]) -> FixedArray[Bool] {
  let res = FixedArray::make(256, false)
  for i = 0; i < 256; i = i + 1 {
    res[i] = !table[i]
  }
  res
}

///|
priv struct RegexParser {
  input : Array[Char]
  mut pos : Int
  nocase : Bool
}

///|
fn RegexParser::peek(self : RegexParser, offset? : Int = 0) -> Char? {
  let idx = self.pos + offset
  if idx < self.input.length() {
    Some(self.input[idx])
  } else {
    None
  }
}

///|
fn RegexParser::advance(self : RegexParser) -> Char? {
  if self.pos < self.input.length() {
    let ch = self.input[self.pos]
    self.pos += 1
    Some(ch)
  } else {
    None
  }
}

///|
fn parse_hex_2(c1 : Char, c2 : Char) -> Int? {
  fn hex_digit(c : Char) -> Int? {
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
  match (hex_digit(c1), hex_digit(c2)) {
    (Some(h1), Some(h2)) => Some((h1 << 4) | h2)
    _ => None
  }
}

///|
fn RegexParser::parse_class(self : RegexParser) -> RegexNode raise RegexError {
  ignore(self.advance()) // consume '['
  let negated = if self.peek() == Some('^') {
    ignore(self.advance())
    true
  } else {
    false
  }

  let table = make_byte_table()
  let mut closed = false

  while self.pos < self.input.length() {
    match self.advance() {
      Some(']') => {
        closed = true
        break
      }
      Some('\\') =>
        match self.advance() {
          Some('d') => set_range(table, '0', '9', false)
          Some('w') => {
            set_range(table, 'a', 'z', self.nocase)
            set_range(table, 'A', 'Z', self.nocase)
            set_range(table, '0', '9', false)
            set_char(table, '_', false)
          }
          Some('s') => {
            set_char(table, ' ', false)
            set_char(table, '\t', false)
            set_char(table, '\r', false)
            set_char(table, '\n', false)
          }
          Some('n') => set_char(table, '\n', false)
          Some('r') => set_char(table, '\r', false)
          Some('t') => set_char(table, '\t', false)
          Some('x') => {
            let c1 = self.advance()
            let c2 = self.advance()
            match (c1, c2) {
              (Some(h1), Some(h2)) =>
                match parse_hex_2(h1, h2) {
                  Some(code) => set_code(table, code, self.nocase)
                  None => raise RegexError::InvalidEscape("\\x")
                }
              _ => raise RegexError::InvalidEscape("\\x")
            }
          }
          Some(other) => set_char(table, other, self.nocase)
          None => raise RegexError::UnexpectedEnd
        }
      Some(ch) =>
        if self.peek() == Some('-') && self.peek(offset=1) != Some(']') {
          ignore(self.advance()) // consume '-'
          match self.advance() {
            Some(end_ch) => set_range(table, ch, end_ch, self.nocase)
            None => raise RegexError::UnexpectedEnd
          }
        } else {
          set_char(table, ch, self.nocase)
        }
      None => raise RegexError::UnclosedClass
    }
  }

  if !closed {
    raise RegexError::UnclosedClass
  }

  let final_table = if negated { invert_table(table) } else { table }
  RegexNode::Class(final_table)
}

///|
fn RegexParser::parse_atom(self : RegexParser) -> RegexNode? raise RegexError {
  match self.peek() {
    None => None
    Some(')' | '|' | '*' | '+' | '?') => None
    Some('(') => {
      ignore(self.advance())
      let expr = self.parse_alt()
      match self.advance() {
        Some(')') => Some(expr)
        _ => raise RegexError::UnclosedGroup
      }
    }
    Some('[') => Some(self.parse_class())
    Some('.') => {
      ignore(self.advance())
      let table = make_byte_table()
      for i = 0; i < 256; i = i + 1 {
        if i != 10 { // wildcard matches all except newline
          table[i] = true
        }
      }
      Some(RegexNode::Class(table))
    }
    Some('\\') => {
      ignore(self.advance())
      let ch = match self.advance() {
        Some(c) => c
        None => raise RegexError::UnexpectedEnd
      }
      let table = make_byte_table()
      match ch {
        'd' => {
          set_range(table, '0', '9', false)
          Some(RegexNode::Class(table))
        }
        'D' => {
          set_range(table, '0', '9', false)
          Some(RegexNode::Class(invert_table(table)))
        }
        'w' => {
          set_range(table, 'a', 'z', self.nocase)
          set_range(table, 'A', 'Z', self.nocase)
          set_range(table, '0', '9', false)
          set_char(table, '_', false)
          Some(RegexNode::Class(table))
        }
        'W' => {
          set_range(table, 'a', 'z', self.nocase)
          set_range(table, 'A', 'Z', self.nocase)
          set_range(table, '0', '9', false)
          set_char(table, '_', false)
          Some(RegexNode::Class(invert_table(table)))
        }
        's' => {
          set_char(table, ' ', false)
          set_char(table, '\t', false)
          set_char(table, '\r', false)
          set_char(table, '\n', false)
          Some(RegexNode::Class(table))
        }
        'S' => {
          set_char(table, ' ', false)
          set_char(table, '\t', false)
          set_char(table, '\r', false)
          set_char(table, '\n', false)
          Some(RegexNode::Class(invert_table(table)))
        }
        'n' => {
          set_char(table, '\n', false)
          Some(RegexNode::Class(table))
        }
        'r' => {
          set_char(table, '\r', false)
          Some(RegexNode::Class(table))
        }
        't' => {
          set_char(table, '\t', false)
          Some(RegexNode::Class(table))
        }
        'x' => {
          let c1 = self.advance()
          let c2 = self.advance()
          match (c1, c2) {
            (Some(h1), Some(h2)) =>
              match parse_hex_2(h1, h2) {
                Some(code) => {
                  set_code(table, code, self.nocase)
                  Some(RegexNode::Class(table))
                }
                None => raise RegexError::InvalidEscape("\\x")
              }
            _ => raise RegexError::InvalidEscape("\\x")
          }
        }
        escaped => {
          set_char(table, escaped, self.nocase)
          Some(RegexNode::Class(table))
        }
      }
    }
    Some(ch) => {
      ignore(self.advance())
      let table = make_byte_table()
      set_char(table, ch, self.nocase)
      Some(RegexNode::Class(table))
    }
  }
}

///|
fn RegexParser::parse_piece(self : RegexParser) -> RegexNode? raise RegexError {
  let atom_opt = self.parse_atom()
  match atom_opt {
    None => None
    Some(atom) =>
      match self.peek() {
        Some('*') => {
          ignore(self.advance())
          Some(RegexNode::Star(atom))
        }
        Some('+') => {
          ignore(self.advance())
          Some(RegexNode::Plus(atom))
        }
        Some('?') => {
          ignore(self.advance())
          Some(RegexNode::Quest(atom))
        }
        _ => Some(atom)
      }
  }
}

///|
fn RegexParser::parse_seq(self : RegexParser) -> RegexNode raise RegexError {
  let pieces : Array[RegexNode] = []
  while true {
    match self.parse_piece() {
      Some(node) => pieces.push(node)
      None => break
    }
  }
  if pieces.length() == 1 {
    pieces[0]
  } else {
    RegexNode::Seq(pieces)
  }
}

///|
fn RegexParser::parse_alt(self : RegexParser) -> RegexNode raise RegexError {
  let branches : Array[RegexNode] = []
  branches.push(self.parse_seq())

  while self.peek() == Some('|') {
    ignore(self.advance())
    branches.push(self.parse_seq())
  }

  if branches.length() == 1 {
    branches[0]
  } else {
    RegexNode::Alt(branches)
  }
}

///|
priv struct Compiler {
  insts : Array[RegexInst]
}

///|
fn Compiler::new() -> Compiler {
  { insts: [] }
}

///|
fn Compiler::emit(self : Compiler, inst : RegexInst) -> Int {
  let pc = self.insts.length()
  self.insts.push(inst)
  pc
}

///|
fn Compiler::compile_node(self : Compiler, node : RegexNode) -> Unit {
  match node {
    Class(table) => ignore(self.emit(RegexInst::MatchByte(table)))
    Seq(nodes) =>
      for n in nodes {
        self.compile_node(n)
      }
    Alt(branches) => {
      if branches.length() == 0 {
        return
      }
      if branches.length() == 1 {
        self.compile_node(branches[0])
        return
      }
      // Chain splits: branch0 | branch1 | ...
      let end_jumps : Array[Int] = []
      for i = 0; i < branches.length(); i = i + 1 {
        let is_last = i == branches.length() - 1
        if !is_last {
          let split_pc = self.emit(RegexInst::Split(0, 0)) // placeholder
          let branch_start = self.insts.length()
          self.compile_node(branches[i])
          let jump_end = self.emit(RegexInst::Jump(0)) // placeholder
          end_jumps.push(jump_end)
          let next_branch_start = self.insts.length()
          self.insts[split_pc] = RegexInst::Split(
            branch_start, next_branch_start,
          )
        } else {
          self.compile_node(branches[i])
        }
      }
      let final_pc = self.insts.length()
      for j in end_jumps {
        self.insts[j] = RegexInst::Jump(final_pc)
      }
    }
    Star(child) => {
      let split_pc = self.emit(RegexInst::Split(0, 0))
      let child_start = self.insts.length()
      self.compile_node(child)
      ignore(self.emit(RegexInst::Jump(split_pc)))
      let after_pc = self.insts.length()
      self.insts[split_pc] = RegexInst::Split(child_start, after_pc)
    }
    Plus(child) => {
      let start_pc = self.insts.length()
      self.compile_node(child)
      let split_pc = self.emit(RegexInst::Split(start_pc, 0))
      let after_pc = self.insts.length()
      self.insts[split_pc] = RegexInst::Split(start_pc, after_pc)
    }
    Quest(child) => {
      let split_pc = self.emit(RegexInst::Split(0, 0))
      let child_start = self.insts.length()
      self.compile_node(child)
      let after_pc = self.insts.length()
      self.insts[split_pc] = RegexInst::Split(child_start, after_pc)
    }
  }
}

///|
/// Compiles a regular expression string into a linear-time Thompson NFA.
pub fn compile_regex(
  pattern : String,
  nocase? : Bool = false,
) -> CompiledRegex raise RegexError {
  let parser : RegexParser = { input: pattern.to_array(), pos: 0, nocase }
  let ast = parser.parse_alt()
  let compiler = Compiler::new()
  compiler.compile_node(ast)
  ignore(compiler.emit(RegexInst::MatchSuccess))
  { instructions: compiler.insts }
}

///|
/// Evaluates Thompson NFA against `target_data` starting at offset `start_pos`.
/// Returns the length of the longest match, or None if no match.
pub fn match_regex_at(
  re : CompiledRegex,
  target_data : Bytes,
  start_pos : Int,
) -> Int? {
  let n = target_data.length()
  if start_pos > n {
    return None
  }

  let insts = re.instructions
  let num_insts = insts.length()

  let mut curr_states : Array[Int] = []
  let mut next_states : Array[Int] = []
  let visited : FixedArray[Int] = FixedArray::make(num_insts, 0)
  let mut step_id = 1
  let mut longest_match : Int? = None

  fn add_state(pc : Int, states : Array[Int]) -> Unit {
    if pc >= num_insts || visited[pc] == step_id {
      return
    }
    visited[pc] = step_id

    match insts[pc] {
      Split(t1, t2) => {
        add_state(t1, states)
        add_state(t2, states)
      }
      Jump(t) => add_state(t, states)
      MatchSuccess => ()
      MatchByte(_) => states.push(pc)
    }
  }

  // Initial state expansion
  add_state(0, curr_states)

  // Check if empty match was possible
  for pc in 0..<num_insts {
    if visited[pc] == step_id {
      if insts[pc] == MatchSuccess {
        longest_match = Some(0)
      }
    }
  }

  let mut cur_pos = start_pos
  while cur_pos < n && curr_states.length() > 0 {
    let b = target_data[cur_pos].to_int()
    step_id += 1
    next_states.clear()

    let mut hit_success = false
    for pc in curr_states {
      match insts[pc] {
        MatchByte(table) =>
          if table[b] {
            // Epsilon closure on pc + 1
            fn expand_next(p : Int) -> Unit {
              if p >= num_insts || visited[p] == step_id {
                return
              }
              visited[p] = step_id
              match insts[p] {
                Split(t1, t2) => {
                  expand_next(t1)
                  expand_next(t2)
                }
                Jump(t) => expand_next(t)
                MatchSuccess => hit_success = true
                MatchByte(_) => next_states.push(p)
              }
            }
            expand_next(pc + 1)
          }
        _ => ()
      }
    }

    cur_pos += 1
    if hit_success {
      longest_match = Some(cur_pos - start_pos)
    }

    // Swap states
    let tmp = curr_states
    curr_states = next_states
    next_states = tmp
  }

  longest_match
}

///|
/// Scans `target_data` for all non-empty, non-overlapping occurrences of regex.
pub fn scan_all_regex(
  re : CompiledRegex,
  target_data : Bytes,
  identifier : String,
) -> Array[StringMatch] {
  let matches : Array[StringMatch] = []
  let n = target_data.length()
  let mut pos = 0

  while pos < n {
    match match_regex_at(re, target_data, pos) {
      Some(len) if len > 0 => {
        let slice : Array[Byte] = []
        for k = 0; k < len; k = k + 1 {
          slice.push(target_data[pos + k])
        }
        matches.push({ identifier, offset: pos, length: len, data: slice })
        pos += len
      }
      _ => pos += 1
    }
  }

  matches
}
