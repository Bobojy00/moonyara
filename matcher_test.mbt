///|
test "matcher: exact text search" {
  let sample = @utf8.encode("prefix evil_payload suffix evil_payload end"[:])
  let matches = match_pattern(
    sample,
    "$text",
    Text("evil_payload", nocase=false, wide=false),
  )
  assert_eq(matches.length(), 2)
  assert_eq(matches[0].offset, 7)
  assert_eq(matches[0].length, 12)
  assert_eq(matches[1].offset, 27)
}

///|
test "matcher: nocase text search" {
  let sample = @utf8.encode("pOWerSHelL -eNC"[:])
  let matches = match_pattern(
    sample,
    "$cmd",
    Text("powershell -enc", nocase=true, wide=false),
  )
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 0)
}

///|
test "matcher: wide text search" {
  // UTF-16LE for "abc" is 61 00 62 00 63 00
  let sample = Bytes::from_array([
    b'\x00', b'\x61', b'\x00', b'\x62', b'\x00', b'\x63', b'\x00', b'\xFF',
  ])
  let matches = match_pattern(
    sample,
    "$wide",
    Text("abc", nocase=false, wide=true),
  )
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 1)
  assert_eq(matches[0].length, 6)
}

///|
test "matcher: hex pattern with wildcards and nibbles" {
  // Pattern: { E8 ?? ?? ?? ?? 85 C0 }
  // Target bytes: E8 12 34 56 78 85 C0
  let targets = [b'\xE8', b'\x00', b'\x00', b'\x00', b'\x00', b'\x85', b'\xC0']
  let masks = [b'\xFF', b'\x00', b'\x00', b'\x00', b'\x00', b'\xFF', b'\xFF']
  let sample = Bytes::from_array([
    b'\x90', b'\x90', b'\xE8', b'\x12', b'\x34', b'\x56', b'\x78', b'\x85', b'\xC0',
    b'\xC3',
  ])
  let matches = match_pattern(sample, "$call_test", Hex(targets, masks))
  assert_eq(matches.length(), 1)
  assert_eq(matches[0].offset, 2)
  assert_eq(matches[0].length, 7)
}

///|
test "matcher: hex nibble mask" {
  // Pattern: 4? (mask 0xF0, target 0x40)
  // Should match 0x41 ('A'), 0x4D ('M'), but not 0x51
  let targets = [b'\x40']
  let masks = [b'\xF0']
  let sample = Bytes::from_array([b'\x51', b'\x41', b'\x4D', b'\x30'])
  let matches = match_pattern(sample, "$nibble", Hex(targets, masks))
  assert_eq(matches.length(), 2)
  assert_eq(matches[0].offset, 1)
  assert_eq(matches[1].offset, 2)
}
