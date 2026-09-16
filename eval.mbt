///|
/// Value produced during condition evaluation.
pub(all) enum EvalValue {
  VBool(Bool)
  VInt(Int)
} derive(Eq, Debug)

///|
fn EvalValue::as_bool(self : EvalValue) -> Bool {
  match self {
    VBool(b) => b
    VInt(i) => i != 0
  }
}

///|
fn EvalValue::as_int(self : EvalValue) -> Int {
  match self {
    VInt(i) => i
    VBool(b) => if b { 1 } else { 0 }
  }
}

///|
/// Context containing target size and pattern match records for evaluation.
pub(all) struct EvalContext {
  target_size : Int
  string_matches : Map[String, Array[StringMatch]]
  all_strings : Array[StringDef]
}

///|
fn normalize_var_id(id : String) -> String {
  if id.length() > 0 && id[0] == '#' {
    "$" + id.sub(start=1).to_owned()
  } else {
    id
  }
}

///|
/// Evaluates a condition expression against the current matching context.
pub fn eval_expr(expr : ConditionExpr, ctx : EvalContext) -> EvalValue {
  match expr {
    TrueLit => VBool(true)
    FalseLit => VBool(false)
    IntLit(i) => VInt(i)
    FileSize => VInt(ctx.target_size)
    StringId(id) =>
      match ctx.string_matches.get(id) {
        Some(arr) => VBool(arr.length() > 0)
        None => VBool(false)
      }
    MatchCount(id) => {
      let var_id = normalize_var_id(id)
      match ctx.string_matches.get(var_id) {
        Some(arr) => VInt(arr.length())
        None => VInt(0)
      }
    }
    Not(sub) => VBool(!eval_expr(sub, ctx).as_bool())
    And(left, right) =>
      VBool(eval_expr(left, ctx).as_bool() && eval_expr(right, ctx).as_bool())
    Or(left, right) =>
      VBool(eval_expr(left, ctx).as_bool() || eval_expr(right, ctx).as_bool())
    Eq(left, right) => {
      let lv = eval_expr(left, ctx)
      let rv = eval_expr(right, ctx)
      match (lv, rv) {
        (VInt(a), VInt(b)) => VBool(a == b)
        (VBool(a), VBool(b)) => VBool(a == b)
        _ => VBool(lv.as_int() == rv.as_int())
      }
    }
    Neq(left, right) => {
      let lv = eval_expr(left, ctx)
      let rv = eval_expr(right, ctx)
      match (lv, rv) {
        (VInt(a), VInt(b)) => VBool(a != b)
        (VBool(a), VBool(b)) => VBool(a != b)
        _ => VBool(lv.as_int() != rv.as_int())
      }
    }
    Lt(left, right) =>
      VBool(eval_expr(left, ctx).as_int() < eval_expr(right, ctx).as_int())
    Lte(left, right) =>
      VBool(eval_expr(left, ctx).as_int() <= eval_expr(right, ctx).as_int())
    Gt(left, right) =>
      VBool(eval_expr(left, ctx).as_int() > eval_expr(right, ctx).as_int())
    Gte(left, right) =>
      VBool(eval_expr(left, ctx).as_int() >= eval_expr(right, ctx).as_int())
    At(id, offset_expr) => {
      let expected_offset = eval_expr(offset_expr, ctx).as_int()
      match ctx.string_matches.get(id) {
        Some(arr) => {
          let mut found = false
          for m in arr {
            if m.offset == expected_offset {
              found = true
              break
            }
          }
          VBool(found)
        }
        None => VBool(false)
      }
    }
    In(id, start_expr, end_expr) => {
      let s = eval_expr(start_expr, ctx).as_int()
      let e = eval_expr(end_expr, ctx).as_int()
      match ctx.string_matches.get(id) {
        Some(arr) => {
          let mut found = false
          for m in arr {
            if m.offset >= s && m.offset <= e {
              found = true
              break
            }
          }
          VBool(found)
        }
        None => VBool(false)
      }
    }
    AnyOfThem => {
      let mut any_matched = false
      for str_def in ctx.all_strings {
        match ctx.string_matches.get(str_def.identifier) {
          Some(arr) if arr.length() > 0 => {
            any_matched = true
            break
          }
          _ => ()
        }
      }
      VBool(any_matched)
    }
    AllOfThem => {
      let mut all_matched = true
      for str_def in ctx.all_strings {
        match ctx.string_matches.get(str_def.identifier) {
          Some(arr) if arr.length() > 0 => ()
          _ => {
            all_matched = false
            break
          }
        }
      }
      VBool(all_matched)
    }
    NumOfThem(n_expr) => {
      let required = eval_expr(n_expr, ctx).as_int()
      let mut count = 0
      for str_def in ctx.all_strings {
        match ctx.string_matches.get(str_def.identifier) {
          Some(arr) if arr.length() > 0 => count += 1
          _ => ()
        }
      }
      VBool(count >= required)
    }
    NumOfSet(n_expr, set) => {
      let required = eval_expr(n_expr, ctx).as_int()
      let mut count = 0
      for id in set {
        match ctx.string_matches.get(id) {
          Some(arr) if arr.length() > 0 => count += 1
          _ => ()
        }
      }
      VBool(count >= required)
    }
  }
}

///|
/// Helper to evaluate condition to boolean.
pub fn eval_condition(expr : ConditionExpr, ctx : EvalContext) -> Bool {
  eval_expr(expr, ctx).as_bool()
}
