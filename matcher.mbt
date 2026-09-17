///|
fn ascii_to_lower_byte(b : Byte) -> Byte {
  let v = b.to_int()
  if v >= 65 && v <= 90 {
    (v + 32).to_byte()
  } else {
    b
  }
}

///|
fn build_wide_bytes(s : String) -> Array[Byte] {
  let bytes : Array[Byte] = []
  for c in s {
    let code = c.to_int()
    bytes.push((code & 0xFF).to_byte())
    bytes.push(((code >> 8) & 0xFF).to_byte())
  }
  bytes
}

///|
fn match_exact_bytes(
  target_data : Bytes,
  pattern_bytes : Array[Byte],
  identifier : String,
) -> Array[StringMatch] {
  let matches : Array[StringMatch] = []
  let n = target_data.length()
  let m = pattern_bytes.length()
  if m == 0 || m > n {
    return matches
  }
  let limit = n - m

  if m >= 3 {
    let shift : FixedArray[Int] = FixedArray::make(256, m)
    for k = 0; k < m - 1; k = k + 1 {
      let b = pattern_bytes[k].to_int()
      shift[b] = m - 1 - k
    }
    let mut i = 0
    while i <= limit {
      let mut matched = true
      for j = m - 1; j >= 0; j = j - 1 {
        if target_data[i + j] != pattern_bytes[j] {
          matched = false
          break
        }
      }
      if matched {
        let data : Array[Byte] = []
        for k = 0; k < m; k = k + 1 {
          data.push(target_data[i + k])
        }
        matches.push({ identifier, offset: i, length: m, data })
      }
      let last_byte = target_data[i + m - 1].to_int()
      let step = shift[last_byte]
      i += if step <= 0 { 1 } else { step }
    }
  } else {
    for i = 0; i <= limit; i = i + 1 {
      let mut matched = true
      for j = 0; j < m; j = j + 1 {
        if target_data[i + j] != pattern_bytes[j] {
          matched = false
          break
        }
      }
      if matched {
        let data : Array[Byte] = []
        for k = 0; k < m; k = k + 1 {
          data.push(target_data[i + k])
        }
        matches.push({ identifier, offset: i, length: m, data })
      }
    }
  }

  matches
}

///|
fn encode_base64_segment(bytes : Array[Byte], start : Int, len : Int) -> String {
  let table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  let table_chars = table.to_array()
  let sb = StringBuilder()
  let mut i = start
  let end_idx = start + len
  while i < end_idx {
    let b0 = bytes[i].to_int()
    let b1 = if i + 1 < end_idx { bytes[i + 1].to_int() } else { 0 }
    let b2 = if i + 2 < end_idx { bytes[i + 2].to_int() } else { 0 }
    let c0 = (b0 >> 2) & 0x3F
    let c1 = ((b0 << 4) | (b1 >> 4)) & 0x3F
    let c2 = ((b1 << 2) | (b2 >> 6)) & 0x3F
    let c3 = b2 & 0x3F
    sb.write_char(table_chars[c0])
    sb.write_char(table_chars[c1])
    if i + 1 < end_idx {
      sb.write_char(table_chars[c2])
    }
    if i + 2 < end_idx {
      sb.write_char(table_chars[c3])
    }
    i += 3
  }
  sb.to_string()
}

///|
fn generate_base64_patterns(s : String) -> Array[String] {
  let raw = @utf8.encode(s[:]).to_array()
  let n = raw.length()
  let patterns : Array[String] = []

  // Variant 0 (offset 0):
  if n >= 3 {
    let full_blocks = n / 3 * 3
    let b64 = encode_base64_segment(raw, 0, full_blocks)
    if b64.length() > 0 {
      patterns.push(b64)
    }
  } else if n > 0 {
    let b64 = encode_base64_segment(raw, 0, n)
    if b64.length() >= 2 {
      patterns.push(b64)
    }
  }

  // Variant 1 (offset 1):
  let b1 : Array[Byte] = [b'\x00']
  for b in raw {
    b1.push(b)
  }
  if b1.length() >= 4 {
    let full_blocks = b1.length() / 3 * 3
    let b64 = encode_base64_segment(b1, 0, full_blocks)
    if b64.length() > 2 {
      let chars = b64.to_array()
      let sb = StringBuilder()
      for k = 2; k < chars.length(); k = k + 1 {
        sb.write_char(chars[k])
      }
      patterns.push(sb.to_string())
    }
  }

  // Variant 2 (offset 2):
  let b2 : Array[Byte] = [b'\x00', b'\x00']
  for b in raw {
    b2.push(b)
  }
  if b2.length() >= 5 {
    let full_blocks = b2.length() / 3 * 3
    let b64 = encode_base64_segment(b2, 0, full_blocks)
    if b64.length() > 3 {
      let chars = b64.to_array()
      let sb = StringBuilder()
      for k = 3; k < chars.length(); k = k + 1 {
        sb.write_char(chars[k])
      }
      patterns.push(sb.to_string())
    }
  }

  patterns
}

