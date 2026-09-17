///|
test "engine: end-to-end security alert signature detection" {
  let rule_src =
    #|rule Detect_Lock_Notice {
    #|    meta:
    #|        description = "Identifies lock notice text patterns"
    #|        severity = 9
    #|    strings:
    #|        $note = "Your documents have been locked" nocase
    #|        $token = "crypto_payment" nocase
    #|        $contact = "recovery_key" nocase
    #|    condition:
    #|        $note and ($token or $contact)
    #|}
  let engine = compile(rule_src)

  // Test suspicious sample
  let suspicious_sample = @utf8.encode(
    "ATTENTION! Your documents have been locked! Send crypto_payment to restore access."[:],
  )
  let report1 = engine.scan(suspicious_sample)
  assert_eq(report1.matches.length(), 1)
  assert_eq(report1.matches[0].rule_name, "Detect_Lock_Notice")
  assert_eq(report1.matches[0].matched_strings.length(), 2)

  // Test clean sample
  let clean_sample = @utf8.encode(
    "This is a perfectly safe text document about software development."[:],
  )
  let report2 = engine.scan(clean_sample)
  assert_eq(report2.matches.length(), 0)
}

///|
test "engine: binary header and hex pattern with wildcards" {
  let rule_src =
    #|rule Synthetic_Binary_Signature {
    #|    strings:
    #|        $magic = { AA BB }
    #|        $seq = { 11 22 ?? ?? 55 66 }
    #|    condition:
    #|        $magic at 0 and $seq and filesize < 10KB
    #|}
  let engine = compile(rule_src)

  // Construct binary sample starting with AA BB and containing wildcards
  let sample_bytes = Bytes::from_array([
    b'\xAA', b'\xBB', b'\x00', b'\x00', b'\x11', b'\x22', b'\x33', b'\x44', b'\x55',
    b'\x66', b'\x00', b'\x00',
  ])
  let report = engine.scan(sample_bytes)
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "Synthetic_Binary_Signature")

  // Verify magic was matched at offset 0
  let magic_match = report.matches[0].matched_strings.filter(fn(m) {
    m.identifier == "$magic"
  })
  assert_eq(magic_match.length(), 1)
  assert_eq(magic_match[0].offset, 0)
}

///|
test "engine: multiple rules and any of them" {
  let rule_src =
    #|rule Script_Marker {
    #|    strings:
    #|        $tag = "<script>" nocase
    #|        $exec = "execute_payload(" nocase
    #|        $decode = "decode_buffer(" nocase
    #|        $bypass = "bypass_check(" nocase
    #|    condition:
    #|        $tag at 0 and (2 of ($exec, $decode, $bypass))
    #|}
    #|rule Another_Rule {
    #|    strings:
    #|        $foo = "completely_unrelated"
    #|    condition:
    #|        $foo
    #|}
  let engine = compile(rule_src)

  let sample = @utf8.encode(
    "<script> execute_payload(decode_buffer(data)); </script>"[:],
  )
  let report = engine.scan(sample)
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "Script_Marker")
}

///|
test "engine: regex pattern matching in YARA rule" {
  let rule_src =
    #|rule Powershell_Command_Pattern {
    #|    strings:
    #|        $re = /powershell(\.exe)?\s+-enc\s+[A-Za-z0-9+/=]+/ nocase
    #|    condition:
    #|        $re
    #|}
  let engine = compile(rule_src)

  let malicious_cmd = @utf8.encode(
    "cmd.exe /c POWERSHELL.EXE -enc SQBFAFgA=="[:],
  )
  let report = engine.scan(malicious_cmd)
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "Powershell_Command_Pattern")
  assert_eq(report.matches[0].matched_strings.length(), 1)
  assert_eq(report.matches[0].matched_strings[0].identifier, "$re")

  let clean_cmd = @utf8.encode("notepad.exe document.txt"[:])
  let clean_report = engine.scan(clean_cmd)
  assert_eq(clean_report.matches.length(), 0)
}
