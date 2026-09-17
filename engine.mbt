///|
/// Compiled scanner engine holding parsed YARA rules.
pub(all) struct Engine {
  rules : Array[Rule]
}

///|
/// Creates a new, empty scanner engine.
pub fn Engine::new() -> Engine {
  { rules: [] }
}

///|
/// Compiles YARA rule source string into a ready-to-use scanner engine.
pub fn compile(source : String) -> Engine raise {
  let rules = parse_rules_from_string(source)
  { rules, }
}

///|
/// Appends an already-parsed rule to this engine.
pub fn Engine::add_rule(self : Engine, rule : Rule) -> Unit {
  self.rules.push(rule)
}

///|
/// Parses and appends rules from source string to this engine.
pub fn Engine::add_rules_from_string(
  self : Engine,
  source : String,
) -> Unit raise {
  let new_rules = parse_rules_from_string(source)
  for r in new_rules {
    self.rules.push(r)
  }
}

///|
/// Scans byte slice against all rules in the engine and returns match report.
pub fn Engine::scan(self : Engine, target_data : Bytes) -> ScanReport {
  let matched_rules : Array[RuleMatch] = []
  let n = target_data.length()

  for rule in self.rules {
    let match_map = match_rule_strings(target_data, rule.strings)
    let ctx : EvalContext = {
      target_data,
      target_size: n,
      string_matches: match_map,
      all_strings: rule.strings,
    }
    let passed = eval_condition(rule.condition, ctx)
    if passed {
      let matched_strings : Array[StringMatch] = []
      for str_def in rule.strings {
        match match_map.get(str_def.identifier) {
          Some(arr) =>
            for m in arr {
              matched_strings.push(m)
            }
          None => ()
        }
      }
      matched_rules.push({
        rule_name: rule.name,
        tags: rule.tags,
        metas: rule.metas,
        matched_strings,
      })
    }
  }

  { target_size: n, matches: matched_rules }
}
