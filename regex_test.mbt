///|
test "regex: literal and quantifier" {
  let re = compile_regex("abc+", nocase=false)
  let sample = @utf8.encode("xxabcccxx")
  let matches = scan_all_regex(re, sample, "$re")
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 2)
  assert_eq(matches[0].length, 5) // "abccc"
}

///|
test "regex: alternation and groups" {
  let re = compile_regex("(cmd|powershell)(\\.exe)?", nocase=true)
  let sample = @utf8.encode("spawn POWERSHELL.EXE then CMD now")
  let matches = scan_all_regex(re, sample, "$proc")
  assert_eq(matches.length(), 2)
  assert_eq(matches[0].offset, 6)
  assert_eq(matches[0].length, 14) // "POWERSHELL.EXE"
  assert_eq(matches[1].offset, 26)
  assert_eq(matches[1].length, 3) // "CMD"
}

///|
test "regex: character classes and hex escapes" {
  let re = compile_regex("\\x4D\\x5A[0-9a-fA-F]+", nocase=false)
  let sample = @utf8.encode("MZ1a2b3cZZ")
  let matches = scan_all_regex(re, sample, "$mz")
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 0)
  assert_eq(matches[0].length, 8) // "MZ1a2b3c"
}

///|
test "regex: digits and whitespace classes" {
  let re = compile_regex("\\d+\\s+\\w+", nocase=false)
  let sample = @utf8.encode("result: 100   success_count")
  let matches = scan_all_regex(re, sample, "$match")
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 8)
  assert_eq(matches[0].length, 19) // "100   success_count"
}

///|
test "regex: negated character classes" {
  let re = compile_regex("id:[^0-9]+;", nocase=false)
  let sample = @utf8.encode("header: id:abc_xyz; tail")
  let matches = scan_all_regex(re, sample, "$id")
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 8)
  assert_eq(matches[0].length, 11) // "id:abc_xyz;"
}
