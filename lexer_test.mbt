///|
test "lexer: basic tokens and keywords" {
  let src = "rule test_rule : tag1 { meta: author = \"Analyst\" condition: true }"
  let tokens = tokenize(src)
  assert_eq(tokens[0].kind, KwRule)
  assert_eq(tokens[1].kind, Ident("test_rule"))
  assert_eq(tokens[2].kind, Colon)
  assert_eq(tokens[3].kind, Ident("tag1"))
  assert_eq(tokens[4].kind, LBrace)
  assert_eq(tokens[5].kind, KwMeta)
  assert_eq(tokens[6].kind, Colon)
  assert_eq(tokens[7].kind, Ident("author"))
  assert_eq(tokens[8].kind, Assign)
  assert_eq(tokens[9].kind, StringLit("Analyst"))
  assert_eq(tokens[10].kind, KwCondition)
  assert_eq(tokens[11].kind, Colon)
  assert_eq(tokens[12].kind, KwTrue)
  assert_eq(tokens[13].kind, RBrace)
  assert_eq(tokens[14].kind, Eof)
}

///|
test "lexer: string escapes" {
  let src = "\"hello\\nworld\\t\\\"quote\\\"\""
  let tokens = tokenize(src)
  assert_eq(tokens[0].kind, StringLit("hello\nworld\t\"quote\""))
}

///|
test "lexer: hex block with wildcards and comments" {
  let src = "$hex = { 4D 5A /* dos header */ ?? 00 4? ?F }"
  let tokens = tokenize(src)
  assert_eq(tokens[0].kind, StringIdent("$hex"))
  assert_eq(tokens[1].kind, Assign)
  match tokens[2].kind {
    HexBlock(targets, masks) => {
      assert_eq(targets.length(), 6)
      assert_eq(masks.length(), 6)
      // 4D
      assert_eq(targets[0], b'\x4D')
      assert_eq(masks[0], b'\xFF')
      // 5A
      assert_eq(targets[1], b'\x5A')
      assert_eq(masks[1], b'\xFF')
      // ??
      assert_eq(targets[2], b'\x00')
      assert_eq(masks[2], b'\x00')
      // 00
      assert_eq(targets[3], b'\x00')
      assert_eq(masks[3], b'\xFF')
      // 4? (target 0x40, mask 0xF0)
      assert_eq(targets[4], b'\x40')
      assert_eq(masks[4], b'\xF0')
      // ?F (target 0x0F, mask 0x0F)
      assert_eq(targets[5], b'\x0F')
      assert_eq(masks[5], b'\x0F')
    }
    _ => fail("Expected HexBlock")
  }
}

///|
test "lexer: numbers and suffixes" {
  let src = "100 0x20 10KB 2MB"
  let tokens = tokenize(src)
  assert_eq(tokens[0].kind, IntLit(100))
  assert_eq(tokens[1].kind, IntLit(32))
  assert_eq(tokens[2].kind, IntLit(10240))
  assert_eq(tokens[3].kind, IntLit(2097152))
}

///|
test "lexer: condition operators" {
  let src = "$a at 0 and $b in (10..100) or #c > 2 and not filesize <= 1MB"
  let tokens = tokenize(src)
  assert_eq(tokens[0].kind, StringIdent("$a"))
  assert_eq(tokens[1].kind, KwAt)
  assert_eq(tokens[2].kind, IntLit(0))
  assert_eq(tokens[3].kind, KwAnd)
  assert_eq(tokens[4].kind, StringIdent("$b"))
  assert_eq(tokens[5].kind, KwIn)
  assert_eq(tokens[6].kind, LParen)
  assert_eq(tokens[7].kind, IntLit(10))
  assert_eq(tokens[8].kind, DotDot)
  assert_eq(tokens[9].kind, IntLit(100))
  assert_eq(tokens[10].kind, RParen)
  assert_eq(tokens[11].kind, KwOr)
  assert_eq(tokens[12].kind, CountIdent("#c"))
  assert_eq(tokens[13].kind, Gt)
  assert_eq(tokens[14].kind, IntLit(2))
  assert_eq(tokens[15].kind, KwAnd)
  assert_eq(tokens[16].kind, KwNot)
  assert_eq(tokens[17].kind, KwFilesize)
  assert_eq(tokens[18].kind, Lte)
  assert_eq(tokens[19].kind, IntLit(1048576))
}
