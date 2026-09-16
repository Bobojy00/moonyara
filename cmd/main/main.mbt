///|
fn print_usage() -> Unit {
  let usage =
    #|moonyara - Lightweight YARA Malware Signature Scanner in MoonBit
    #|
    #|Usage:
    #|  moonyara scan -r <rule_file> <target_file> [--json]
    #|  moonyara check <rule_file>
    #|  moonyara --help
    #|  moonyara --version
    #|
    #|Commands:
    #|  scan     Scan a target file against YARA rules
    #|  check    Verify and validate YARA rule syntax
    #|
    #|Options:
    #|  -r, --rule <path>    Specify path to YARA rules file
    #|  --json               Output scan results in JSON format
    #|  -h, --help           Show this help message
    #|  -v, --version        Show version information
    #|
    #|Examples:
    #|  moonyara check rules/webshell.yar
    #|  moonyara scan -r rules/webshell.yar suspicious.bin
    #|  moonyara scan -r rules/malware.yar sample.exe --json
  println(usage)
}

///|
fn handle_check(rule_path : String) -> Unit {
  let content = @fs.read_file_to_string(rule_path) catch {
    _ => {
      println("Error: Failed to read rule file at '\{rule_path}'")
      return
    }
  }

  let engine = @lib.compile(content) catch {
    err => {
      println("Syntax Error in rule file '\{rule_path}':")
      println("  \{err}")
      return
    }
  }

  println(
    "[+] Rule validation successful: \{engine.rules.length()} rule(s) loaded from '\{rule_path}'",
  )
}

///|
fn handle_scan(
  rule_path : String,
  target_path : String,
  is_json : Bool,
) -> Unit {
  let rule_content = @fs.read_file_to_string(rule_path) catch {
    _ => {
      println("Error: Failed to read rule file at '\{rule_path}'")
      return
    }
  }

  let engine = @lib.compile(rule_content) catch {
    err => {
      println("Syntax Error in rule file '\{rule_path}': \{err}")
      return
    }
  }

  let target_bytes = @fs.read_file_to_bytes(target_path) catch {
    _ => {
      println("Error: Failed to read target file at '\{target_path}'")
      return
    }
  }

  let report = engine.scan(target_bytes)

  if is_json {
    let sb = StringBuilder::new()
    sb.write_string("{\n")
    sb.write_string("  \"target\": \"\{target_path}\",\n")
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
    println(sb.to_string())
  } else {
    println("[+] Target: '\{target_path}' (\{report.target_size} bytes)")
    println(
      "[+] Rules : '\{rule_path}' (\{engine.rules.length()} rules loaded)",
    )
    println("--------------------------------------------------")
    if report.matches.length() == 0 {
      println("[✓] Clean: No matching signatures detected.")
    } else {
      for m in report.matches {
        let tag_info = if m.tags.length() > 0 {
          let tb = StringBuilder::new()
          for t in m.tags {
            tb.write_string(" ")
            tb.write_string(t)
          }
          " [tags:\{tb.to_string()}]"
        } else {
          ""
        }
        println("[!] MATCHED: \{m.rule_name}\{tag_info}")
        for sm in m.matched_strings {
          println(
            "    └─ \{sm.identifier} at offset \{sm.offset} (length: \{sm.length})",
          )
        }
      }
      println("--------------------------------------------------")
      println(
        "[!] Scan completed with \{report.matches.length()} rule match(es).",
      )
    }
  }
}

///|
fn main {
  let raw_args = @env.args()
  let args : Array[String] = []
  for i = 1; i < raw_args.length(); i = i + 1 {
    args.push(raw_args[i])
  }

  if args.length() == 0 {
    print_usage()
    return
  }

  let cmd = args[0]
  match cmd {
    "--help" | "-h" | "help" => print_usage()
    "--version" | "-v" | "version" => println("moonyara v0.1.0 (MoonBit)")
    "check" => {
      if args.length() < 2 {
        println(
          "Error: Missing rule file path. Usage: moonyara check <rule_file>",
        )
        return
      }
      handle_check(args[1])
    }
    "scan" => {
      let mut rule_file : String? = None
      let mut target_file : String? = None
      let mut is_json = false

      let mut i = 1
      while i < args.length() {
        let arg = args[i]
        if arg == "-r" || arg == "--rule" {
          if i + 1 < args.length() {
            rule_file = Some(args[i + 1])
            i += 2
            continue
          }
        } else if arg == "--json" {
          is_json = true
          i += 1
          continue
        } else if target_file is None {
          target_file = Some(arg)
          i += 1
          continue
        }
        i += 1
      }

      match (rule_file, target_file) {
        (Some(rf), Some(tf)) => handle_scan(rf, tf, is_json)
        (None, _) =>
          println(
            "Error: Missing rule file (-r <rule_file>). See 'moonyara --help'.",
          )
        (_, None) =>
          println("Error: Missing target file to scan. See 'moonyara --help'.")
      }
    }
    other => {
      println("Unknown command: '\{other}'")
      print_usage()
    }
  }
}
