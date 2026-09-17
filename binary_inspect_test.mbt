///|
test "eval: uint8, uint16, uint32 endianness and nested dereference" {
  let rule_src =
    #|rule Check_Binary_Header {
    #|    meta:
    #|        description = "Validates PE header structure with nested pointer dereference"
    #|    condition:
    #|        uint16(0) == 0x5A4D and
    #|        uint8(0) == 0x4D and
    #|        uint16be(0) == 0x4D5A and
    #|        uint32(uint32(0x3C)) == 0x00004550
    #|}
  let engine = compile(rule_src)

  // Construct synthetic PE header:
  // Offset 0: 4D 5A ('MZ')
  // Offset 0x3C (60): pointer to PE header (0x40 = 64)
  // Offset 0x40 (64): 50 45 00 00 ('PE\0\0' = 0x00004550 in little endian)
  let bytes : Array[Byte] = Array::make(128, b'\x00')
  bytes[0] = b'\x4D'
  bytes[1] = b'\x5A'
  bytes[0x3C] = b'\x40' // pointer to offset 64 (0x40)
  bytes[0x40] = b'\x50' // 'P'
  bytes[0x41] = b'\x45' // 'E'
  bytes[0x42] = b'\x00'
  bytes[0x43] = b'\x00'

  let target_bytes = Bytes::from_array(bytes)
  let report = engine.scan(target_bytes)
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "Check_Binary_Header")
}

///|
test "eval: string offset @ syntax" {
  let rule_src =
    #|rule Check_First_Match_Offset {
    #|    strings:
    #|        $sig = "TARGET_SIGNATURE"
    #|    condition:
    #|        $sig and @sig == 16
    #|}
  let engine = compile(rule_src)

  let sample = @utf8.encode(
    "0123456789ABCDEF" + "TARGET_SIGNATURE" + "TRAILING_DATA",
  )
  let report = engine.scan(sample)
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "Check_First_Match_Offset")
}

///|
test "matcher: bmh multi-jump pattern matching" {
  // Long buffer with target string near the end to verify BMH jumping
  let prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".repeat(50)
  let full_str = prefix + "SPECIAL_MALWARE_MARKER_FOUND" + prefix
  let sample = @utf8.encode(full_str[:])

  let rule_src =
    #|rule BMH_Test {
    #|    strings:
    #|        $marker = "special_malware_marker_found" nocase
    #|    condition:
    #|        $marker
    #|}
  let engine = compile(rule_src)
  let report = engine.scan(sample)
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "BMH_Test")
  assert_eq(report.matches[0].matched_strings.length(), 1)
}
