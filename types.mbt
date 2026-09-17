///|
/// Represents metadata values associated with a YARA rule.
pub(all) enum MetaValue {
  MetaString(String)
  MetaInt(Int)
  MetaBool(Bool)
} derive(Eq, Debug)

///|
/// A key-value pair entry in the `meta:` section of a rule.
pub(all) struct MetaEntry {
  key : String
  value : MetaValue
} derive(Eq, Debug)

///|
/// Defines pattern types supported by strings section.
pub(all) enum PatternKind {
  Text(String, nocase~ : Bool, wide~ : Bool)
  Hex(Array[Byte], Array[Byte]) // (target_bytes, mask_bytes)
  Regex(String, nocase~ : Bool, wide~ : Bool)
  XorText(String, min_key~ : Int, max_key~ : Int, wide~ : Bool)
  Base64Text(String, wide~ : Bool)
} derive(Eq, Debug)

///|
/// A pattern definition bound to an identifier like `$str`.
pub(all) struct StringDef {
  identifier : String
  pattern : PatternKind
} derive(Eq, Debug)

///|
/// Abstract Syntax Tree for YARA rule conditions.
pub(all) enum ConditionExpr {
  TrueLit
  FalseLit
  IntLit(Int)
  StringId(String) // e.g. "$a"
  MatchCount(String) // e.g. "#a"
  FileSize // "filesize"
  Not(ConditionExpr)
  And(ConditionExpr, ConditionExpr)
  Or(ConditionExpr, ConditionExpr)
  Eq(ConditionExpr, ConditionExpr)
  Neq(ConditionExpr, ConditionExpr)
  Lt(ConditionExpr, ConditionExpr)
  Lte(ConditionExpr, ConditionExpr)
  Gt(ConditionExpr, ConditionExpr)
  Gte(ConditionExpr, ConditionExpr)
  At(String, ConditionExpr) // $a at offset
  In(String, ConditionExpr, ConditionExpr) // $a in (start..end)
  AnyOfThem // any of them
  AllOfThem // all of them
  NumOfThem(ConditionExpr) // N of them
  NumOfSet(ConditionExpr, Array[String]) // N of ($a, $b)
  Uint8(ConditionExpr)
  Uint16(ConditionExpr)
  Uint16Be(ConditionExpr)
  Uint32(ConditionExpr)
  Uint32Be(ConditionExpr)
  MatchOffset(String) // e.g. "@a"
} derive(Eq, Debug)

///|
/// A parsed YARA rule.
pub(all) struct Rule {
  name : String
  tags : Array[String]
  metas : Array[MetaEntry]
  strings : Array[StringDef]
  condition : ConditionExpr
} derive(Eq, Debug)

///|
/// Individual occurrence of a string pattern match within target data.
pub(all) struct StringMatch {
  identifier : String
  offset : Int
  length : Int
  data : Array[Byte]
} derive(Eq, Debug)

///|
/// Result of a single rule match against target data.
pub(all) struct RuleMatch {
  rule_name : String
  tags : Array[String]
  metas : Array[MetaEntry]
  matched_strings : Array[StringMatch]
} derive(Eq, Debug)

///|
/// Aggregated scan report returned by the scanner engine.
pub(all) struct ScanReport {
  target_size : Int
  matches : Array[RuleMatch]
} derive(Eq, Debug)
