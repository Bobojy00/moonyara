///|
test "types: construct sample rule ast" {
  let meta : Array[MetaEntry] = [
    { key: "description", value: MetaString("Test rule") },
    { key: "severity", value: MetaInt(10) },
    { key: "is_active", value: MetaBool(true) },
  ]
  let strings : Array[StringDef] = [
    { identifier: "$str1", pattern: Text("evil_call", nocase=true, wide=false) },
    {
      identifier: "$hex1",
      pattern: Hex([b'\x4D', b'\x5A'], [b'\xFF', b'\xFF']),
    },
  ]
  let cond : ConditionExpr = And(StringId("$str1"), At("$hex1", IntLit(0)))
  let rule : Rule = {
    name: "DetectMalware",
    tags: ["trojan", "malicious"],
    metas: meta,
    strings,
    condition: cond,
  }
  assert_eq(rule.name, "DetectMalware")
  assert_eq(rule.tags.length(), 2)
  assert_eq(rule.strings.length(), 2)
}
