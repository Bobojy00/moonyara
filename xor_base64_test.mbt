///|
test "matcher: single-byte XOR string detection with auto-key" {
  let rule_src =
    #|rule Detect_Xor_Payload {
    #|    strings:
    #|        $secret = "kernel32.dll" xor
    #|    condition:
    #|        $secret
    #|}
  let engine = compile(rule_src)

  // Construct binary sample with "kernel32.dll" XOR-ed by 0x5A
  let raw_str = "kernel32.dll"
  let raw_bytes = @utf8.encode(raw_str[:]).to_array()
  let key = 0x5A
  let sample_arr : Array[Byte] = [b'\x00', b'\x00', b'\xFF']
  for b in raw_bytes {
    sample_arr.push((b.to_int() ^ key).to_byte())
  }
  sample_arr.push(b'\xEE')

  let report = engine.scan(Bytes::from_array(sample_arr))
  assert_eq(report.matches.length(), 1)
  assert_eq(report.matches[0].rule_name, "Detect_Xor_Payload")
  assert_eq(report.matches[0].matched_strings.length(), 1)
  assert_eq(report.matches[0].matched_strings[0].offset, 3)
}

///|
test "matcher: XOR string with custom key range" {
  let rule_src =
    #|rule Detect_Xor_Range {
    #|    strings:
    #|        $token = "network_beacon" xor(0x10-0x30)
    #|    condition:
    #|        $token
    #|}
  let engine = compile(rule_src)

  let raw_str = "network_beacon"
  let raw_bytes = @utf8.encode(raw_str[:]).to_array()

  // Sample 1: XOR key 0x20 (inside 0x10-0x30) -> should match
  let sample1 : Array[Byte] = []
  for b in raw_bytes {
    sample1.push((b.to_int() ^ 0x20).to_byte())
  }
  let report1 = engine.scan(Bytes::from_array(sample1))
  assert_eq(report1.matches.length(), 1)

  // Sample 2: XOR key 0x55 (outside 0x10-0x30) -> should NOT match
  let sample2 : Array[Byte] = []
  for b in raw_bytes {
    sample2.push((b.to_int() ^ 0x55).to_byte())
  }
  let report2 = engine.scan(Bytes::from_array(sample2))
  assert_eq(report2.matches.length(), 0)
}

///|
test "matcher: Base64 unaligned string detection across 3 offsets" {
  let rule_src =
    #|rule Detect_Base64_Embedded {
    #|    strings:
    #|        $sig = "This program cannot be run in DOS mode" base64
    #|    condition:
    #|        $sig
    #|}
  let engine = compile(rule_src)

  // Test offset 0 alignment
  let b64_offset0 = @utf8.encode(
    "PREFIX:VGhpcyBwcm9ncmFtIGNhbm5vdCBiZSBydW4gaW4gRE9TIG1vZGU=:SUFFIX"[:],
  )
  let report0 = engine.scan(b64_offset0)
  assert_eq(report0.matches.length(), 1)
  assert_eq(report0.matches[0].rule_name, "Detect_Base64_Embedded")

  // Test offset 1 alignment (shifted by 1 byte before base64 encode)
  let b64_offset1 = @utf8.encode(
    "DATA:AFRoaXMgcHJvZ3JhbSBjYW5ub3QgYmUgcnVuIGluIERPUyBtb2Rl:TAIL"[:],
  )
  let report1 = engine.scan(b64_offset1)
  assert_eq(report1.matches.length(), 1)

  // Test clean data without the base64 string
  let clean_data = @utf8.encode(
    "A completely safe file with unrelated base64: SGVsbG8gV29ybGQ="[:],
  )
  let report_clean = engine.scan(clean_data)
  assert_eq(report_clean.matches.length(), 0)
}
