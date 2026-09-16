///|
test "parser: parse simple rule with meta, strings and condition" {
  let src =
    #|rule Detect_Dropper : trojan win32 {
    #|    meta:
    #|        description = "Detects malicious dropper string"
    #|        author = "Analyst"
    #|        severity = 10
    #|        active = true
    #|    strings:
    #|        $text1 = "cmd.exe /c powershell -enc" nocase
    #|        $hex1 = { 4D 5A 90 00 }
    #|    condition:
    #|        $hex1 at 0 and $text1
    #|}
  let rules = parse_rules_from_string(src)
  assert_eq(rules.length(), 1)
  let r = rules[0]
  assert_eq(r.name, "Detect_Dropper")
  assert_eq(r.tags, ["trojan", "win32"])
  assert_eq(r.metas.length(), 4)
  assert_eq(r.metas[0].key, "description")
  assert_eq(r.metas[0].value, MetaString("Detects malicious dropper string"))
  assert_eq(r.metas[2].value, MetaInt(10))
  assert_eq(r.metas[3].value, MetaBool(true))

  assert_eq(r.strings.length(), 2)
  assert_eq(r.strings[0].identifier, "$text1")
  match r.strings[0].pattern {
    Text(s, nocase~, wide~) => {
      assert_eq(s, "cmd.exe /c powershell -enc")
      assert_eq(nocase, true)
      assert_eq(wide, false)
    }
    _ => fail("Expected Text pattern")
  }

  match r.condition {
    And(At(id, IntLit(offset)), StringId(id2)) => {
      assert_eq(id, "$hex1")
      assert_eq(offset, 0)
      assert_eq(id2, "$text1")
    }
    _ => fail("Unexpected condition AST")
  }
}

///|
test "parser: parse quantifiers and ranges" {
  let src =
    #|rule Quantifier_Check {
    #|    strings:
    #|        $a = "test1"
    #|        $b = "test2"
    #|        $c = "test3"
    #|    condition:
    #|        any of them and 2 of ($a, $b, $c) or $a in (10..200)
    #|}
  let rules = parse_rules_from_string(src)
  assert_eq(rules.length(), 1)
  let r = rules[0]
  match r.condition {
    Or(And(AnyOfThem, NumOfSet(IntLit(2), set)), In(id, IntLit(s), IntLit(e))) => {
      assert_eq(set, ["$a", "$b", "$c"])
      assert_eq(id, "$a")
      assert_eq(s, 10)
      assert_eq(e, 200)
    }
    _ => fail("Unexpected condition AST structure")
  }
}

///|
test "parser: multiple rules" {
  let src =
    #|rule First {
    #|    condition: true
    #|}
    #|rule Second {
    #|    condition: false
    #|}
  let rules = parse_rules_from_string(src)
  assert_eq(rules.length(), 2)
  assert_eq(rules[0].name, "First")
  assert_eq(rules[1].name, "Second")
}
