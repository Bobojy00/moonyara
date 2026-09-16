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
