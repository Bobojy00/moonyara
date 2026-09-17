///|
fn print_usage() -> Unit {
  let usage =
    #|moonyara - Lightweight YARA Malware Signature Scanner in MoonBit
    #|
    #|Usage:
    #|  moonyara scan -r <rule_file> <target_path> [options]
    #|  moonyara check <rule_file>
    #|  moonyara --help
    #|  moonyara --version
    #|
    #|Commands:
    #|  scan     Scan a target file or directory against YARA rules
    #|  check    Verify and validate YARA rule syntax
    #|
    #|Options:
    #|  -r, --rule <path>         Specify path to YARA rules file
    #|  -t, --tag <tag>           Only execute rules matching this tag
    #|  -e, --exclude-tag <tag>   Exclude rules matching this tag
    #|  -R, --recursive           Recursively scan subdirectories
    #|  --json                    Output scan results in JSON format
    #|  -h, --help                Show this help message
    #|  -v, --version             Show version information
    #|
    #|Examples:
    #|  moonyara check rules/webshell.yar
    #|  moonyara scan -r rules/webshell.yar suspicious.bin
    #|  moonyara scan -r rules/malware.yar samples/ -t critical -R --json
  println(usage)
}

///|
fn collect_rule_files(path : String) -> Array[String] {
  let files : Array[String] = []
  if !@fs.path_exists(path) {
    return files
  }
  let is_directory = @fs.is_dir(path) catch { _ => false }
  if !is_directory {
    files.push(path)
    return files
  }

  fn walk(dir : String) -> Unit {
    let entries = @fs.read_dir(dir) catch { _ => return }
    for entry in entries {
      let sep = if dir.has_suffix("/") || dir.has_suffix("\\") {
        ""
      } else {
        "/"
      }
      let full = dir + sep + entry
      let is_sub = @fs.is_dir(full) catch { _ => false }
      if is_sub {
        walk(full)
      } else if full.has_suffix(".yar") || full.has_suffix(".yara") {
        files.push(full)
      }
    }
  }

  walk(path)
  files
}

///|
fn load_engine_from_path(rule_path : String) -> @lib.Engine? {
  let rule_files = collect_rule_files(rule_path)
  if rule_files.length() == 0 {
    println("Error: No rule file found at '\{rule_path}'")
    return None
  }

  let engine = @lib.Engine::new()
  for file in rule_files {
    let content = @fs.read_file_to_string(file) catch {
      _ => {
        println("Error: Failed to read rule file at '\{file}'")
        return None
      }
    }
    engine.add_rules_from_string(content) catch {
      err => {
        println("Syntax Error in rule file '\{file}': \{err}")
        return None
      }
    }
  }

  Some(engine)
}

///|
fn handle_check(rule_path : String) -> Unit {
  let rule_files = collect_rule_files(rule_path)
  if rule_files.length() == 0 {
    println("Error: No rule file found at '\{rule_path}'")
    return
  }

  let engine = match load_engine_from_path(rule_path) {
    Some(e) => e
    None => return
  }

  println(
    "[+] Rule validation successful: \{engine.rules.length()} rule(s) loaded from \{rule_files.length()} file(s)",
  )
}

///|
fn collect_target_files(path : String, recursive : Bool) -> Array[String] {
  let files : Array[String] = []
  if !@fs.path_exists(path) {
    return files
  }
  let is_directory = @fs.is_dir(path) catch { _ => false }
  if !is_directory {
    files.push(path)
    return files
  }

  fn walk_dir(dir : String) -> Unit {
    let entries = @fs.read_dir(dir) catch { _ => return }
    for entry in entries {
      let sep = if dir.has_suffix("/") || dir.has_suffix("\\") {
        ""
      } else {
        "/"
      }
      let full_path = dir + sep + entry
      let is_sub = @fs.is_dir(full_path) catch { _ => false }
      if is_sub {
        if recursive {
          walk_dir(full_path)
        }
      } else {
        files.push(full_path)
      }
    }
  }

  walk_dir(path)
  files
}

