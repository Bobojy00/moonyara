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