///|
/// Scans `target_data` for all occurrences of a single pattern.
pub fn match_pattern(
  target_data : Bytes,
  identifier : String,
  pattern : PatternKind,
) -> Array[StringMatch] {
  let matches : Array[StringMatch] = []
  let n = target_data.length()

  match pattern {
    Hex(targets, masks) => {
      let m = targets.length()
      if m == 0 || m > n {
        return matches
      }
      let limit = n - m
      for i = 0; i <= limit; i = i + 1 {
        let mut matched = true
        for j = 0; j < m; j = j + 1 {
          let b = target_data[i + j].to_int()
          let mask = masks[j].to_int()
          let target = targets[j].to_int()
          if (b & mask) != target {
            matched = false
            break
          }
        }
        if matched {
          let data : Array[Byte] = []
          for k = 0; k < m; k = k + 1 {
            data.push(target_data[i + k])
          }
          matches.push({ identifier, offset: i, length: m, data })
        }
      }
    }
    Text(s, nocase~, wide~) => {
      let pattern_bytes = if wide {
        build_wide_bytes(s)
      } else {
        @utf8.encode(s[:]).to_array()
      }
      let m = pattern_bytes.length()
      if m == 0 || m > n {
        return matches
      }
      let limit = n - m

      // Use Boyer-Moore-Horspool for non-wide patterns of length >= 3
      if !wide && m >= 3 {
        let shift : FixedArray[Int] = FixedArray::make(256, m)
        if nocase {
          let lower_pattern = Array::make(m, b'\x00')
          for k = 0; k < m; k = k + 1 {
            lower_pattern[k] = ascii_to_lower_byte(pattern_bytes[k])
          }
          for k = 0; k < m - 1; k = k + 1 {
            let b = lower_pattern[k].to_int()
            shift[b] = m - 1 - k
            if b >= 97 && b <= 122 {
              shift[b - 32] = m - 1 - k
            }
          }
          let mut i = 0
          while i <= limit {
            let mut matched = true
            for j = m - 1; j >= 0; j = j - 1 {
              let b1 = ascii_to_lower_byte(target_data[i + j])
              if b1 != lower_pattern[j] {
                matched = false
                break
              }
            }
            if matched {
              let data : Array[Byte] = []
              for k = 0; k < m; k = k + 1 {
                data.push(target_data[i + k])
              }
              matches.push({ identifier, offset: i, length: m, data })
            }
            let last_byte = target_data[i + m - 1].to_int()
            let step = shift[last_byte]
            i += if step <= 0 { 1 } else { step }
          }
        } else {
          for k = 0; k < m - 1; k = k + 1 {
            let b = pattern_bytes[k].to_int()
            shift[b] = m - 1 - k
          }
          let mut i = 0
          while i <= limit {
            let mut matched = true
            for j = m - 1; j >= 0; j = j - 1 {
              if target_data[i + j] != pattern_bytes[j] {
                matched = false
                break
              }
            }
            if matched {
              let data : Array[Byte] = []
              for k = 0; k < m; k = k + 1 {
                data.push(target_data[i + k])
              }
              matches.push({ identifier, offset: i, length: m, data })
            }
            let last_byte = target_data[i + m - 1].to_int()
            let step = shift[last_byte]
            i += if step <= 0 { 1 } else { step }
          }
        }
      } else {
        // Fallback for wide strings or small patterns (m < 3)
        for i = 0; i <= limit; i = i + 1 {
          let mut matched = true
          if nocase {
            for j = 0; j < m; j = j + 1 {
              let b1 = ascii_to_lower_byte(target_data[i + j])
              let b2 = ascii_to_lower_byte(pattern_bytes[j])
              if b1 != b2 {
                matched = false
                break
              }
            }
          } else {
            for j = 0; j < m; j = j + 1 {
              if target_data[i + j] != pattern_bytes[j] {
                matched = false
                break
              }
            }
          }
          if matched {
            let data : Array[Byte] = []
            for k = 0; k < m; k = k + 1 {
              data.push(target_data[i + k])
            }
            matches.push({ identifier, offset: i, length: m, data })
          }
        }
      }
    }
    Regex(re_str, nocase~, wide=_) => {
      let re = compile_regex(re_str, nocase~) catch { _ => return matches }
      return scan_all_regex(re, target_data, identifier)
    }
    XorText(s, min_key~, max_key~, wide~) => {
      let base_bytes = if wide {
        build_wide_bytes(s)
      } else {
        @utf8.encode(s[:]).to_array()
      }
      let m = base_bytes.length()
      if m == 0 || m > n {
        return matches
      }
      let low = if min_key < 0 { 0 } else { min_key }
      let high = if max_key > 255 { 255 } else { max_key }
      for key = low; key <= high; key = key + 1 {
        let xor_bytes : Array[Byte] = Array::make(m, b'\x00')
        for j = 0; j < m; j = j + 1 {
          xor_bytes[j] = (base_bytes[j].to_int() ^ key).to_byte()
        }
        let sub = match_exact_bytes(target_data, xor_bytes, identifier)
        for sm in sub {
          matches.push(sm)
        }
      }
    }
    Base64Text(s, wide~) => {
      let b64_strs = generate_base64_patterns(s)
      for b64 in b64_strs {
        let pattern_bytes = if wide {
          build_wide_bytes(b64)
        } else {
          @utf8.encode(b64[:]).to_array()
        }
        let sub = match_exact_bytes(target_data, pattern_bytes, identifier)
        for sm in sub {
          matches.push(sm)
        }
      }
    }
  }

  matches
}

///|
/// Scans target data for all defined strings in a rule and returns matches grouped by identifier.
pub fn match_rule_strings(
  target_data : Bytes,
  strings : Array[StringDef],
) -> Map[String, Array[StringMatch]] {
  let results : Map[String, Array[StringMatch]] = Map([])
  for str_def in strings {
    let matches = match_pattern(
      target_data,
      str_def.identifier,
      str_def.pattern,
    )
    results[str_def.identifier] = matches
  }
  results
}