///|
fn handle_scan(
  rule_path : String,
  target_path : String,
  recursive : Bool,
  is_json : Bool,
  include_tag? : String,
  exclude_tag? : String,
) -> Unit {
  let raw_engine = match load_engine_from_path(rule_path) {
    Some(e) => e
    None => return
  }
  let engine = raw_engine.filter_tags(include_tag?, exclude_tag?)

  let files = collect_target_files(target_path, recursive)
  if files.length() == 0 {
    println(
      "Error: Target path '\{target_path}' not found or contains no files.",
    )
    return
  }

  // Single file scan without directory mode
  let is_single_file = files.length() == 1 &&
    (@fs.is_file(target_path) catch { _ => false })

  if is_single_file {
    let target_file = files[0]
    let target_bytes = @fs.read_file_to_bytes(target_file) catch {
      _ => {
        println("Error: Failed to read target file at '\{target_file}'")
        return
      }
    }
    let report = engine.scan(target_bytes)
    if is_json {
      let sb = StringBuilder()
      sb.write_string("{\n")
      sb.write_string("  \"target\": \"\{target_file}\",\n")
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
      println("[+] Target: '\{target_file}' (\{report.target_size} bytes)")
      let tag_filter_info = match (include_tag, exclude_tag) {
        (Some(inc), Some(exc)) => " [filter: +\{inc}, -\{exc}]"
        (Some(inc), None) => " [filter: +\{inc}]"
        (None, Some(exc)) => " [filter: -\{exc}]"
        (None, None) => ""
      }
      println(
        "[+] Rules : '\{rule_path}' (\{engine.rules.length()} rules loaded\{tag_filter_info})",
      )
      println("--------------------------------------------------")
      if report.matches.length() == 0 {
        println("[✓] Clean: No matching signatures detected.")
      } else {
        for m in report.matches {
          let tag_info = if m.tags.length() > 0 {
            let tb = StringBuilder()
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
    return
  }

  // Multi-file / directory batch scan mode
  let mut total_threats = 0
  let infected_reports : Array[(String, @lib.ScanReport)] = []

  for file in files {
    let bytes = @fs.read_file_to_bytes(file) catch { _ => continue }
    let rep = engine.scan(bytes)
    if rep.matches.length() > 0 {
      total_threats += 1
      infected_reports.push((file, rep))
    }
  }

  if is_json {
    let sb = StringBuilder()
    sb.write_string("{\n")
    sb.write_string("  \"scan_target\": \"\{target_path}\",\n")
    sb.write_string("  \"files_scanned\": \{files.length()},\n")
    sb.write_string("  \"threats_detected\": \{total_threats},\n")
    sb.write_string("  \"reports\": [\n")

    let mut first_file = true
    for item in infected_reports {
      let (file, rep) = item
      if !first_file {
        sb.write_string(",\n")
      }
      first_file = false

      sb.write_string("    {\n")
      sb.write_string("      \"file\": \"\{file}\",\n")
      sb.write_string("      \"size\": \{rep.target_size},\n")
      sb.write_string("      \"matches\": [\n")
      let mut first_r = true
      for m in rep.matches {
        if !first_r {
          sb.write_string(",\n")
        }
        first_r = false
        sb.write_string("        {\n")
        sb.write_string("          \"rule\": \"\{m.rule_name}\",\n")
        sb.write_string("          \"tags\": [")
        let mut first_t = true
        for t in m.tags {
          if !first_t {
            sb.write_string(", ")
          }
          first_t = false
          sb.write_string("\"\{t}\"")
        }
        sb.write_string("]\n")
        sb.write_string("        }")
      }
      sb.write_string("\n      ]\n")
      sb.write_string("    }")
    }
    sb.write_string("\n  ]\n}")
    println(sb.to_string())
  } else {
    println(
      "[+] Batch Target: '\{target_path}' (\{files.length()} files collected, recursive: \{recursive})",
    )
    let tag_filter_info = match (include_tag, exclude_tag) {
      (Some(inc), Some(exc)) => " [filter: +\{inc}, -\{exc}]"
      (Some(inc), None) => " [filter: +\{inc}]"
      (None, Some(exc)) => " [filter: -\{exc}]"
      (None, None) => ""
    }
    println(
      "[+] Active Rules: '\{rule_path}' (\{engine.rules.length()} rules loaded\{tag_filter_info})",
    )
    println("--------------------------------------------------")
    if total_threats == 0 {
      println(
        "[✓] All clean: 0 threats detected across \{files.length()} scanned file(s).",
      )
    } else {
      for item in infected_reports {
        let (file, rep) = item
        println("[!] THREAT FOUND: \{file}")
        for m in rep.matches {
          println("    ├─ Rule: \{m.rule_name}")
          for sm in m.matched_strings {
            println(
              "    │  └─ \{sm.identifier} at offset \{sm.offset} (length: \{sm.length})",
            )
          }
        }
      }
      println("--------------------------------------------------")
      println(
        "[!] Summary: \{total_threats} infected file(s), \{files.length() - total_threats} clean file(s) (total: \{files.length()}).",
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
      let mut target_path : String? = None
      let mut include_tag : String? = None
      let mut exclude_tag : String? = None
      let mut is_json = false
      let mut recursive = false

      let mut i = 1
      while i < args.length() {
        let arg = args[i]
        if arg == "-r" || arg == "--rule" {
          if i + 1 < args.length() {
            rule_file = Some(args[i + 1])
            i += 2
            continue
          }
        } else if arg == "-t" || arg == "--tag" {
          if i + 1 < args.length() {
            include_tag = Some(args[i + 1])
            i += 2
            continue
          }
        } else if arg == "-e" || arg == "--exclude-tag" {
          if i + 1 < args.length() {
            exclude_tag = Some(args[i + 1])
            i += 2
            continue
          }
        } else if arg == "-R" || arg == "--recursive" {
          recursive = true
          i += 1
          continue
        } else if arg == "--json" {
          is_json = true
          i += 1
          continue
        } else if target_path is None {
          target_path = Some(arg)
          i += 1
          continue
        }
        i += 1
      }

      match (rule_file, target_path) {
        (Some(rf), Some(tp)) =>
          handle_scan(rf, tp, recursive, is_json, include_tag?, exclude_tag?)
        (None, _) =>
          println(
            "Error: Missing rule file (-r <rule_file>). See 'moonyara --help'.",
          )
        (_, None) =>
          println("Error: Missing target to scan. See 'moonyara --help'.")
      }
    }
    other => {
      println("Unknown command: '\{other}'")
      print_usage()
    }
  }
}
