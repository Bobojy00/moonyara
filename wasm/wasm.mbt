///|
fn format_report_json(report : @lib.ScanReport) -> String {
  let sb = StringBuilder()
  sb.write_string("{\n")
  sb.write_string("  \"size\": \{report.target_size},\n")
  sb.write_string("  \"matches_count\": \{report.matches.length()},\n")
  sb.write_string("  \"matches\": [\n")

  let mut first_rule = true
  for m in report.matches {
    if !first_rule {
      sb.write_string(",\n")
    }
    first_rule = false

    sb.write_string("    {\n")
    sb.write_string("      \"rule\": \"\{m.rule_name}\",\n")
    sb.write_string("      \"tags\": [")
    let mut first_tag = true
    for tag in m.tags {
      if !first_tag {
        sb.write_string(", ")
      }
      first_tag = false
      sb.write_string("\"\{tag}\"")
    }
    sb.write_string("],\n")
    sb.write_string("      \"strings\": [\n")
    let mut first_str = true
    for sm in m.matched_strings {
      if !first_str {
        sb.write_string(",\n")
      }
      first_str = false
      sb.write_string(
        "        { \"id\": \"\{sm.identifier}\", \"offset\": \{sm.offset}, \"length\": \{sm.length} }",
      )
    }
    sb.write_string("\n      ]\n")
    sb.write_string("    }")
  }

  sb.write_string("\n  ]\n}")
  sb.to_string()
}

///|
fn parse_hex_bytes(hex : String) -> Bytes {
  let buf : Array[Byte] = []
  let mut current_nibble : Int? = None
  for i = 0; i < hex.length(); i = i + 1 {
    let c = hex[i]
    let nibble = if c >= '0' && c <= '9' {
      Some(c.to_int() - '0'.to_int())
    } else if c >= 'a' && c <= 'f' {
      Some(c.to_int() - 'a'.to_int() + 10)
    } else if c >= 'A' && c <= 'F' {
      Some(c.to_int() - 'A'.to_int() + 10)
    } else {
      None
    }
    match nibble {
      Some(n) =>
        match current_nibble {
          Some(high) => {
            buf.push(((high << 4) | n).to_byte())
            current_nibble = None
          }
          None => current_nibble = Some(n)
        }
      None => ()
    }
  }
  Bytes::from_array(buf)
}

///|
/// Scans input text with rules and returns formatted JSON result string.
#export_name("scan_text_to_json")
pub fn scan_text_to_json(rule_src : String, sample_text : String) -> String {
  let engine = @lib.compile(rule_src) catch {
    err => return "{\"error\": \"Failed to compile rules: \{err}\"}"
  }

  let sample_bytes = @utf8.encode(sample_text[:])
  let report = engine.scan(sample_bytes)
  format_report_json(report)
}

///|
/// Scans input hex string with rules and returns formatted JSON result string.
#export_name("scan_hex_to_json")
pub fn scan_hex_to_json(rule_src : String, hex_str : String) -> String {
  let engine = @lib.compile(rule_src) catch {
    err => return "{\"error\": \"Failed to compile rules: \{err}\"}"
  }

  let sample_bytes = parse_hex_bytes(hex_str)
  let report = engine.scan(sample_bytes)
  format_report_json(report)
}

///|
/// Fast validation helper returning rule count if valid, or -1 on syntax error.
#export_name("check_rule_syntax")
pub fn check_rule_syntax(rule_src : String) -> Int {
  try {
    let engine = @lib.compile(rule_src)
    engine.rules.length()
  } catch {
    _ => -1
  }
}

///|
/// Fast counter returning how many rules matched against the input text.
#export_name("count_matches")
pub fn count_matches(rule_src : String, sample_text : String) -> Int {
  try {
    let engine = @lib.compile(rule_src)
    let sample_bytes = @utf8.encode(sample_text[:])
    let report = engine.scan(sample_bytes)
    report.matches.length()
  } catch {
    _ => -1
  }
}
