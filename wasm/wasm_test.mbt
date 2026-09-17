///|
test "wasm: test exported functions" {
  let rule_src =
    #|rule Detect_Injection {
    #|    strings:
    #|        $s = "injection_marker" nocase
    #|    condition:
    #|        $s
    #|}
  assert_eq(check_rule_syntax(rule_src), 1)
  assert_eq(check_rule_syntax("invalid rule syntax {"), -1)

  let matches = count_matches(rule_src, "Testing injection_marker payload")
  assert_eq(matches, 1)

  let clean_matches = count_matches(rule_src, "Completely clean content")
  assert_eq(clean_matches, 0)

  let json_res = scan_text_to_json(rule_src, "Testing injection_marker payload")
  assert_true(json_res.contains("\"matches_count\": 1"))
}
