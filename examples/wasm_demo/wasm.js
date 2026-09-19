function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4Some.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array();
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error47Bobojy00_2fmoonyara_2eLexError_2eUnexpectedChar(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC15error5Error47Bobojy00_2fmoonyara_2eLexError_2eUnexpectedChar.prototype.$tag = 14;
function _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString.prototype.$tag = 13;
function _M0DTPC15error5Error52Bobojy00_2fmoonyara_2eLexError_2eUnterminatedComment(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52Bobojy00_2fmoonyara_2eLexError_2eUnterminatedComment.prototype.$tag = 12;
function _M0DTPC15error5Error53Bobojy00_2fmoonyara_2eLexError_2eUnterminatedHexBlock(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error53Bobojy00_2fmoonyara_2eLexError_2eUnterminatedHexBlock.prototype.$tag = 11;
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexDigit(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexDigit.prototype.$tag = 10;
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexBlock(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexBlock.prototype.$tag = 9;
function _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken.prototype.$tag = 8;
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eParseError_2eUnexpectedEof(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eParseError_2eUnexpectedEof.prototype.$tag = 7;
function _M0DTPC15error5Error52Bobojy00_2fmoonyara_2eParseError_2eInvalidExpression(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC15error5Error52Bobojy00_2fmoonyara_2eParseError_2eInvalidExpression.prototype.$tag = 6;
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd() {}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd.prototype.$tag = 5;
const _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd__ = new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd();
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidEscape.prototype.$tag = 4;
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedGroup() {}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedGroup.prototype.$tag = 3;
const _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedGroup__ = new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedGroup();
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedClass() {}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedClass.prototype.$tag = 2;
const _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedClass__ = new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedClass();
function _M0DTPC15error5Error47Bobojy00_2fmoonyara_2eRegexError_2eInvalidRange(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error47Bobojy00_2fmoonyara_2eRegexError_2eInvalidRange.prototype.$tag = 1;
function _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidRepeat() {}
_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidRepeat.prototype.$tag = 0;
function _M0DTP28Bobojy008moonyara9RegexNode5Class(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexNode5Class.prototype.$tag = 0;
function _M0DTP28Bobojy008moonyara9RegexNode3Seq(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexNode3Seq.prototype.$tag = 1;
function _M0DTP28Bobojy008moonyara9RegexNode3Alt(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexNode3Alt.prototype.$tag = 2;
function _M0DTP28Bobojy008moonyara9RegexNode4Star(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexNode4Star.prototype.$tag = 3;
function _M0DTP28Bobojy008moonyara9RegexNode4Plus(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexNode4Plus.prototype.$tag = 4;
function _M0DTP28Bobojy008moonyara9RegexNode5Quest(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexNode5Quest.prototype.$tag = 5;
function _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok.prototype.$tag = 1;
function _M0TP28Bobojy008moonyara8Compiler(param0) {
  this.insts = param0;
}
function _M0DTP28Bobojy008moonyara9RegexInst9MatchByte(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexInst9MatchByte.prototype.$tag = 0;
function _M0DTP28Bobojy008moonyara9RegexInst5Split(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara9RegexInst5Split.prototype.$tag = 1;
function _M0DTP28Bobojy008moonyara9RegexInst4Jump(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9RegexInst4Jump.prototype.$tag = 2;
function _M0DTP28Bobojy008moonyara9RegexInst12MatchSuccess() {}
_M0DTP28Bobojy008moonyara9RegexInst12MatchSuccess.prototype.$tag = 3;
const _M0DTP28Bobojy008moonyara9RegexInst12MatchSuccess__ = new _M0DTP28Bobojy008moonyara9RegexInst12MatchSuccess();
function _M0TP28Bobojy008moonyara11RegexParser(param0, param1, param2) {
  this.input = param0;
  this.pos = param1;
  this.nocase = param2;
}
function _M0DTPC16result6ResultGRP28Bobojy008moonyara13CompiledRegexRP28Bobojy008moonyara10RegexErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara13CompiledRegexRP28Bobojy008moonyara10RegexErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara13CompiledRegexRP28Bobojy008moonyara10RegexErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara13CompiledRegexRP28Bobojy008moonyara10RegexErrorE2Ok.prototype.$tag = 1;
function _M0TP28Bobojy008moonyara13CompiledRegex(param0) {
  this.instructions = param0;
}
function _M0TPB8MutLocalGRPB5ArrayGiEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGOiE(param0) {
  this.val = param0;
}
function _M0TP28Bobojy008moonyara11StringMatch(param0, param1, param2, param3) {
  this.identifier = param0;
  this.offset = param1;
  this.length = param2;
  this.data = param3;
}
function _M0TP28Bobojy008moonyara6Parser(param0, param1) {
  this.tokens = param0;
  this.pos = param1;
}
function _M0TP28Bobojy008moonyara5Token(param0, param1, param2) {
  this.kind = param0;
  this.line = param1;
  this.col = param2;
}
function _M0DTP28Bobojy008moonyara9TokenKind6KwRule() {}
_M0DTP28Bobojy008moonyara9TokenKind6KwRule.prototype.$tag = 0;
const _M0DTP28Bobojy008moonyara9TokenKind6KwRule__ = new _M0DTP28Bobojy008moonyara9TokenKind6KwRule();
function _M0DTP28Bobojy008moonyara9TokenKind6KwMeta() {}
_M0DTP28Bobojy008moonyara9TokenKind6KwMeta.prototype.$tag = 1;
const _M0DTP28Bobojy008moonyara9TokenKind6KwMeta__ = new _M0DTP28Bobojy008moonyara9TokenKind6KwMeta();
function _M0DTP28Bobojy008moonyara9TokenKind9KwStrings() {}
_M0DTP28Bobojy008moonyara9TokenKind9KwStrings.prototype.$tag = 2;
const _M0DTP28Bobojy008moonyara9TokenKind9KwStrings__ = new _M0DTP28Bobojy008moonyara9TokenKind9KwStrings();
function _M0DTP28Bobojy008moonyara9TokenKind11KwCondition() {}
_M0DTP28Bobojy008moonyara9TokenKind11KwCondition.prototype.$tag = 3;
const _M0DTP28Bobojy008moonyara9TokenKind11KwCondition__ = new _M0DTP28Bobojy008moonyara9TokenKind11KwCondition();
function _M0DTP28Bobojy008moonyara9TokenKind8KwNocase() {}
_M0DTP28Bobojy008moonyara9TokenKind8KwNocase.prototype.$tag = 4;
const _M0DTP28Bobojy008moonyara9TokenKind8KwNocase__ = new _M0DTP28Bobojy008moonyara9TokenKind8KwNocase();
function _M0DTP28Bobojy008moonyara9TokenKind6KwWide() {}
_M0DTP28Bobojy008moonyara9TokenKind6KwWide.prototype.$tag = 5;
const _M0DTP28Bobojy008moonyara9TokenKind6KwWide__ = new _M0DTP28Bobojy008moonyara9TokenKind6KwWide();
function _M0DTP28Bobojy008moonyara9TokenKind7KwAscii() {}
_M0DTP28Bobojy008moonyara9TokenKind7KwAscii.prototype.$tag = 6;
const _M0DTP28Bobojy008moonyara9TokenKind7KwAscii__ = new _M0DTP28Bobojy008moonyara9TokenKind7KwAscii();
function _M0DTP28Bobojy008moonyara9TokenKind5KwAnd() {}
_M0DTP28Bobojy008moonyara9TokenKind5KwAnd.prototype.$tag = 7;
const _M0DTP28Bobojy008moonyara9TokenKind5KwAnd__ = new _M0DTP28Bobojy008moonyara9TokenKind5KwAnd();
function _M0DTP28Bobojy008moonyara9TokenKind4KwOr() {}
_M0DTP28Bobojy008moonyara9TokenKind4KwOr.prototype.$tag = 8;
const _M0DTP28Bobojy008moonyara9TokenKind4KwOr__ = new _M0DTP28Bobojy008moonyara9TokenKind4KwOr();
function _M0DTP28Bobojy008moonyara9TokenKind5KwNot() {}
_M0DTP28Bobojy008moonyara9TokenKind5KwNot.prototype.$tag = 9;
const _M0DTP28Bobojy008moonyara9TokenKind5KwNot__ = new _M0DTP28Bobojy008moonyara9TokenKind5KwNot();
function _M0DTP28Bobojy008moonyara9TokenKind4KwAt() {}
_M0DTP28Bobojy008moonyara9TokenKind4KwAt.prototype.$tag = 10;
const _M0DTP28Bobojy008moonyara9TokenKind4KwAt__ = new _M0DTP28Bobojy008moonyara9TokenKind4KwAt();
function _M0DTP28Bobojy008moonyara9TokenKind4KwIn() {}
_M0DTP28Bobojy008moonyara9TokenKind4KwIn.prototype.$tag = 11;
const _M0DTP28Bobojy008moonyara9TokenKind4KwIn__ = new _M0DTP28Bobojy008moonyara9TokenKind4KwIn();
function _M0DTP28Bobojy008moonyara9TokenKind4KwOf() {}
_M0DTP28Bobojy008moonyara9TokenKind4KwOf.prototype.$tag = 12;
const _M0DTP28Bobojy008moonyara9TokenKind4KwOf__ = new _M0DTP28Bobojy008moonyara9TokenKind4KwOf();
function _M0DTP28Bobojy008moonyara9TokenKind6KwThem() {}
_M0DTP28Bobojy008moonyara9TokenKind6KwThem.prototype.$tag = 13;
const _M0DTP28Bobojy008moonyara9TokenKind6KwThem__ = new _M0DTP28Bobojy008moonyara9TokenKind6KwThem();
function _M0DTP28Bobojy008moonyara9TokenKind10KwFilesize() {}
_M0DTP28Bobojy008moonyara9TokenKind10KwFilesize.prototype.$tag = 14;
const _M0DTP28Bobojy008moonyara9TokenKind10KwFilesize__ = new _M0DTP28Bobojy008moonyara9TokenKind10KwFilesize();
function _M0DTP28Bobojy008moonyara9TokenKind6KwTrue() {}
_M0DTP28Bobojy008moonyara9TokenKind6KwTrue.prototype.$tag = 15;
const _M0DTP28Bobojy008moonyara9TokenKind6KwTrue__ = new _M0DTP28Bobojy008moonyara9TokenKind6KwTrue();
function _M0DTP28Bobojy008moonyara9TokenKind7KwFalse() {}
_M0DTP28Bobojy008moonyara9TokenKind7KwFalse.prototype.$tag = 16;
const _M0DTP28Bobojy008moonyara9TokenKind7KwFalse__ = new _M0DTP28Bobojy008moonyara9TokenKind7KwFalse();
function _M0DTP28Bobojy008moonyara9TokenKind7KwUint8() {}
_M0DTP28Bobojy008moonyara9TokenKind7KwUint8.prototype.$tag = 17;
const _M0DTP28Bobojy008moonyara9TokenKind7KwUint8__ = new _M0DTP28Bobojy008moonyara9TokenKind7KwUint8();
function _M0DTP28Bobojy008moonyara9TokenKind8KwUint16() {}
_M0DTP28Bobojy008moonyara9TokenKind8KwUint16.prototype.$tag = 18;
const _M0DTP28Bobojy008moonyara9TokenKind8KwUint16__ = new _M0DTP28Bobojy008moonyara9TokenKind8KwUint16();
function _M0DTP28Bobojy008moonyara9TokenKind10KwUint16Be() {}
_M0DTP28Bobojy008moonyara9TokenKind10KwUint16Be.prototype.$tag = 19;
const _M0DTP28Bobojy008moonyara9TokenKind10KwUint16Be__ = new _M0DTP28Bobojy008moonyara9TokenKind10KwUint16Be();
function _M0DTP28Bobojy008moonyara9TokenKind8KwUint32() {}
_M0DTP28Bobojy008moonyara9TokenKind8KwUint32.prototype.$tag = 20;
const _M0DTP28Bobojy008moonyara9TokenKind8KwUint32__ = new _M0DTP28Bobojy008moonyara9TokenKind8KwUint32();
function _M0DTP28Bobojy008moonyara9TokenKind10KwUint32Be() {}
_M0DTP28Bobojy008moonyara9TokenKind10KwUint32Be.prototype.$tag = 21;
const _M0DTP28Bobojy008moonyara9TokenKind10KwUint32Be__ = new _M0DTP28Bobojy008moonyara9TokenKind10KwUint32Be();
function _M0DTP28Bobojy008moonyara9TokenKind9KwInclude() {}
_M0DTP28Bobojy008moonyara9TokenKind9KwInclude.prototype.$tag = 22;
const _M0DTP28Bobojy008moonyara9TokenKind9KwInclude__ = new _M0DTP28Bobojy008moonyara9TokenKind9KwInclude();
function _M0DTP28Bobojy008moonyara9TokenKind5KwXor() {}
_M0DTP28Bobojy008moonyara9TokenKind5KwXor.prototype.$tag = 23;
const _M0DTP28Bobojy008moonyara9TokenKind5KwXor__ = new _M0DTP28Bobojy008moonyara9TokenKind5KwXor();
function _M0DTP28Bobojy008moonyara9TokenKind8KwBase64() {}
_M0DTP28Bobojy008moonyara9TokenKind8KwBase64.prototype.$tag = 24;
const _M0DTP28Bobojy008moonyara9TokenKind8KwBase64__ = new _M0DTP28Bobojy008moonyara9TokenKind8KwBase64();
function _M0DTP28Bobojy008moonyara9TokenKind6LBrace() {}
_M0DTP28Bobojy008moonyara9TokenKind6LBrace.prototype.$tag = 25;
const _M0DTP28Bobojy008moonyara9TokenKind6LBrace__ = new _M0DTP28Bobojy008moonyara9TokenKind6LBrace();
function _M0DTP28Bobojy008moonyara9TokenKind6RBrace() {}
_M0DTP28Bobojy008moonyara9TokenKind6RBrace.prototype.$tag = 26;
const _M0DTP28Bobojy008moonyara9TokenKind6RBrace__ = new _M0DTP28Bobojy008moonyara9TokenKind6RBrace();
function _M0DTP28Bobojy008moonyara9TokenKind6LParen() {}
_M0DTP28Bobojy008moonyara9TokenKind6LParen.prototype.$tag = 27;
const _M0DTP28Bobojy008moonyara9TokenKind6LParen__ = new _M0DTP28Bobojy008moonyara9TokenKind6LParen();
function _M0DTP28Bobojy008moonyara9TokenKind6RParen() {}
_M0DTP28Bobojy008moonyara9TokenKind6RParen.prototype.$tag = 28;
const _M0DTP28Bobojy008moonyara9TokenKind6RParen__ = new _M0DTP28Bobojy008moonyara9TokenKind6RParen();
function _M0DTP28Bobojy008moonyara9TokenKind5Colon() {}
_M0DTP28Bobojy008moonyara9TokenKind5Colon.prototype.$tag = 29;
const _M0DTP28Bobojy008moonyara9TokenKind5Colon__ = new _M0DTP28Bobojy008moonyara9TokenKind5Colon();
function _M0DTP28Bobojy008moonyara9TokenKind6Assign() {}
_M0DTP28Bobojy008moonyara9TokenKind6Assign.prototype.$tag = 30;
const _M0DTP28Bobojy008moonyara9TokenKind6Assign__ = new _M0DTP28Bobojy008moonyara9TokenKind6Assign();
function _M0DTP28Bobojy008moonyara9TokenKind2Eq() {}
_M0DTP28Bobojy008moonyara9TokenKind2Eq.prototype.$tag = 31;
const _M0DTP28Bobojy008moonyara9TokenKind2Eq__ = new _M0DTP28Bobojy008moonyara9TokenKind2Eq();
function _M0DTP28Bobojy008moonyara9TokenKind3Neq() {}
_M0DTP28Bobojy008moonyara9TokenKind3Neq.prototype.$tag = 32;
const _M0DTP28Bobojy008moonyara9TokenKind3Neq__ = new _M0DTP28Bobojy008moonyara9TokenKind3Neq();
function _M0DTP28Bobojy008moonyara9TokenKind2Lt() {}
_M0DTP28Bobojy008moonyara9TokenKind2Lt.prototype.$tag = 33;
const _M0DTP28Bobojy008moonyara9TokenKind2Lt__ = new _M0DTP28Bobojy008moonyara9TokenKind2Lt();
function _M0DTP28Bobojy008moonyara9TokenKind3Lte() {}
_M0DTP28Bobojy008moonyara9TokenKind3Lte.prototype.$tag = 34;
const _M0DTP28Bobojy008moonyara9TokenKind3Lte__ = new _M0DTP28Bobojy008moonyara9TokenKind3Lte();
function _M0DTP28Bobojy008moonyara9TokenKind2Gt() {}
_M0DTP28Bobojy008moonyara9TokenKind2Gt.prototype.$tag = 35;
const _M0DTP28Bobojy008moonyara9TokenKind2Gt__ = new _M0DTP28Bobojy008moonyara9TokenKind2Gt();
function _M0DTP28Bobojy008moonyara9TokenKind3Gte() {}
_M0DTP28Bobojy008moonyara9TokenKind3Gte.prototype.$tag = 36;
const _M0DTP28Bobojy008moonyara9TokenKind3Gte__ = new _M0DTP28Bobojy008moonyara9TokenKind3Gte();
function _M0DTP28Bobojy008moonyara9TokenKind6DotDot() {}
_M0DTP28Bobojy008moonyara9TokenKind6DotDot.prototype.$tag = 37;
const _M0DTP28Bobojy008moonyara9TokenKind6DotDot__ = new _M0DTP28Bobojy008moonyara9TokenKind6DotDot();
function _M0DTP28Bobojy008moonyara9TokenKind5Comma() {}
_M0DTP28Bobojy008moonyara9TokenKind5Comma.prototype.$tag = 38;
const _M0DTP28Bobojy008moonyara9TokenKind5Comma__ = new _M0DTP28Bobojy008moonyara9TokenKind5Comma();
function _M0DTP28Bobojy008moonyara9TokenKind5Minus() {}
_M0DTP28Bobojy008moonyara9TokenKind5Minus.prototype.$tag = 39;
const _M0DTP28Bobojy008moonyara9TokenKind5Minus__ = new _M0DTP28Bobojy008moonyara9TokenKind5Minus();
function _M0DTP28Bobojy008moonyara9TokenKind9StringLit(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9TokenKind9StringLit.prototype.$tag = 40;
function _M0DTP28Bobojy008moonyara9TokenKind8HexBlock(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara9TokenKind8HexBlock.prototype.$tag = 41;
function _M0DTP28Bobojy008moonyara9TokenKind8RegexLit(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara9TokenKind8RegexLit.prototype.$tag = 42;
function _M0DTP28Bobojy008moonyara9TokenKind6IntLit(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9TokenKind6IntLit.prototype.$tag = 43;
function _M0DTP28Bobojy008moonyara9TokenKind11StringIdent(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9TokenKind11StringIdent.prototype.$tag = 44;
function _M0DTP28Bobojy008moonyara9TokenKind10CountIdent(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9TokenKind10CountIdent.prototype.$tag = 45;
function _M0DTP28Bobojy008moonyara9TokenKind11OffsetIdent(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9TokenKind11OffsetIdent.prototype.$tag = 46;
function _M0DTP28Bobojy008moonyara9TokenKind5Ident(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9TokenKind5Ident.prototype.$tag = 47;
function _M0DTP28Bobojy008moonyara9TokenKind3Eof() {}
_M0DTP28Bobojy008moonyara9TokenKind3Eof.prototype.$tag = 48;
const _M0DTP28Bobojy008moonyara9TokenKind3Eof__ = new _M0DTP28Bobojy008moonyara9TokenKind3Eof();
function _M0DTPC16result6ResultGsRP28Bobojy008moonyara10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP28Bobojy008moonyara10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP28Bobojy008moonyara10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP28Bobojy008moonyara10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRP28Bobojy008moonyara13ConditionExprE(param0) {
  this.val = param0;
}
function _M0DTP28Bobojy008moonyara13ConditionExpr7TrueLit() {}
_M0DTP28Bobojy008moonyara13ConditionExpr7TrueLit.prototype.$tag = 0;
const _M0DTP28Bobojy008moonyara13ConditionExpr7TrueLit__ = new _M0DTP28Bobojy008moonyara13ConditionExpr7TrueLit();
function _M0DTP28Bobojy008moonyara13ConditionExpr8FalseLit() {}
_M0DTP28Bobojy008moonyara13ConditionExpr8FalseLit.prototype.$tag = 1;
const _M0DTP28Bobojy008moonyara13ConditionExpr8FalseLit__ = new _M0DTP28Bobojy008moonyara13ConditionExpr8FalseLit();
function _M0DTP28Bobojy008moonyara13ConditionExpr6IntLit(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr6IntLit.prototype.$tag = 2;
function _M0DTP28Bobojy008moonyara13ConditionExpr8StringId(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr8StringId.prototype.$tag = 3;
function _M0DTP28Bobojy008moonyara13ConditionExpr10MatchCount(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr10MatchCount.prototype.$tag = 4;
function _M0DTP28Bobojy008moonyara13ConditionExpr8FileSize() {}
_M0DTP28Bobojy008moonyara13ConditionExpr8FileSize.prototype.$tag = 5;
const _M0DTP28Bobojy008moonyara13ConditionExpr8FileSize__ = new _M0DTP28Bobojy008moonyara13ConditionExpr8FileSize();
function _M0DTP28Bobojy008moonyara13ConditionExpr3Not(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr3Not.prototype.$tag = 6;
function _M0DTP28Bobojy008moonyara13ConditionExpr3And(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr3And.prototype.$tag = 7;
function _M0DTP28Bobojy008moonyara13ConditionExpr2Or(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr2Or.prototype.$tag = 8;
function _M0DTP28Bobojy008moonyara13ConditionExpr2Eq(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr2Eq.prototype.$tag = 9;
function _M0DTP28Bobojy008moonyara13ConditionExpr3Neq(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr3Neq.prototype.$tag = 10;
function _M0DTP28Bobojy008moonyara13ConditionExpr2Lt(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr2Lt.prototype.$tag = 11;
function _M0DTP28Bobojy008moonyara13ConditionExpr3Lte(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr3Lte.prototype.$tag = 12;
function _M0DTP28Bobojy008moonyara13ConditionExpr2Gt(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr2Gt.prototype.$tag = 13;
function _M0DTP28Bobojy008moonyara13ConditionExpr3Gte(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr3Gte.prototype.$tag = 14;
function _M0DTP28Bobojy008moonyara13ConditionExpr2At(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr2At.prototype.$tag = 15;
function _M0DTP28Bobojy008moonyara13ConditionExpr2In(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP28Bobojy008moonyara13ConditionExpr2In.prototype.$tag = 16;
function _M0DTP28Bobojy008moonyara13ConditionExpr9AnyOfThem() {}
_M0DTP28Bobojy008moonyara13ConditionExpr9AnyOfThem.prototype.$tag = 17;
const _M0DTP28Bobojy008moonyara13ConditionExpr9AnyOfThem__ = new _M0DTP28Bobojy008moonyara13ConditionExpr9AnyOfThem();
function _M0DTP28Bobojy008moonyara13ConditionExpr9AllOfThem() {}
_M0DTP28Bobojy008moonyara13ConditionExpr9AllOfThem.prototype.$tag = 18;
const _M0DTP28Bobojy008moonyara13ConditionExpr9AllOfThem__ = new _M0DTP28Bobojy008moonyara13ConditionExpr9AllOfThem();
function _M0DTP28Bobojy008moonyara13ConditionExpr9NumOfThem(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr9NumOfThem.prototype.$tag = 19;
function _M0DTP28Bobojy008moonyara13ConditionExpr8NumOfSet(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara13ConditionExpr8NumOfSet.prototype.$tag = 20;
function _M0DTP28Bobojy008moonyara13ConditionExpr5Uint8(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr5Uint8.prototype.$tag = 21;
function _M0DTP28Bobojy008moonyara13ConditionExpr6Uint16(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr6Uint16.prototype.$tag = 22;
function _M0DTP28Bobojy008moonyara13ConditionExpr8Uint16Be(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr8Uint16Be.prototype.$tag = 23;
function _M0DTP28Bobojy008moonyara13ConditionExpr6Uint32(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr6Uint32.prototype.$tag = 24;
function _M0DTP28Bobojy008moonyara13ConditionExpr8Uint32Be(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr8Uint32Be.prototype.$tag = 25;
function _M0DTP28Bobojy008moonyara13ConditionExpr11MatchOffset(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara13ConditionExpr11MatchOffset.prototype.$tag = 26;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGORP28Bobojy008moonyara13ConditionExprE(param0) {
  this.val = param0;
}
function _M0DTP28Bobojy008moonyara9MetaValue10MetaString(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9MetaValue10MetaString.prototype.$tag = 0;
function _M0DTP28Bobojy008moonyara9MetaValue7MetaInt(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9MetaValue7MetaInt.prototype.$tag = 1;
function _M0DTP28Bobojy008moonyara9MetaValue8MetaBool(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9MetaValue8MetaBool.prototype.$tag = 2;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP28Bobojy008moonyara9MetaEntry(param0, param1) {
  this.key = param0;
  this.value = param1;
}
function _M0DTP28Bobojy008moonyara11PatternKind4Text(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP28Bobojy008moonyara11PatternKind4Text.prototype.$tag = 0;
function _M0DTP28Bobojy008moonyara11PatternKind3Hex(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara11PatternKind3Hex.prototype.$tag = 1;
function _M0DTP28Bobojy008moonyara11PatternKind5Regex(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP28Bobojy008moonyara11PatternKind5Regex.prototype.$tag = 2;
function _M0DTP28Bobojy008moonyara11PatternKind7XorText(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP28Bobojy008moonyara11PatternKind7XorText.prototype.$tag = 3;
function _M0DTP28Bobojy008moonyara11PatternKind10Base64Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28Bobojy008moonyara11PatternKind10Base64Text.prototype.$tag = 4;
function _M0TP28Bobojy008moonyara9StringDef(param0, param1) {
  this.identifier = param0;
  this.pattern = param1;
}
function _M0TP28Bobojy008moonyara4Rule(param0, param1, param2, param3, param4) {
  this.name = param0;
  this.tags = param1;
  this.metas = param2;
  this.strings = param3;
  this.condition = param4;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara4RuleERP28Bobojy008moonyara10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara4RuleERP28Bobojy008moonyara10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara4RuleERP28Bobojy008moonyara10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara4RuleERP28Bobojy008moonyara10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP28Bobojy008moonyara5Lexer(param0, param1, param2, param3, param4) {
  this.input = param0;
  this.pos = param1;
  this.line = param2;
  this.col = param3;
  this.prev_was_assign = param4;
}
function _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP28Bobojy008moonyara8LexErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP28Bobojy008moonyara8LexErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP28Bobojy008moonyara8LexErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP28Bobojy008moonyara8LexErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP28Bobojy008moonyara9EvalValue5VBool(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9EvalValue5VBool.prototype.$tag = 0;
function _M0DTP28Bobojy008moonyara9EvalValue4VInt(param0) {
  this._0 = param0;
}
_M0DTP28Bobojy008moonyara9EvalValue4VInt.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara6EngineRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara6EngineRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28Bobojy008moonyara6EngineRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28Bobojy008moonyara6EngineRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TP28Bobojy008moonyara6Engine(param0) {
  this.rules = param0;
}
function _M0TP28Bobojy008moonyara11EvalContext(param0, param1, param2, param3) {
  this.target_data = param0;
  this.target_size = param1;
  this.string_matches = param2;
  this.all_strings = param3;
}
function _M0TP28Bobojy008moonyara9RuleMatch(param0, param1, param2, param3) {
  this.rule_name = param0;
  this.tags = param1;
  this.metas = param2;
  this.matched_strings = param3;
}
function _M0TP28Bobojy008moonyara10ScanReport(param0, param1) {
  this.target_size = param0;
  this.matches = param1;
}
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 1: {
      return "Bobojy00/moonyara.RegexError.InvalidRange";
    }
    case 11: {
      return "Bobojy00/moonyara.LexError.UnterminatedHexBlock";
    }
    case 5: {
      return "Bobojy00/moonyara.RegexError.UnexpectedEnd";
    }
    case 12: {
      return "Bobojy00/moonyara.LexError.UnterminatedComment";
    }
    case 7: {
      return "Bobojy00/moonyara.ParseError.UnexpectedEof";
    }
    case 9: {
      return "Bobojy00/moonyara.LexError.InvalidHexBlock";
    }
    case 2: {
      return "Bobojy00/moonyara.RegexError.UnclosedClass";
    }
    case 14: {
      return "Bobojy00/moonyara.LexError.UnexpectedChar";
    }
    case 10: {
      return "Bobojy00/moonyara.LexError.InvalidHexDigit";
    }
    case 13: {
      return "Bobojy00/moonyara.LexError.UnterminatedString";
    }
    case 6: {
      return "Bobojy00/moonyara.ParseError.InvalidExpression";
    }
    case 4: {
      return "Bobojy00/moonyara.RegexError.InvalidEscape";
    }
    case 8: {
      return "Bobojy00/moonyara.ParseError.UnexpectedToken";
    }
    case 0: {
      return "Bobojy00/moonyara.RegexError.InvalidRepeat";
    }
    default: {
      return "Bobojy00/moonyara.RegexError.UnclosedGroup";
    }
  }
}
const _M0MPB4Iter4nextN6constrS9385GcE = 0;
const _M0MPB4Iter4nextN6constrS9386GcE = 0;
const _M0MPB4Iter3newN6constrS9393GcE = 0;
const _M0FPB4seed = _M0FPB12random__seed();
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGRPC15error5ErrorE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGRPC15error5ErrorE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IP016_24default__implPB2Eq10not__equalGRP28Bobojy008moonyara9TokenKindE(x, y) {
  return !_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOcE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGcE(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGRPC15error5ErrorE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC15error5ErrorPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9386GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9385GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9393GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC15array5Array11new_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array11new_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0IPC15array10FixedArrayPB2Eq5equalGbE(self, that) {
  if (self.length !== that.length) {
    return false;
  }
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const x = self[i];
      $bound_check(that, i);
      if (_M0IP016_24default__implPB2Eq10not__equalGbE(x, that[i])) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGcE(self) {
  return self === -1 ? $panic() : self;
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEEE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC13int3Int8to__char(self) {
  _L: {
    if (self >= 0 && self <= 55295) {
      break _L;
    } else {
      if (self >= 57344 && self <= 1114111) {
        break _L;
      } else {
        return -1;
      }
    }
  }
  return self;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len) {
  let _tmp = len - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _tmp$2 = dst_offset + i | 0;
      const _tmp$3 = src_offset + i | 0;
      $bound_check(src, _tmp$3);
      $bound_check(dst, _tmp$2);
      dst[_tmp$2] = src[_tmp$3];
      _tmp = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC14char4Char21is__ascii__alphabetic(self) {
  return self >= 65 && self <= 90 ? true : self >= 97 && self <= 122;
}
function _M0MPC14char4Char16is__ascii__digit(self) {
  return self >= 48 && self <= 57;
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15bytes5Bytes9to__array(self) {
  const len = self.length;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(self, len, len, 0, 0);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array2atGyE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGyE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGRP28Bobojy008moonyara9RegexInstE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array4makeGyE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0IPC15array5ArrayPB2Eq5equalGyE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC14byte4BytePB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0MPC15array5Array5clearGiE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, 0);
}
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(_M0MPC16string10StringView4data(str), _M0MPC16string10StringView13start__offset(str), str.end - str.start | 0, bom);
}
function _M0IPC15error5ErrorPB4Show10to__string(self) {
  return _M0FP15Error10to__string(self);
}
function _M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_x_968, _x_969) {
  let _x0_988;
  let _y0_989;
  _L: {
    let _x0_986;
    let _y0_987;
    _L$2: {
      let _x0_984;
      let _y0_985;
      _L$3: {
        let _x0_982;
        let _y0_983;
        _L$4: {
          let _x0_980;
          let _y0_981;
          _L$5: {
            let _x1_977;
            let _x0_976;
            let _y0_978;
            let _y1_979;
            _L$6: {
              let _x1_973;
              let _x0_972;
              let _y0_974;
              let _y1_975;
              _L$7: {
                let _x0_970;
                let _y0_971;
                _L$8: {
                  switch (_x_968.$tag) {
                    case 0: {
                      if (_x_969.$tag === 0) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 1: {
                      if (_x_969.$tag === 1) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 2: {
                      if (_x_969.$tag === 2) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 3: {
                      if (_x_969.$tag === 3) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 4: {
                      if (_x_969.$tag === 4) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 5: {
                      if (_x_969.$tag === 5) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 6: {
                      if (_x_969.$tag === 6) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 7: {
                      if (_x_969.$tag === 7) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 8: {
                      if (_x_969.$tag === 8) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 9: {
                      if (_x_969.$tag === 9) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 10: {
                      if (_x_969.$tag === 10) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 11: {
                      if (_x_969.$tag === 11) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 12: {
                      if (_x_969.$tag === 12) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 13: {
                      if (_x_969.$tag === 13) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 14: {
                      if (_x_969.$tag === 14) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 15: {
                      if (_x_969.$tag === 15) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 16: {
                      if (_x_969.$tag === 16) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 17: {
                      if (_x_969.$tag === 17) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 18: {
                      if (_x_969.$tag === 18) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 19: {
                      if (_x_969.$tag === 19) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 20: {
                      if (_x_969.$tag === 20) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 21: {
                      if (_x_969.$tag === 21) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 22: {
                      if (_x_969.$tag === 22) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 23: {
                      if (_x_969.$tag === 23) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 24: {
                      if (_x_969.$tag === 24) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 25: {
                      if (_x_969.$tag === 25) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 26: {
                      if (_x_969.$tag === 26) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 27: {
                      if (_x_969.$tag === 27) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 28: {
                      if (_x_969.$tag === 28) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 29: {
                      if (_x_969.$tag === 29) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 30: {
                      if (_x_969.$tag === 30) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 31: {
                      if (_x_969.$tag === 31) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 32: {
                      if (_x_969.$tag === 32) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 33: {
                      if (_x_969.$tag === 33) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 34: {
                      if (_x_969.$tag === 34) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 35: {
                      if (_x_969.$tag === 35) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 36: {
                      if (_x_969.$tag === 36) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 37: {
                      if (_x_969.$tag === 37) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 38: {
                      if (_x_969.$tag === 38) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 39: {
                      if (_x_969.$tag === 39) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                    case 40: {
                      const _StringLit = _x_968;
                      const _$42$x0_970 = _StringLit._0;
                      if (_x_969.$tag === 40) {
                        const _StringLit$2 = _x_969;
                        const _$42$y0_971 = _StringLit$2._0;
                        _x0_970 = _$42$x0_970;
                        _y0_971 = _$42$y0_971;
                        break _L$8;
                      } else {
                        return false;
                      }
                    }
                    case 41: {
                      const _HexBlock = _x_968;
                      const _$42$x0_972 = _HexBlock._0;
                      const _$42$x1_973 = _HexBlock._1;
                      if (_x_969.$tag === 41) {
                        const _HexBlock$2 = _x_969;
                        const _$42$y0_974 = _HexBlock$2._0;
                        const _$42$y1_975 = _HexBlock$2._1;
                        _x1_973 = _$42$x1_973;
                        _x0_972 = _$42$x0_972;
                        _y0_974 = _$42$y0_974;
                        _y1_975 = _$42$y1_975;
                        break _L$7;
                      } else {
                        return false;
                      }
                    }
                    case 42: {
                      const _RegexLit = _x_968;
                      const _$42$x0_976 = _RegexLit._0;
                      const _$42$x1_977 = _RegexLit._1;
                      if (_x_969.$tag === 42) {
                        const _RegexLit$2 = _x_969;
                        const _$42$y0_978 = _RegexLit$2._0;
                        const _$42$y1_979 = _RegexLit$2._1;
                        _x1_977 = _$42$x1_977;
                        _x0_976 = _$42$x0_976;
                        _y0_978 = _$42$y0_978;
                        _y1_979 = _$42$y1_979;
                        break _L$6;
                      } else {
                        return false;
                      }
                    }
                    case 43: {
                      const _IntLit = _x_968;
                      const _$42$x0_980 = _IntLit._0;
                      if (_x_969.$tag === 43) {
                        const _IntLit$2 = _x_969;
                        const _$42$y0_981 = _IntLit$2._0;
                        _x0_980 = _$42$x0_980;
                        _y0_981 = _$42$y0_981;
                        break _L$5;
                      } else {
                        return false;
                      }
                    }
                    case 44: {
                      const _StringIdent = _x_968;
                      const _$42$x0_982 = _StringIdent._0;
                      if (_x_969.$tag === 44) {
                        const _StringIdent$2 = _x_969;
                        const _$42$y0_983 = _StringIdent$2._0;
                        _x0_982 = _$42$x0_982;
                        _y0_983 = _$42$y0_983;
                        break _L$4;
                      } else {
                        return false;
                      }
                    }
                    case 45: {
                      const _CountIdent = _x_968;
                      const _$42$x0_984 = _CountIdent._0;
                      if (_x_969.$tag === 45) {
                        const _CountIdent$2 = _x_969;
                        const _$42$y0_985 = _CountIdent$2._0;
                        _x0_984 = _$42$x0_984;
                        _y0_985 = _$42$y0_985;
                        break _L$3;
                      } else {
                        return false;
                      }
                    }
                    case 46: {
                      const _OffsetIdent = _x_968;
                      const _$42$x0_986 = _OffsetIdent._0;
                      if (_x_969.$tag === 46) {
                        const _OffsetIdent$2 = _x_969;
                        const _$42$y0_987 = _OffsetIdent$2._0;
                        _x0_986 = _$42$x0_986;
                        _y0_987 = _$42$y0_987;
                        break _L$2;
                      } else {
                        return false;
                      }
                    }
                    case 47: {
                      const _Ident = _x_968;
                      const _$42$x0_988 = _Ident._0;
                      if (_x_969.$tag === 47) {
                        const _Ident$2 = _x_969;
                        const _$42$y0_989 = _Ident$2._0;
                        _x0_988 = _$42$x0_988;
                        _y0_989 = _$42$y0_989;
                        break _L;
                      } else {
                        return false;
                      }
                    }
                    default: {
                      if (_x_969.$tag === 48) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                  }
                }
                return _x0_970 === _y0_971;
              }
              return _M0IPC15array5ArrayPB2Eq5equalGyE(_x0_972, _y0_974) && _M0IPC15array5ArrayPB2Eq5equalGyE(_x1_973, _y1_975);
            }
            return _x0_976 === _y0_978 && _x1_977 === _y1_979;
          }
          return _x0_980 === _y0_981;
        }
        return _x0_982 === _y0_983;
      }
      return _x0_984 === _y0_985;
    }
    return _x0_986 === _y0_987;
  }
  return _x0_988 === _y0_989;
}
function _M0IP28Bobojy008moonyara9RegexInstPB2Eq5equal(_x_902, _x_903) {
  let _x0_910;
  let _y0_911;
  _L: {
    let _x1_907;
    let _x0_906;
    let _y0_908;
    let _y1_909;
    _L$2: {
      let _x0_904;
      let _y0_905;
      _L$3: {
        switch (_x_902.$tag) {
          case 0: {
            const _MatchByte = _x_902;
            const _$42$x0_904 = _MatchByte._0;
            if (_x_903.$tag === 0) {
              const _MatchByte$2 = _x_903;
              const _$42$y0_905 = _MatchByte$2._0;
              _x0_904 = _$42$x0_904;
              _y0_905 = _$42$y0_905;
              break _L$3;
            } else {
              return false;
            }
          }
          case 1: {
            const _Split = _x_902;
            const _$42$x0_906 = _Split._0;
            const _$42$x1_907 = _Split._1;
            if (_x_903.$tag === 1) {
              const _Split$2 = _x_903;
              const _$42$y0_908 = _Split$2._0;
              const _$42$y1_909 = _Split$2._1;
              _x1_907 = _$42$x1_907;
              _x0_906 = _$42$x0_906;
              _y0_908 = _$42$y0_908;
              _y1_909 = _$42$y1_909;
              break _L$2;
            } else {
              return false;
            }
          }
          case 2: {
            const _Jump = _x_902;
            const _$42$x0_910 = _Jump._0;
            if (_x_903.$tag === 2) {
              const _Jump$2 = _x_903;
              const _$42$y0_911 = _Jump$2._0;
              _x0_910 = _$42$x0_910;
              _y0_911 = _$42$y0_911;
              break _L;
            } else {
              return false;
            }
          }
          default: {
            if (_x_903.$tag === 3) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
      return _M0IPC15array10FixedArrayPB2Eq5equalGbE(_x0_904, _y0_905);
    }
    return _x0_906 === _y0_908 && _x1_907 === _y1_909;
  }
  return _x0_910 === _y0_911;
}
function _M0FP28Bobojy008moonyara17make__byte__table() {
  return $make_array_len_and_init(256, false);
}
function _M0FP28Bobojy008moonyara9set__code(table, v, nocase) {
  if (v >= 0 && v < 256) {
    $bound_check(table, v);
    table[v] = true;
    if (nocase) {
      if (v >= 65 && v <= 90) {
        const _tmp = v + 32 | 0;
        $bound_check(table, _tmp);
        table[_tmp] = true;
        return;
      } else {
        if (v >= 97 && v <= 122) {
          const _tmp = v - 32 | 0;
          $bound_check(table, _tmp);
          table[_tmp] = true;
          return;
        } else {
          return;
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0FP28Bobojy008moonyara9set__char(table, c, nocase) {
  _M0FP28Bobojy008moonyara9set__code(table, c, nocase);
}
function _M0FP28Bobojy008moonyara10set__range(table, c1, c2, nocase) {
  const v1 = c1;
  const v2 = c2;
  let start;
  let end;
  _L: {
    if (v1 <= v2) {
      start = v1;
      end = v2;
      break _L;
    } else {
      start = v2;
      end = v1;
      break _L;
    }
  }
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i <= end) {
      _M0FP28Bobojy008moonyara9set__code(table, i, nocase);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP28Bobojy008moonyara13invert__table(table) {
  const res = $make_array_len_and_init(256, false);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 256) {
      $bound_check(table, i);
      $bound_check(res, i);
      res[i] = !table[i];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function _M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, offset) {
  const idx = self.pos + offset | 0;
  return idx < self.input.length ? _M0MPC15array5Array2atGcE(self.input, idx) : -1;
}
function _M0MP28Bobojy008moonyara11RegexParser7advance(self) {
  if (self.pos < self.input.length) {
    const ch = _M0MPC15array5Array2atGcE(self.input, self.pos);
    self.pos = self.pos + 1 | 0;
    return ch;
  } else {
    return -1;
  }
}
function _M0FP28Bobojy008moonyara13parse__hex__2(c1, c2) {
  const hex_digit = (c) => c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? (c - 97 | 0) + 10 | 0 : c >= 65 && c <= 70 ? (c - 65 | 0) + 10 | 0 : undefined;
  _L: {
    let h1;
    let h2;
    _L$2: {
      const _bind = hex_digit(c1);
      const _bind$2 = hex_digit(c2);
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _h1 = _Some;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some$2 = _bind$2;
          const _h2 = _Some$2;
          h1 = _h1;
          h2 = _h2;
          break _L$2;
        }
      }
    }
    return h1 << 4 | h2;
  }
  return undefined;
}
function _M0MP28Bobojy008moonyara11RegexParser12parse__class(self) {
  _M0MP28Bobojy008moonyara11RegexParser7advance(self);
  let negated;
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, 0), 94)) {
    _M0MP28Bobojy008moonyara11RegexParser7advance(self);
    negated = true;
  } else {
    negated = false;
  }
  const table = _M0FP28Bobojy008moonyara17make__byte__table();
  const closed = new _M0TPB8MutLocalGbE(false);
  _L: while (true) {
    if (self.pos < self.input.length) {
      let ch;
      _L$2: {
        _L$3: {
          const _bind = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
          if (_bind === -1) {
            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedClass__);
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 93: {
                closed.val = true;
                break _L;
              }
              case 92: {
                let other;
                _L$4: {
                  _L$5: {
                    const _bind$2 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
                    if (_bind$2 === -1) {
                      return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd__);
                    } else {
                      const _Some$2 = _bind$2;
                      const _x$2 = _Some$2;
                      switch (_x$2) {
                        case 100: {
                          _M0FP28Bobojy008moonyara10set__range(table, 48, 57, false);
                          break;
                        }
                        case 119: {
                          _M0FP28Bobojy008moonyara10set__range(table, 97, 122, self.nocase);
                          _M0FP28Bobojy008moonyara10set__range(table, 65, 90, self.nocase);
                          _M0FP28Bobojy008moonyara10set__range(table, 48, 57, false);
                          _M0FP28Bobojy008moonyara9set__char(table, 95, false);
                          break;
                        }
                        case 115: {
                          _M0FP28Bobojy008moonyara9set__char(table, 32, false);
                          _M0FP28Bobojy008moonyara9set__char(table, 9, false);
                          _M0FP28Bobojy008moonyara9set__char(table, 13, false);
                          _M0FP28Bobojy008moonyara9set__char(table, 10, false);
                          break;
                        }
                        case 110: {
                          _M0FP28Bobojy008moonyara9set__char(table, 10, false);
                          break;
                        }
                        case 114: {
                          _M0FP28Bobojy008moonyara9set__char(table, 13, false);
                          break;
                        }
                        case 116: {
                          _M0FP28Bobojy008moonyara9set__char(table, 9, false);
                          break;
                        }
                        case 120: {
                          const c1 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
                          const c2 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
                          _L$6: {
                            _L$7: {
                              let h1;
                              let h2;
                              _L$8: {
                                if (c1 === -1) {
                                  break _L$7;
                                } else {
                                  const _Some$3 = c1;
                                  const _h1 = _Some$3;
                                  if (c2 === -1) {
                                    break _L$7;
                                  } else {
                                    const _Some$4 = c2;
                                    const _h2 = _Some$4;
                                    h1 = _h1;
                                    h2 = _h2;
                                    break _L$8;
                                  }
                                }
                              }
                              let code;
                              _L$9: {
                                const _bind$3 = _M0FP28Bobojy008moonyara13parse__hex__2(h1, h2);
                                if (_bind$3 === undefined) {
                                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidEscape("\\x"));
                                } else {
                                  const _Some$3 = _bind$3;
                                  const _code = _Some$3;
                                  code = _code;
                                  break _L$9;
                                }
                              }
                              _M0FP28Bobojy008moonyara9set__code(table, code, self.nocase);
                              break _L$6;
                            }
                            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidEscape("\\x"));
                          }
                          break;
                        }
                        default: {
                          other = _x$2;
                          break _L$5;
                        }
                      }
                    }
                    break _L$4;
                  }
                  _M0FP28Bobojy008moonyara9set__char(table, other, self.nocase);
                }
                break;
              }
              default: {
                ch = _x;
                break _L$3;
              }
            }
          }
          break _L$2;
        }
        if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, 0), 45) && _M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, 1), 93)) {
          _M0MP28Bobojy008moonyara11RegexParser7advance(self);
          let end_ch;
          _L$4: {
            const _bind = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
            if (_bind === -1) {
              return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd__);
            } else {
              const _Some = _bind;
              const _end_ch = _Some;
              end_ch = _end_ch;
              break _L$4;
            }
          }
          _M0FP28Bobojy008moonyara10set__range(table, ch, end_ch, self.nocase);
        } else {
          _M0FP28Bobojy008moonyara9set__char(table, ch, self.nocase);
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (!closed.val) {
    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedClass__);
  }
  const final_table = negated ? _M0FP28Bobojy008moonyara13invert__table(table) : table;
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(final_table));
}
function _M0MP28Bobojy008moonyara11RegexParser11parse__atom(self) {
  let ch;
  _L: {
    _L$2: {
      const _bind = _M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, 0);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(undefined);
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 41: {
            break _L$2;
          }
          case 124: {
            break _L$2;
          }
          case 42: {
            break _L$2;
          }
          case 43: {
            break _L$2;
          }
          case 63: {
            break _L$2;
          }
          case 40: {
            _M0MP28Bobojy008moonyara11RegexParser7advance(self);
            const _bind$2 = _M0MP28Bobojy008moonyara11RegexParser10parse__alt(self);
            let expr;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              expr = _ok._0;
            } else {
              return _bind$2;
            }
            _L$3: {
              const _bind$3 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
              if (_bind$3 === -1) {
                break _L$3;
              } else {
                const _Some$2 = _bind$3;
                const _x$2 = _Some$2;
                if (_x$2 === 41) {
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(expr);
                } else {
                  break _L$3;
                }
              }
            }
            return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnclosedGroup__);
          }
          case 91: {
            const _bind$3 = _M0MP28Bobojy008moonyara11RegexParser12parse__class(self);
            let _tmp;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp = _ok._0;
            } else {
              return _bind$3;
            }
            return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(_tmp);
          }
          case 46: {
            _M0MP28Bobojy008moonyara11RegexParser7advance(self);
            const table = _M0FP28Bobojy008moonyara17make__byte__table();
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i < 256) {
                if (i !== 10) {
                  $bound_check(table, i);
                  table[i] = true;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table));
          }
          case 92: {
            _M0MP28Bobojy008moonyara11RegexParser7advance(self);
            let ch$2;
            const _bind$4 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
            if (_bind$4 === -1) {
              return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(_M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eUnexpectedEnd__);
            } else {
              const _Some$2 = _bind$4;
              const _c = _Some$2;
              ch$2 = _c;
            }
            const table$2 = _M0FP28Bobojy008moonyara17make__byte__table();
            let escaped;
            _L$4: {
              switch (ch$2) {
                case 100: {
                  _M0FP28Bobojy008moonyara10set__range(table$2, 48, 57, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                }
                case 68: {
                  _M0FP28Bobojy008moonyara10set__range(table$2, 48, 57, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(_M0FP28Bobojy008moonyara13invert__table(table$2)));
                }
                case 119: {
                  _M0FP28Bobojy008moonyara10set__range(table$2, 97, 122, self.nocase);
                  _M0FP28Bobojy008moonyara10set__range(table$2, 65, 90, self.nocase);
                  _M0FP28Bobojy008moonyara10set__range(table$2, 48, 57, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 95, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                }
                case 87: {
                  _M0FP28Bobojy008moonyara10set__range(table$2, 97, 122, self.nocase);
                  _M0FP28Bobojy008moonyara10set__range(table$2, 65, 90, self.nocase);
                  _M0FP28Bobojy008moonyara10set__range(table$2, 48, 57, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 95, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(_M0FP28Bobojy008moonyara13invert__table(table$2)));
                }
                case 115: {
                  _M0FP28Bobojy008moonyara9set__char(table$2, 32, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 9, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 13, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 10, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                }
                case 83: {
                  _M0FP28Bobojy008moonyara9set__char(table$2, 32, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 9, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 13, false);
                  _M0FP28Bobojy008moonyara9set__char(table$2, 10, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(_M0FP28Bobojy008moonyara13invert__table(table$2)));
                }
                case 110: {
                  _M0FP28Bobojy008moonyara9set__char(table$2, 10, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                }
                case 114: {
                  _M0FP28Bobojy008moonyara9set__char(table$2, 13, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                }
                case 116: {
                  _M0FP28Bobojy008moonyara9set__char(table$2, 9, false);
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                }
                case 120: {
                  const c1 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
                  const c2 = _M0MP28Bobojy008moonyara11RegexParser7advance(self);
                  _L$5: {
                    let h1;
                    let h2;
                    _L$6: {
                      if (c1 === -1) {
                        break _L$5;
                      } else {
                        const _Some$2 = c1;
                        const _h1 = _Some$2;
                        if (c2 === -1) {
                          break _L$5;
                        } else {
                          const _Some$3 = c2;
                          const _h2 = _Some$3;
                          h1 = _h1;
                          h2 = _h2;
                          break _L$6;
                        }
                      }
                    }
                    let code;
                    _L$7: {
                      const _bind$5 = _M0FP28Bobojy008moonyara13parse__hex__2(h1, h2);
                      if (_bind$5 === undefined) {
                        return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidEscape("\\x"));
                      } else {
                        const _Some$2 = _bind$5;
                        const _code = _Some$2;
                        code = _code;
                        break _L$7;
                      }
                    }
                    _M0FP28Bobojy008moonyara9set__code(table$2, code, self.nocase);
                    return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
                  }
                  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eRegexError_2eInvalidEscape("\\x"));
                }
                default: {
                  escaped = ch$2;
                  break _L$4;
                }
              }
            }
            _M0FP28Bobojy008moonyara9set__char(table$2, escaped, self.nocase);
            return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table$2));
          }
          default: {
            ch = _x;
            break _L;
          }
        }
      }
    }
    return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(undefined);
  }
  _M0MP28Bobojy008moonyara11RegexParser7advance(self);
  const table = _M0FP28Bobojy008moonyara17make__byte__table();
  _M0FP28Bobojy008moonyara9set__char(table, ch, self.nocase);
  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Class(table));
}
function _M0MP28Bobojy008moonyara11RegexParser10parse__alt(self) {
  const branches = [];
  const _bind = _M0MP28Bobojy008moonyara11RegexParser10parse__seq(self);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(branches, _tmp);
  while (true) {
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, 0), 124)) {
      _M0MP28Bobojy008moonyara11RegexParser7advance(self);
      const _bind$2 = _M0MP28Bobojy008moonyara11RegexParser10parse__seq(self);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(branches, _tmp$2);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(branches.length === 1 ? _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(branches, 0) : new _M0DTP28Bobojy008moonyara9RegexNode3Alt(branches));
}
function _M0MP28Bobojy008moonyara11RegexParser10parse__seq(self) {
  const pieces = [];
  while (true) {
    let node;
    _L: {
      const _bind = _M0MP28Bobojy008moonyara11RegexParser12parse__piece(self);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _node = _Some;
        node = _node;
        break _L;
      }
    }
    _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(pieces, node);
    continue;
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(pieces.length === 1 ? _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(pieces, 0) : new _M0DTP28Bobojy008moonyara9RegexNode3Seq(pieces));
}
function _M0MP28Bobojy008moonyara11RegexParser12parse__piece(self) {
  const _bind = _M0MP28Bobojy008moonyara11RegexParser11parse__atom(self);
  let atom_opt;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    atom_opt = _ok._0;
  } else {
    return _bind;
  }
  let atom;
  _L: {
    if (atom_opt === undefined) {
      return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(undefined);
    } else {
      const _Some = atom_opt;
      const _atom = _Some;
      atom = _atom;
      break _L;
    }
  }
  _L$2: {
    const _bind$2 = _M0MP28Bobojy008moonyara11RegexParser12peek_2einner(self, 0);
    if (_bind$2 === -1) {
      break _L$2;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x) {
        case 42: {
          _M0MP28Bobojy008moonyara11RegexParser7advance(self);
          return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode4Star(atom));
        }
        case 43: {
          _M0MP28Bobojy008moonyara11RegexParser7advance(self);
          return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode4Plus(atom));
        }
        case 63: {
          _M0MP28Bobojy008moonyara11RegexParser7advance(self);
          return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0DTP28Bobojy008moonyara9RegexNode5Quest(atom));
        }
        default: {
          break _L$2;
        }
      }
    }
  }
  return new _M0DTPC16result6ResultGORP28Bobojy008moonyara9RegexNodeRP28Bobojy008moonyara10RegexErrorE2Ok(atom);
}
function _M0MP28Bobojy008moonyara8Compiler3new() {
  return new _M0TP28Bobojy008moonyara8Compiler([]);
}
function _M0MP28Bobojy008moonyara8Compiler4emit(self, inst) {
  const pc = self.insts.length;
  _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(self.insts, inst);
  return pc;
}
function _M0MP28Bobojy008moonyara8Compiler13compile__node(self, node) {
  let child;
  _L: {
    let child$2;
    _L$2: {
      let child$3;
      _L$3: {
        let branches;
        _L$4: {
          let nodes;
          _L$5: {
            let table;
            _L$6: {
              switch (node.$tag) {
                case 0: {
                  const _Class = node;
                  const _table = _Class._0;
                  table = _table;
                  break _L$6;
                }
                case 1: {
                  const _Seq = node;
                  const _nodes = _Seq._0;
                  nodes = _nodes;
                  break _L$5;
                }
                case 2: {
                  const _Alt = node;
                  const _branches = _Alt._0;
                  branches = _branches;
                  break _L$4;
                }
                case 3: {
                  const _Star = node;
                  const _child = _Star._0;
                  child$3 = _child;
                  break _L$3;
                }
                case 4: {
                  const _Plus = node;
                  const _child$2 = _Plus._0;
                  child$2 = _child$2;
                  break _L$2;
                }
                default: {
                  const _Quest = node;
                  const _child$3 = _Quest._0;
                  child = _child$3;
                  break _L;
                }
              }
            }
            _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst9MatchByte(table));
            return;
          }
          const _bind = nodes.length;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const n = nodes[_];
              _M0MP28Bobojy008moonyara8Compiler13compile__node(self, n);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              return;
            }
          }
        }
        if (branches.length === 0) {
          return undefined;
        }
        if (branches.length === 1) {
          _M0MP28Bobojy008moonyara8Compiler13compile__node(self, _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(branches, 0));
          return undefined;
        }
        const end_jumps = [];
        let _tmp = 0;
        while (true) {
          const i = _tmp;
          if (i < branches.length) {
            const is_last = i === (branches.length - 1 | 0);
            if (!is_last) {
              const split_pc = _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst5Split(0, 0));
              const branch_start = self.insts.length;
              _M0MP28Bobojy008moonyara8Compiler13compile__node(self, _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(branches, i));
              const jump_end = _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst4Jump(0));
              _M0MPC15array5Array4pushGiE(end_jumps, jump_end);
              const next_branch_start = self.insts.length;
              _M0MPC15array5Array3setGRP28Bobojy008moonyara9RegexInstE(self.insts, split_pc, new _M0DTP28Bobojy008moonyara9RegexInst5Split(branch_start, next_branch_start));
            } else {
              _M0MP28Bobojy008moonyara8Compiler13compile__node(self, _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(branches, i));
            }
            _tmp = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const final_pc = self.insts.length;
        const _bind = end_jumps.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind) {
            const j = end_jumps[_];
            _M0MPC15array5Array3setGRP28Bobojy008moonyara9RegexInstE(self.insts, j, new _M0DTP28Bobojy008moonyara9RegexInst4Jump(final_pc));
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      const split_pc = _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst5Split(0, 0));
      const child_start = self.insts.length;
      _M0MP28Bobojy008moonyara8Compiler13compile__node(self, child$3);
      _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst4Jump(split_pc));
      const after_pc = self.insts.length;
      _M0MPC15array5Array3setGRP28Bobojy008moonyara9RegexInstE(self.insts, split_pc, new _M0DTP28Bobojy008moonyara9RegexInst5Split(child_start, after_pc));
      return;
    }
    const start_pc = self.insts.length;
    _M0MP28Bobojy008moonyara8Compiler13compile__node(self, child$2);
    const split_pc = _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst5Split(start_pc, 0));
    const after_pc = self.insts.length;
    _M0MPC15array5Array3setGRP28Bobojy008moonyara9RegexInstE(self.insts, split_pc, new _M0DTP28Bobojy008moonyara9RegexInst5Split(start_pc, after_pc));
    return;
  }
  const split_pc = _M0MP28Bobojy008moonyara8Compiler4emit(self, new _M0DTP28Bobojy008moonyara9RegexInst5Split(0, 0));
  const child_start = self.insts.length;
  _M0MP28Bobojy008moonyara8Compiler13compile__node(self, child);
  const after_pc = self.insts.length;
  _M0MPC15array5Array3setGRP28Bobojy008moonyara9RegexInstE(self.insts, split_pc, new _M0DTP28Bobojy008moonyara9RegexInst5Split(child_start, after_pc));
}
function _M0FP28Bobojy008moonyara22compile__regex_2einner(pattern, nocase) {
  const parser = new _M0TP28Bobojy008moonyara11RegexParser(_M0MPC16string6String9to__array(pattern), 0, nocase);
  const _bind = _M0MP28Bobojy008moonyara11RegexParser10parse__alt(parser);
  let ast;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    ast = _ok._0;
  } else {
    return _bind;
  }
  const compiler = _M0MP28Bobojy008moonyara8Compiler3new();
  _M0MP28Bobojy008moonyara8Compiler13compile__node(compiler, ast);
  _M0MP28Bobojy008moonyara8Compiler4emit(compiler, _M0DTP28Bobojy008moonyara9RegexInst12MatchSuccess__);
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13CompiledRegexRP28Bobojy008moonyara10RegexErrorE2Ok(new _M0TP28Bobojy008moonyara13CompiledRegex(compiler.insts));
}
function _M0FP28Bobojy008moonyara16match__regex__at(re, target_data, start_pos) {
  const n = target_data.length;
  if (start_pos > n) {
    return undefined;
  }
  const insts = re.instructions;
  const num_insts = insts.length;
  const curr_states = new _M0TPB8MutLocalGRPB5ArrayGiEE([]);
  const next_states = new _M0TPB8MutLocalGRPB5ArrayGiEE([]);
  const visited = $make_array_len_and_init(num_insts, 0);
  const step_id = new _M0TPB8MutLocalGiE(1);
  const longest_match = new _M0TPB8MutLocalGOiE(undefined);
  const add_state = (pc, states) => {
    let _tmp = pc;
    let _tmp$2 = states;
    _L: while (true) {
      const pc$2 = _tmp;
      const states$2 = _tmp$2;
      let _tmp$3;
      if (pc$2 >= num_insts) {
        _tmp$3 = true;
      } else {
        $bound_check(visited, pc$2);
        _tmp$3 = visited[pc$2] === step_id.val;
      }
      if (_tmp$3) {
        return undefined;
      }
      $bound_check(visited, pc$2);
      visited[pc$2] = step_id.val;
      let t;
      _L$2: {
        let t1;
        let t2;
        _L$3: {
          const _bind = _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(insts, pc$2);
          switch (_bind.$tag) {
            case 1: {
              const _Split = _bind;
              const _t1 = _Split._0;
              const _t2 = _Split._1;
              t1 = _t1;
              t2 = _t2;
              break _L$3;
            }
            case 2: {
              const _Jump = _bind;
              const _t = _Jump._0;
              t = _t;
              break _L$2;
            }
            case 3: {
              return;
            }
            default: {
              _M0MPC15array5Array4pushGiE(states$2, pc$2);
              return;
            }
          }
        }
        add_state(t1, states$2);
        _tmp = t2;
        continue;
      }
      _tmp = t;
      continue;
    }
  };
  add_state(0, curr_states.val);
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const pc = _tmp;
    if (pc < num_insts) {
      $bound_check(visited, pc);
      if (visited[pc] === step_id.val) {
        if (_M0IP28Bobojy008moonyara9RegexInstPB2Eq5equal(_M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(insts, pc), _M0DTP28Bobojy008moonyara9RegexInst12MatchSuccess__)) {
          longest_match.val = 0;
        }
      }
      _tmp = pc + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const cur_pos = new _M0TPB8MutLocalGiE(start_pos);
  while (true) {
    if (cur_pos.val < n && curr_states.val.length > 0) {
      const _tmp$2 = cur_pos.val;
      $bound_check(target_data, _tmp$2);
      const b = target_data[_tmp$2];
      step_id.val = step_id.val + 1 | 0;
      _M0MPC15array5Array5clearGiE(next_states.val);
      const hit_success = new _M0TPB8MutLocalGbE(false);
      const _bind$2 = curr_states.val;
      const _bind$3 = _bind$2.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const pc = _bind$2[_];
          let table;
          _L: {
            _L$2: {
              const _bind$4 = _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(insts, pc);
              if (_bind$4.$tag === 0) {
                const _MatchByte = _bind$4;
                const _table = _MatchByte._0;
                table = _table;
                break _L$2;
              }
              break _L;
            }
            $bound_check(table, b);
            if (table[b]) {
              const expand_next = (p) => {
                let _tmp$4 = p;
                _L$3: while (true) {
                  const p$2 = _tmp$4;
                  let _tmp$5;
                  if (p$2 >= num_insts) {
                    _tmp$5 = true;
                  } else {
                    $bound_check(visited, p$2);
                    _tmp$5 = visited[p$2] === step_id.val;
                  }
                  if (_tmp$5) {
                    return undefined;
                  }
                  $bound_check(visited, p$2);
                  visited[p$2] = step_id.val;
                  let t;
                  _L$4: {
                    let t1;
                    let t2;
                    _L$5: {
                      const _bind$4 = _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(insts, p$2);
                      switch (_bind$4.$tag) {
                        case 1: {
                          const _Split = _bind$4;
                          const _t1 = _Split._0;
                          const _t2 = _Split._1;
                          t1 = _t1;
                          t2 = _t2;
                          break _L$5;
                        }
                        case 2: {
                          const _Jump = _bind$4;
                          const _t = _Jump._0;
                          t = _t;
                          break _L$4;
                        }
                        case 3: {
                          hit_success.val = true;
                          return;
                        }
                        default: {
                          _M0MPC15array5Array4pushGiE(next_states.val, p$2);
                          return;
                        }
                      }
                    }
                    expand_next(t1);
                    _tmp$4 = t2;
                    continue;
                  }
                  _tmp$4 = t;
                  continue;
                }
              };
              expand_next(pc + 1 | 0);
            }
          }
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      cur_pos.val = cur_pos.val + 1 | 0;
      if (hit_success.val) {
        longest_match.val = cur_pos.val - start_pos | 0;
      }
      const tmp = curr_states.val;
      curr_states.val = next_states.val;
      next_states.val = tmp;
      continue;
    } else {
      break;
    }
  }
  return longest_match.val;
}
function _M0FP28Bobojy008moonyara16scan__all__regex(re, target_data, identifier) {
  const matches = [];
  const n = target_data.length;
  const pos = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (pos.val < n) {
      _L: {
        _L$2: {
          let len;
          _L$3: {
            const _bind = _M0FP28Bobojy008moonyara16match__regex__at(re, target_data, pos.val);
            if (_bind === undefined) {
              break _L$2;
            } else {
              const _Some = _bind;
              const _len = _Some;
              if (_len > 0) {
                len = _len;
                break _L$3;
              } else {
                break _L$2;
              }
            }
          }
          const slice = [];
          let _tmp = 0;
          while (true) {
            const k = _tmp;
            if (k < len) {
              const _tmp$2 = pos.val + k | 0;
              $bound_check(target_data, _tmp$2);
              _M0MPC15array5Array4pushGyE(slice, target_data[_tmp$2]);
              _tmp = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, pos.val, len, slice));
          pos.val = pos.val + len | 0;
          break _L;
        }
        pos.val = pos.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return matches;
}
function _M0MP28Bobojy008moonyara6Parser3new(tokens) {
  return new _M0TP28Bobojy008moonyara6Parser(tokens, 0);
}
function _M0MP28Bobojy008moonyara6Parser4peek(self) {
  return self.pos < self.tokens.length ? _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(self.tokens, self.pos) : new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind3Eof__, 0, 0);
}
function _M0MP28Bobojy008moonyara6Parser10peek__next(self) {
  return (self.pos + 1 | 0) < self.tokens.length ? _M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(self.tokens, self.pos + 1 | 0) : new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind3Eof__, 0, 0);
}
function _M0MP28Bobojy008moonyara6Parser7advance(self) {
  const tok = _M0MP28Bobojy008moonyara6Parser4peek(self);
  if (self.pos < self.tokens.length) {
    self.pos = self.pos + 1 | 0;
  }
  return tok;
}
function _M0FP28Bobojy008moonyara17token__kind__name(kind) {
  let i;
  _L: {
    let re;
    _L$2: {
      let s;
      _L$3: {
        switch (kind.$tag) {
          case 0: {
            return "rule";
          }
          case 1: {
            return "meta";
          }
          case 2: {
            return "strings";
          }
          case 3: {
            return "condition";
          }
          case 4: {
            return "nocase";
          }
          case 5: {
            return "wide";
          }
          case 6: {
            return "ascii";
          }
          case 7: {
            return "and";
          }
          case 8: {
            return "or";
          }
          case 9: {
            return "not";
          }
          case 10: {
            return "at";
          }
          case 11: {
            return "in";
          }
          case 12: {
            return "of";
          }
          case 13: {
            return "them";
          }
          case 14: {
            return "filesize";
          }
          case 15: {
            return "true";
          }
          case 16: {
            return "false";
          }
          case 17: {
            return "uint8";
          }
          case 18: {
            return "uint16";
          }
          case 19: {
            return "uint16be";
          }
          case 20: {
            return "uint32";
          }
          case 21: {
            return "uint32be";
          }
          case 22: {
            return "include";
          }
          case 23: {
            return "xor";
          }
          case 24: {
            return "base64";
          }
          case 39: {
            return "-";
          }
          case 25: {
            return "{";
          }
          case 26: {
            return "}";
          }
          case 27: {
            return "(";
          }
          case 28: {
            return ")";
          }
          case 29: {
            return ":";
          }
          case 30: {
            return "=";
          }
          case 31: {
            return "==";
          }
          case 32: {
            return "!=";
          }
          case 33: {
            return "<";
          }
          case 34: {
            return "<=";
          }
          case 35: {
            return ">";
          }
          case 36: {
            return ">=";
          }
          case 37: {
            return "..";
          }
          case 38: {
            return ",";
          }
          case 40: {
            const _StringLit = kind;
            const _s = _StringLit._0;
            s = _s;
            break _L$3;
          }
          case 41: {
            return "{ <hex bytes> }";
          }
          case 42: {
            const _RegexLit = kind;
            const _re = _RegexLit._0;
            re = _re;
            break _L$2;
          }
          case 43: {
            const _IntLit = kind;
            const _i = _IntLit._0;
            i = _i;
            break _L;
          }
          case 44: {
            const _StringIdent = kind;
            const _id = _StringIdent._0;
            return _id;
          }
          case 45: {
            const _CountIdent = kind;
            const _id$2 = _CountIdent._0;
            return _id$2;
          }
          case 46: {
            const _OffsetIdent = kind;
            const _id$3 = _OffsetIdent._0;
            return _id$3;
          }
          case 47: {
            const _Ident = kind;
            const _id$4 = _Ident._0;
            return _id$4;
          }
          default: {
            return "<EOF>";
          }
        }
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, s);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
      return _M0MPB13StringBuilder10to__string(_string_builder);
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, re);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
  return _M0MPC13int3Int18to__string_2einner(i, 10);
}
function _M0MP28Bobojy008moonyara6Parser13expect__ident(self) {
  const tok = _M0MP28Bobojy008moonyara6Parser4peek(self);
  let id;
  _L: {
    const _bind = tok.kind;
    if (_bind.$tag === 47) {
      const _Ident = _bind;
      const _id = _Ident._0;
      id = _id;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGsRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(tok.line, tok.col, "identifier", _M0FP28Bobojy008moonyara17token__kind__name(tok.kind)));
    }
  }
  _M0MP28Bobojy008moonyara6Parser7advance(self);
  return new _M0DTPC16result6ResultGsRP28Bobojy008moonyara10ParseErrorE2Ok(id);
}
function _M0MP28Bobojy008moonyara6Parser6expect(self, expected_kind) {
  const tok = _M0MP28Bobojy008moonyara6Parser4peek(self);
  if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(tok.kind, expected_kind)) {
    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara10ParseErrorE2Ok(_M0MP28Bobojy008moonyara6Parser7advance(self));
  } else {
    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(tok.line, tok.col, _M0FP28Bobojy008moonyara17token__kind__name(expected_kind), _M0FP28Bobojy008moonyara17token__kind__name(tok.kind)));
  }
}
function _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self) {
  return _M0MP28Bobojy008moonyara6Parser9parse__or(self);
}
function _M0MP28Bobojy008moonyara6Parser9parse__or(self) {
  const _bind = _M0MP28Bobojy008moonyara6Parser10parse__and(self);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const left = new _M0TPB8MutLocalGRP28Bobojy008moonyara13ConditionExprE(_tmp);
  while (true) {
    if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind4KwOr__)) {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$2 = _M0MP28Bobojy008moonyara6Parser10parse__and(self);
      let right;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        right = _ok._0;
      } else {
        return _bind$2;
      }
      left.val = new _M0DTP28Bobojy008moonyara13ConditionExpr2Or(left.val, right);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(left.val);
}
function _M0MP28Bobojy008moonyara6Parser10parse__and(self) {
  const _bind = _M0MP28Bobojy008moonyara6Parser17parse__comparison(self);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const left = new _M0TPB8MutLocalGRP28Bobojy008moonyara13ConditionExprE(_tmp);
  while (true) {
    if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind5KwAnd__)) {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$2 = _M0MP28Bobojy008moonyara6Parser17parse__comparison(self);
      let right;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        right = _ok._0;
      } else {
        return _bind$2;
      }
      left.val = new _M0DTP28Bobojy008moonyara13ConditionExpr3And(left.val, right);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(left.val);
}
function _M0MP28Bobojy008moonyara6Parser17parse__comparison(self) {
  const _bind = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
  let left;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    left = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
  let _tmp;
  switch (_bind$2.$tag) {
    case 31: {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$3 = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
      let right;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        right = _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = new _M0DTP28Bobojy008moonyara13ConditionExpr2Eq(left, right);
      break;
    }
    case 32: {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$4 = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
      let right$2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        right$2 = _ok._0;
      } else {
        return _bind$4;
      }
      _tmp = new _M0DTP28Bobojy008moonyara13ConditionExpr3Neq(left, right$2);
      break;
    }
    case 33: {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$5 = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
      let right$3;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        right$3 = _ok._0;
      } else {
        return _bind$5;
      }
      _tmp = new _M0DTP28Bobojy008moonyara13ConditionExpr2Lt(left, right$3);
      break;
    }
    case 34: {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$6 = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
      let right$4;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        right$4 = _ok._0;
      } else {
        return _bind$6;
      }
      _tmp = new _M0DTP28Bobojy008moonyara13ConditionExpr3Lte(left, right$4);
      break;
    }
    case 35: {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$7 = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
      let right$5;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        right$5 = _ok._0;
      } else {
        return _bind$7;
      }
      _tmp = new _M0DTP28Bobojy008moonyara13ConditionExpr2Gt(left, right$5);
      break;
    }
    case 36: {
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      const _bind$8 = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
      let right$6;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        right$6 = _ok._0;
      } else {
        return _bind$8;
      }
      _tmp = new _M0DTP28Bobojy008moonyara13ConditionExpr3Gte(left, right$6);
      break;
    }
    default: {
      _tmp = left;
    }
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(_tmp);
}
function _M0MP28Bobojy008moonyara6Parser12parse__unary(self) {
  if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind5KwNot__)) {
    _M0MP28Bobojy008moonyara6Parser7advance(self);
    const _bind = _M0MP28Bobojy008moonyara6Parser12parse__unary(self);
    let sub;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      sub = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr3Not(sub));
  } else {
    return _M0MP28Bobojy008moonyara6Parser14parse__primary(self);
  }
}
function _M0MP28Bobojy008moonyara6Parser14parse__primary(self) {
  const tok = _M0MP28Bobojy008moonyara6Parser4peek(self);
  let other;
  _L: {
    let id;
    _L$2: {
      let id$2;
      _L$3: {
        let id$3;
        _L$4: {
          let i;
          _L$5: {
            const _bind = tok.kind;
            switch (_bind.$tag) {
              case 15: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(_M0DTP28Bobojy008moonyara13ConditionExpr7TrueLit__);
              }
              case 16: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(_M0DTP28Bobojy008moonyara13ConditionExpr8FalseLit__);
              }
              case 14: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(_M0DTP28Bobojy008moonyara13ConditionExpr8FileSize__);
              }
              case 43: {
                const _IntLit = _bind;
                const _i = _IntLit._0;
                i = _i;
                break _L$5;
              }
              case 47: {
                const _Ident = _bind;
                const _x = _Ident._0;
                switch (_x) {
                  case "any": {
                    if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser10peek__next(self).kind, _M0DTP28Bobojy008moonyara9TokenKind4KwOf__)) {
                      _M0MP28Bobojy008moonyara6Parser7advance(self);
                      _M0MP28Bobojy008moonyara6Parser7advance(self);
                      let other$2;
                      _L$6: {
                        const _bind$2 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                        switch (_bind$2.$tag) {
                          case 13: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(_M0DTP28Bobojy008moonyara13ConditionExpr9AnyOfThem__);
                          }
                          case 27: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            const set = [];
                            while (true) {
                              let id$4;
                              _L$7: {
                                const _bind$3 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                                if (_bind$3.$tag === 44) {
                                  const _StringIdent = _bind$3;
                                  const _id = _StringIdent._0;
                                  id$4 = _id;
                                  break _L$7;
                                } else {
                                  break;
                                }
                              }
                              _M0MP28Bobojy008moonyara6Parser7advance(self);
                              _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(set, id$4);
                              if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind5Comma__)) {
                                _M0MP28Bobojy008moonyara6Parser7advance(self);
                              }
                              continue;
                            }
                            const _bind$3 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                            if (_bind$3.$tag === 1) {
                              const _ok = _bind$3;
                              _ok._0;
                            } else {
                              return _bind$3;
                            }
                            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr8NumOfSet(new _M0DTP28Bobojy008moonyara13ConditionExpr6IntLit(1), set));
                          }
                          default: {
                            other$2 = _bind$2;
                            break _L$6;
                          }
                        }
                      }
                      return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(_M0MP28Bobojy008moonyara6Parser4peek(self).line, _M0MP28Bobojy008moonyara6Parser4peek(self).col, "'them' or set after 'of'", _M0FP28Bobojy008moonyara17token__kind__name(other$2)));
                    } else {
                      other = _bind;
                      break _L;
                    }
                  }
                  case "all": {
                    if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser10peek__next(self).kind, _M0DTP28Bobojy008moonyara9TokenKind4KwOf__)) {
                      _M0MP28Bobojy008moonyara6Parser7advance(self);
                      _M0MP28Bobojy008moonyara6Parser7advance(self);
                      let other$2;
                      _L$6: {
                        const _bind$2 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                        switch (_bind$2.$tag) {
                          case 13: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(_M0DTP28Bobojy008moonyara13ConditionExpr9AllOfThem__);
                          }
                          case 27: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            const set = [];
                            while (true) {
                              let id$4;
                              _L$7: {
                                const _bind$3 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                                if (_bind$3.$tag === 44) {
                                  const _StringIdent = _bind$3;
                                  const _id = _StringIdent._0;
                                  id$4 = _id;
                                  break _L$7;
                                } else {
                                  break;
                                }
                              }
                              _M0MP28Bobojy008moonyara6Parser7advance(self);
                              _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(set, id$4);
                              if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind5Comma__)) {
                                _M0MP28Bobojy008moonyara6Parser7advance(self);
                              }
                              continue;
                            }
                            const _bind$3 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                            if (_bind$3.$tag === 1) {
                              const _ok = _bind$3;
                              _ok._0;
                            } else {
                              return _bind$3;
                            }
                            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr8NumOfSet(new _M0DTP28Bobojy008moonyara13ConditionExpr6IntLit(set.length), set));
                          }
                          default: {
                            other$2 = _bind$2;
                            break _L$6;
                          }
                        }
                      }
                      return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(_M0MP28Bobojy008moonyara6Parser4peek(self).line, _M0MP28Bobojy008moonyara6Parser4peek(self).col, "'them' or set after 'of'", _M0FP28Bobojy008moonyara17token__kind__name(other$2)));
                    } else {
                      other = _bind;
                      break _L;
                    }
                  }
                  default: {
                    other = _bind;
                    break _L;
                  }
                }
              }
              case 44: {
                const _StringIdent = _bind;
                const _id = _StringIdent._0;
                id$3 = _id;
                break _L$4;
              }
              case 45: {
                const _CountIdent = _bind;
                const _id$2 = _CountIdent._0;
                id$2 = _id$2;
                break _L$3;
              }
              case 46: {
                const _OffsetIdent = _bind;
                const _id$3 = _OffsetIdent._0;
                id = _id$3;
                break _L$2;
              }
              case 17: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$2 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LParen__);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
                let offset_expr;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  offset_expr = _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr5Uint8(offset_expr));
              }
              case 18: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$5 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LParen__);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
                let offset_expr$2;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  offset_expr$2 = _ok._0;
                } else {
                  return _bind$6;
                }
                const _bind$7 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr6Uint16(offset_expr$2));
              }
              case 19: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$8 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LParen__);
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _ok._0;
                } else {
                  return _bind$8;
                }
                const _bind$9 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
                let offset_expr$3;
                if (_bind$9.$tag === 1) {
                  const _ok = _bind$9;
                  offset_expr$3 = _ok._0;
                } else {
                  return _bind$9;
                }
                const _bind$10 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _ok._0;
                } else {
                  return _bind$10;
                }
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr8Uint16Be(offset_expr$3));
              }
              case 20: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$11 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LParen__);
                if (_bind$11.$tag === 1) {
                  const _ok = _bind$11;
                  _ok._0;
                } else {
                  return _bind$11;
                }
                const _bind$12 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
                let offset_expr$4;
                if (_bind$12.$tag === 1) {
                  const _ok = _bind$12;
                  offset_expr$4 = _ok._0;
                } else {
                  return _bind$12;
                }
                const _bind$13 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                if (_bind$13.$tag === 1) {
                  const _ok = _bind$13;
                  _ok._0;
                } else {
                  return _bind$13;
                }
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr6Uint32(offset_expr$4));
              }
              case 21: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$14 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LParen__);
                if (_bind$14.$tag === 1) {
                  const _ok = _bind$14;
                  _ok._0;
                } else {
                  return _bind$14;
                }
                const _bind$15 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
                let offset_expr$5;
                if (_bind$15.$tag === 1) {
                  const _ok = _bind$15;
                  offset_expr$5 = _ok._0;
                } else {
                  return _bind$15;
                }
                const _bind$16 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                if (_bind$16.$tag === 1) {
                  const _ok = _bind$16;
                  _ok._0;
                } else {
                  return _bind$16;
                }
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr8Uint32Be(offset_expr$5));
              }
              case 27: {
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$17 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
                let expr;
                if (_bind$17.$tag === 1) {
                  const _ok = _bind$17;
                  expr = _ok._0;
                } else {
                  return _bind$17;
                }
                const _bind$18 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                if (_bind$18.$tag === 1) {
                  const _ok = _bind$18;
                  _ok._0;
                } else {
                  return _bind$18;
                }
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(expr);
              }
              default: {
                other = _bind;
                break _L;
              }
            }
          }
          if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser10peek__next(self).kind, _M0DTP28Bobojy008moonyara9TokenKind4KwOf__)) {
            _M0MP28Bobojy008moonyara6Parser7advance(self);
            _M0MP28Bobojy008moonyara6Parser7advance(self);
            let other$2;
            _L$6: {
              const _bind = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
              switch (_bind.$tag) {
                case 13: {
                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr9NumOfThem(new _M0DTP28Bobojy008moonyara13ConditionExpr6IntLit(i)));
                }
                case 27: {
                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                  const set = [];
                  while (true) {
                    let id$4;
                    _L$7: {
                      const _bind$2 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                      if (_bind$2.$tag === 44) {
                        const _StringIdent = _bind$2;
                        const _id = _StringIdent._0;
                        id$4 = _id;
                        break _L$7;
                      } else {
                        break;
                      }
                    }
                    _M0MP28Bobojy008moonyara6Parser7advance(self);
                    _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(set, id$4);
                    if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind5Comma__)) {
                      _M0MP28Bobojy008moonyara6Parser7advance(self);
                    }
                    continue;
                  }
                  const _bind$2 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _ok._0;
                  } else {
                    return _bind$2;
                  }
                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr8NumOfSet(new _M0DTP28Bobojy008moonyara13ConditionExpr6IntLit(i), set));
                }
                default: {
                  other$2 = _bind;
                  break _L$6;
                }
              }
            }
            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(_M0MP28Bobojy008moonyara6Parser4peek(self).line, _M0MP28Bobojy008moonyara6Parser4peek(self).col, "'them' or set after 'of'", _M0FP28Bobojy008moonyara17token__kind__name(other$2)));
          } else {
            _M0MP28Bobojy008moonyara6Parser7advance(self);
            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr6IntLit(i));
          }
        }
        _M0MP28Bobojy008moonyara6Parser7advance(self);
        if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind4KwAt__)) {
          _M0MP28Bobojy008moonyara6Parser7advance(self);
          const _bind = _M0MP28Bobojy008moonyara6Parser14parse__primary(self);
          let offset_expr;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            offset_expr = _ok._0;
          } else {
            return _bind;
          }
          return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr2At(id$3, offset_expr));
        } else {
          if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind4KwIn__)) {
            _M0MP28Bobojy008moonyara6Parser7advance(self);
            const _bind = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LParen__);
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
            const _bind$2 = _M0MP28Bobojy008moonyara6Parser14parse__primary(self);
            let start_expr;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              start_expr = _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6DotDot__);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MP28Bobojy008moonyara6Parser14parse__primary(self);
            let end_expr;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              end_expr = _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr2In(id$3, start_expr, end_expr));
          } else {
            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr8StringId(id$3));
          }
        }
      }
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr10MatchCount(id$2));
    }
    _M0MP28Bobojy008moonyara6Parser7advance(self);
    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0DTP28Bobojy008moonyara13ConditionExpr11MatchOffset(id));
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara13ConditionExprRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(tok.line, tok.col, "condition expression", _M0FP28Bobojy008moonyara17token__kind__name(other)));
}
function _M0MP28Bobojy008moonyara6Parser11parse__rule(self) {
  const _bind = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6KwRule__);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP28Bobojy008moonyara6Parser13expect__ident(self);
  let name;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    name = _ok._0;
  } else {
    return _bind$2;
  }
  const tags = [];
  if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind5Colon__)) {
    _M0MP28Bobojy008moonyara6Parser7advance(self);
    while (true) {
      let tag;
      _L: {
        const _bind$3 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
        if (_bind$3.$tag === 47) {
          const _Ident = _bind$3;
          const _tag = _Ident._0;
          tag = _tag;
          break _L;
        } else {
          break;
        }
      }
      _M0MP28Bobojy008moonyara6Parser7advance(self);
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(tags, tag);
      continue;
    }
  }
  const _bind$3 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6LBrace__);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const metas = [];
  const strings = [];
  const condition = new _M0TPB8MutLocalGORP28Bobojy008moonyara13ConditionExprE(undefined);
  while (true) {
    if (_M0IP016_24default__implPB2Eq10not__equalGRP28Bobojy008moonyara9TokenKindE(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind6RBrace__) && _M0IP016_24default__implPB2Eq10not__equalGRP28Bobojy008moonyara9TokenKindE(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind3Eof__)) {
      let other;
      _L: {
        _L$2: {
          const _bind$4 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
          switch (_bind$4.$tag) {
            case 1: {
              _M0MP28Bobojy008moonyara6Parser7advance(self);
              const _bind$5 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind5Colon__);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              while (true) {
                let key;
                _L$3: {
                  const _bind$6 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                  if (_bind$6.$tag === 47) {
                    const _Ident = _bind$6;
                    const _key = _Ident._0;
                    key = _key;
                    break _L$3;
                  } else {
                    break;
                  }
                }
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$6 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6Assign__);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                const val_tok = _M0MP28Bobojy008moonyara6Parser7advance(self);
                let val;
                let other$2;
                _L$4: {
                  _L$5: {
                    let i;
                    _L$6: {
                      _L$7: {
                        let s;
                        _L$8: {
                          _L$9: {
                            const _bind$7 = val_tok.kind;
                            switch (_bind$7.$tag) {
                              case 40: {
                                const _StringLit = _bind$7;
                                const _s = _StringLit._0;
                                s = _s;
                                break _L$9;
                              }
                              case 43: {
                                const _IntLit = _bind$7;
                                const _i = _IntLit._0;
                                i = _i;
                                break _L$7;
                              }
                              case 15: {
                                val = new _M0DTP28Bobojy008moonyara9MetaValue8MetaBool(true);
                                break;
                              }
                              case 16: {
                                val = new _M0DTP28Bobojy008moonyara9MetaValue8MetaBool(false);
                                break;
                              }
                              default: {
                                other$2 = _bind$7;
                                break _L$5;
                              }
                            }
                            break _L$8;
                          }
                          val = new _M0DTP28Bobojy008moonyara9MetaValue10MetaString(s);
                        }
                        break _L$6;
                      }
                      val = new _M0DTP28Bobojy008moonyara9MetaValue7MetaInt(i);
                    }
                    break _L$4;
                  }
                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(val_tok.line, val_tok.col, "string, integer or boolean literal in meta", _M0FP28Bobojy008moonyara17token__kind__name(other$2)));
                }
                _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(metas, new _M0TP28Bobojy008moonyara9MetaEntry(key, val));
                continue;
              }
              break;
            }
            case 2: {
              _M0MP28Bobojy008moonyara6Parser7advance(self);
              const _bind$6 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind5Colon__);
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _ok._0;
              } else {
                return _bind$6;
              }
              while (true) {
                let id;
                _L$3: {
                  const _bind$7 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                  if (_bind$7.$tag === 44) {
                    const _StringIdent = _bind$7;
                    const _id = _StringIdent._0;
                    id = _id;
                    break _L$3;
                  } else {
                    break;
                  }
                }
                _M0MP28Bobojy008moonyara6Parser7advance(self);
                const _bind$7 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6Assign__);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
                const pattern_tok = _M0MP28Bobojy008moonyara6Parser7advance(self);
                let pattern;
                let other$2;
                _L$4: {
                  _L$5: {
                    let re_str;
                    let nocase;
                    _L$6: {
                      _L$7: {
                        let targets;
                        let masks;
                        _L$8: {
                          _L$9: {
                            let s;
                            _L$10: {
                              const _bind$8 = pattern_tok.kind;
                              switch (_bind$8.$tag) {
                                case 40: {
                                  const _StringLit = _bind$8;
                                  const _s = _StringLit._0;
                                  s = _s;
                                  break _L$10;
                                }
                                case 41: {
                                  const _HexBlock = _bind$8;
                                  const _targets = _HexBlock._0;
                                  const _masks = _HexBlock._1;
                                  targets = _targets;
                                  masks = _masks;
                                  break _L$9;
                                }
                                case 42: {
                                  const _RegexLit = _bind$8;
                                  const _re_str = _RegexLit._0;
                                  const _nocase = _RegexLit._1;
                                  re_str = _re_str;
                                  nocase = _nocase;
                                  break _L$7;
                                }
                                default: {
                                  other$2 = _bind$8;
                                  break _L$5;
                                }
                              }
                            }
                            const nocase$2 = new _M0TPB8MutLocalGbE(false);
                            const wide = new _M0TPB8MutLocalGbE(false);
                            const is_xor = new _M0TPB8MutLocalGbE(false);
                            const xor_min = new _M0TPB8MutLocalGiE(1);
                            const xor_max = new _M0TPB8MutLocalGiE(255);
                            const is_base64 = new _M0TPB8MutLocalGbE(false);
                            _L$11: while (true) {
                              const _bind$8 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                              switch (_bind$8.$tag) {
                                case 4: {
                                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                                  nocase$2.val = true;
                                  break;
                                }
                                case 5: {
                                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                                  wide.val = true;
                                  break;
                                }
                                case 6: {
                                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                                  break;
                                }
                                case 23: {
                                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                                  is_xor.val = true;
                                  if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(self).kind, _M0DTP28Bobojy008moonyara9TokenKind6LParen__)) {
                                    _M0MP28Bobojy008moonyara6Parser7advance(self);
                                    const min_tok = _M0MP28Bobojy008moonyara6Parser7advance(self);
                                    let min_val;
                                    const _bind$9 = min_tok.kind;
                                    if (_bind$9.$tag === 43) {
                                      const _IntLit = _bind$9;
                                      const _v = _IntLit._0;
                                      min_val = _v;
                                    } else {
                                      min_val = 1;
                                    }
                                    _L$12: {
                                      _L$13: {
                                        const _bind$10 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                                        switch (_bind$10.$tag) {
                                          case 39: {
                                            break _L$13;
                                          }
                                          case 37: {
                                            break _L$13;
                                          }
                                        }
                                        break _L$12;
                                      }
                                      _M0MP28Bobojy008moonyara6Parser7advance(self);
                                    }
                                    const max_tok = _M0MP28Bobojy008moonyara6Parser7advance(self);
                                    let max_val;
                                    const _bind$10 = max_tok.kind;
                                    if (_bind$10.$tag === 43) {
                                      const _IntLit = _bind$10;
                                      const _v = _IntLit._0;
                                      max_val = _v;
                                    } else {
                                      max_val = 255;
                                    }
                                    const _bind$11 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RParen__);
                                    if (_bind$11.$tag === 1) {
                                      const _ok = _bind$11;
                                      _ok._0;
                                    } else {
                                      return _bind$11;
                                    }
                                    xor_min.val = min_val;
                                    xor_max.val = max_val;
                                  }
                                  break;
                                }
                                case 24: {
                                  _M0MP28Bobojy008moonyara6Parser7advance(self);
                                  is_base64.val = true;
                                  break;
                                }
                                default: {
                                  break _L$11;
                                }
                              }
                              continue;
                            }
                            pattern = is_xor.val ? new _M0DTP28Bobojy008moonyara11PatternKind7XorText(s, xor_min.val, xor_max.val, wide.val) : is_base64.val ? new _M0DTP28Bobojy008moonyara11PatternKind10Base64Text(s, wide.val) : new _M0DTP28Bobojy008moonyara11PatternKind4Text(s, nocase$2.val, wide.val);
                            break _L$8;
                          }
                          pattern = new _M0DTP28Bobojy008moonyara11PatternKind3Hex(targets, masks);
                        }
                        break _L$6;
                      }
                      const re_nocase = new _M0TPB8MutLocalGbE(nocase);
                      const wide = new _M0TPB8MutLocalGbE(false);
                      _L$8: while (true) {
                        const _bind$8 = _M0MP28Bobojy008moonyara6Parser4peek(self).kind;
                        switch (_bind$8.$tag) {
                          case 4: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            re_nocase.val = true;
                            break;
                          }
                          case 5: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            wide.val = true;
                            break;
                          }
                          case 6: {
                            _M0MP28Bobojy008moonyara6Parser7advance(self);
                            break;
                          }
                          default: {
                            break _L$8;
                          }
                        }
                        continue;
                      }
                      pattern = new _M0DTP28Bobojy008moonyara11PatternKind5Regex(re_str, re_nocase.val, wide.val);
                    }
                    break _L$4;
                  }
                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(pattern_tok.line, pattern_tok.col, "string literal, hex block or regex", _M0FP28Bobojy008moonyara17token__kind__name(other$2)));
                }
                _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(strings, new _M0TP28Bobojy008moonyara9StringDef(id, pattern));
                continue;
              }
              break;
            }
            case 3: {
              _M0MP28Bobojy008moonyara6Parser7advance(self);
              const _bind$7 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind5Colon__);
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _ok._0;
              } else {
                return _bind$7;
              }
              const _bind$8 = _M0MP28Bobojy008moonyara6Parser22parse__condition__expr(self);
              let cond;
              if (_bind$8.$tag === 1) {
                const _ok = _bind$8;
                cond = _ok._0;
              } else {
                return _bind$8;
              }
              condition.val = cond;
              break;
            }
            default: {
              other = _bind$4;
              break _L$2;
            }
          }
          break _L;
        }
        const tok = _M0MP28Bobojy008moonyara6Parser4peek(self);
        return new _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(tok.line, tok.col, "meta, strings or condition section", _M0FP28Bobojy008moonyara17token__kind__name(other)));
      }
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = _M0MP28Bobojy008moonyara6Parser6expect(self, _M0DTP28Bobojy008moonyara9TokenKind6RBrace__);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  let cond;
  _L: {
    const _bind$5 = condition.val;
    if (_bind$5 === undefined) {
      return new _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(_M0MP28Bobojy008moonyara6Parser4peek(self).line, _M0MP28Bobojy008moonyara6Parser4peek(self).col, "condition section", "end of rule"));
    } else {
      const _Some = _bind$5;
      const _cond = _Some;
      cond = _cond;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara4RuleRP28Bobojy008moonyara10ParseErrorE2Ok(new _M0TP28Bobojy008moonyara4Rule(name, tags, metas, strings, cond));
}
function _M0FP28Bobojy008moonyara12parse__rules(tokens) {
  const parser = _M0MP28Bobojy008moonyara6Parser3new(tokens);
  const rules = [];
  while (true) {
    if (_M0IP016_24default__implPB2Eq10not__equalGRP28Bobojy008moonyara9TokenKindE(_M0MP28Bobojy008moonyara6Parser4peek(parser).kind, _M0DTP28Bobojy008moonyara9TokenKind3Eof__)) {
      if (_M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(_M0MP28Bobojy008moonyara6Parser4peek(parser).kind, _M0DTP28Bobojy008moonyara9TokenKind9KwInclude__)) {
        _M0MP28Bobojy008moonyara6Parser7advance(parser);
        const inc_tok = _M0MP28Bobojy008moonyara6Parser7advance(parser);
        let other;
        _L: {
          _L$2: {
            const _bind = inc_tok.kind;
            if (_bind.$tag === 40) {
            } else {
              other = _bind;
              break _L$2;
            }
            break _L;
          }
          return new _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara4RuleERP28Bobojy008moonyara10ParseErrorE3Err(new _M0DTPC15error5Error50Bobojy00_2fmoonyara_2eParseError_2eUnexpectedToken(inc_tok.line, inc_tok.col, "string literal after include", _M0FP28Bobojy008moonyara17token__kind__name(other)));
        }
        continue;
      }
      const _bind = _M0MP28Bobojy008moonyara6Parser11parse__rule(parser);
      let rule;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        rule = _ok._0;
      } else {
        return _bind;
      }
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(rules, rule);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara4RuleERP28Bobojy008moonyara10ParseErrorE2Ok(rules);
}
function _M0FP28Bobojy008moonyara16is__ident__start(c) {
  return _M0MPC14char4Char21is__ascii__alphabetic(c) || c === 95;
}
function _M0MP28Bobojy008moonyara5Lexer7advance(self) {
  if (self.pos < self.input.length) {
    const ch = _M0MPC15array5Array2atGcE(self.input, self.pos);
    self.pos = self.pos + 1 | 0;
    if (ch === 10) {
      self.line = self.line + 1 | 0;
      self.col = 1;
    } else {
      self.col = self.col + 1 | 0;
    }
    return ch;
  } else {
    return -1;
  }
}
function _M0MP28Bobojy008moonyara5Lexer3new(input) {
  return new _M0TP28Bobojy008moonyara5Lexer(_M0MPC16string6String9to__array(input), 0, 1, 1, false);
}
function _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, offset) {
  const idx = self.pos + offset | 0;
  return idx < self.input.length ? _M0MPC15array5Array2atGcE(self.input, idx) : -1;
}
function _M0FP28Bobojy008moonyara8hex__val(c) {
  return c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? (c - 97 | 0) + 10 | 0 : c >= 65 && c <= 70 ? (c - 65 | 0) + 10 | 0 : undefined;
}
function _M0MP28Bobojy008moonyara5Lexer16scan__hex__block(self) {
  const start_line = self.line;
  const start_col = self.col;
  _M0MP28Bobojy008moonyara5Lexer7advance(self);
  const target_bytes = [];
  const mask_bytes = [];
  while (true) {
    _L: while (true) {
      if (self.pos < self.input.length) {
        _L$2: {
          _L$3: {
            _L$4: {
              _L$5: {
                const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
                if (_bind === -1) {
                  break _L$3;
                } else {
                  const _Some = _bind;
                  const _x = _Some;
                  switch (_x) {
                    case 32: {
                      break _L$5;
                    }
                    case 9: {
                      break _L$5;
                    }
                    case 13: {
                      break _L$5;
                    }
                    case 10: {
                      break _L$5;
                    }
                    case 47: {
                      _L$6: {
                        _L$7: {
                          const _bind$2 = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1);
                          if (_bind$2 === -1) {
                            break _L$7;
                          } else {
                            const _Some$2 = _bind$2;
                            const _x$2 = _Some$2;
                            switch (_x$2) {
                              case 47: {
                                _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                while (true) {
                                  if (self.pos < self.input.length) {
                                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0), 10)) {
                                      _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                      break;
                                    }
                                    _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                    continue;
                                  } else {
                                    break;
                                  }
                                }
                                break;
                              }
                              case 42: {
                                _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                const closed = new _M0TPB8MutLocalGbE(false);
                                while (true) {
                                  if (self.pos < self.input.length) {
                                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0), 42) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1), 47)) {
                                      _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                      _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                      closed.val = true;
                                      break;
                                    }
                                    _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                    continue;
                                  } else {
                                    break;
                                  }
                                }
                                if (!closed.val) {
                                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error53Bobojy00_2fmoonyara_2eLexError_2eUnterminatedHexBlock(start_line, start_col));
                                }
                                break;
                              }
                              default: {
                                break _L$7;
                              }
                            }
                          }
                          break _L$6;
                        }
                        break _L;
                      }
                      break;
                    }
                    default: {
                      break _L$3;
                    }
                  }
                }
                break _L$4;
              }
              _M0MP28Bobojy008moonyara5Lexer7advance(self);
            }
            break _L$2;
          }
          break;
        }
        continue;
      } else {
        break;
      }
    }
    let c1;
    _L$2: {
      const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error53Bobojy00_2fmoonyara_2eLexError_2eUnterminatedHexBlock(start_line, start_col));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 125) {
          _M0MP28Bobojy008moonyara5Lexer7advance(self);
          break;
        } else {
          c1 = _x;
          break _L$2;
        }
      }
    }
    const cur_line = self.line;
    const cur_col = self.col;
    _M0MP28Bobojy008moonyara5Lexer7advance(self);
    let c2;
    _L$3: {
      const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error53Bobojy00_2fmoonyara_2eLexError_2eUnterminatedHexBlock(start_line, start_col));
      } else {
        const _Some = _bind;
        const _c2 = _Some;
        c2 = _c2;
        break _L$3;
      }
    }
    _M0MP28Bobojy008moonyara5Lexer7advance(self);
    let target;
    let mask;
    _L$4: {
      if (c1 === 63 && c2 === 63) {
        target = 0;
        mask = 0;
        break _L$4;
      } else {
        if (c1 === 63) {
          let v2;
          _L$5: {
            const _bind = _M0FP28Bobojy008moonyara8hex__val(c2);
            if (_bind === undefined) {
              return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexDigit(cur_line, cur_col + 1 | 0, c2));
            } else {
              const _Some = _bind;
              const _v2 = _Some;
              v2 = _v2;
              break _L$5;
            }
          }
          target = v2;
          mask = 15;
          break _L$4;
        } else {
          if (c2 === 63) {
            let v1;
            _L$5: {
              const _bind = _M0FP28Bobojy008moonyara8hex__val(c1);
              if (_bind === undefined) {
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexDigit(cur_line, cur_col, c1));
              } else {
                const _Some = _bind;
                const _v1 = _Some;
                v1 = _v1;
                break _L$5;
              }
            }
            target = v1 << 4;
            mask = 240;
            break _L$4;
          } else {
            let v1;
            let v2;
            _L$5: {
              const _bind = _M0FP28Bobojy008moonyara8hex__val(c1);
              const _bind$2 = _M0FP28Bobojy008moonyara8hex__val(c2);
              if (_bind === undefined) {
                return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexDigit(cur_line, cur_col, c1));
              } else {
                const _Some = _bind;
                const _v1 = _Some;
                if (_bind$2 === undefined) {
                  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error48Bobojy00_2fmoonyara_2eLexError_2eInvalidHexDigit(cur_line, cur_col + 1 | 0, c2));
                } else {
                  const _Some$2 = _bind$2;
                  const _v2 = _Some$2;
                  v1 = _v1;
                  v2 = _v2;
                  break _L$5;
                }
              }
            }
            target = v1 << 4 | v2;
            mask = 255;
            break _L$4;
          }
        }
      }
    }
    _M0MPC15array5Array4pushGyE(target_bytes, target & 255);
    _M0MPC15array5Array4pushGyE(mask_bytes, mask & 255);
    continue;
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE2Ok(new _M0TP28Bobojy008moonyara5Token(new _M0DTP28Bobojy008moonyara9TokenKind8HexBlock(target_bytes, mask_bytes), start_line, start_col));
}
function _M0FP28Bobojy008moonyara19is__ident__continue(c) {
  return _M0MPC14char4Char21is__ascii__alphabetic(c) || (_M0MPC14char4Char16is__ascii__digit(c) || c === 95);
}
function _M0MP28Bobojy008moonyara5Lexer11scan__ident(self) {
  const start_line = self.line;
  const start_col = self.col;
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  while (true) {
    if (self.pos < self.input.length) {
      _L: {
        _L$2: {
          let c;
          _L$3: {
            const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
            if (_bind === -1) {
              break _L$2;
            } else {
              const _Some = _bind;
              const _c = _Some;
              if (_M0FP28Bobojy008moonyara19is__ident__continue(_c)) {
                c = _c;
                break _L$3;
              } else {
                break _L$2;
              }
            }
          }
          _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
          _M0MP28Bobojy008moonyara5Lexer7advance(self);
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const text = _M0MPB13StringBuilder10to__string(sb);
  let kind;
  switch (text) {
    case "rule": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind6KwRule__;
      break;
    }
    case "meta": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind6KwMeta__;
      break;
    }
    case "strings": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind9KwStrings__;
      break;
    }
    case "condition": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind11KwCondition__;
      break;
    }
    case "nocase": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind8KwNocase__;
      break;
    }
    case "wide": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind6KwWide__;
      break;
    }
    case "ascii": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind7KwAscii__;
      break;
    }
    case "and": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind5KwAnd__;
      break;
    }
    case "or": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind4KwOr__;
      break;
    }
    case "not": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind5KwNot__;
      break;
    }
    case "at": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind4KwAt__;
      break;
    }
    case "in": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind4KwIn__;
      break;
    }
    case "of": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind4KwOf__;
      break;
    }
    case "them": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind6KwThem__;
      break;
    }
    case "filesize": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind10KwFilesize__;
      break;
    }
    case "true": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind6KwTrue__;
      break;
    }
    case "false": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind7KwFalse__;
      break;
    }
    case "uint8": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind7KwUint8__;
      break;
    }
    case "uint16": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind8KwUint16__;
      break;
    }
    case "uint16be": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind10KwUint16Be__;
      break;
    }
    case "uint32": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind8KwUint32__;
      break;
    }
    case "uint32be": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind10KwUint32Be__;
      break;
    }
    case "include": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind9KwInclude__;
      break;
    }
    case "xor": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind5KwXor__;
      break;
    }
    case "base64": {
      kind = _M0DTP28Bobojy008moonyara9TokenKind8KwBase64__;
      break;
    }
    default: {
      kind = new _M0DTP28Bobojy008moonyara9TokenKind5Ident(text);
    }
  }
  return new _M0TP28Bobojy008moonyara5Token(kind, start_line, start_col);
}
function _M0MP28Bobojy008moonyara5Lexer12scan__number(self) {
  const start_line = self.line;
  const start_col = self.col;
  const is_hex = new _M0TPB8MutLocalGbE(false);
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0), 48) && (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1), 120) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1), 88))) {
    is_hex.val = true;
    _M0MP28Bobojy008moonyara5Lexer7advance(self);
    _M0MP28Bobojy008moonyara5Lexer7advance(self);
  }
  const num = new _M0TPB8MutLocalGiE(0);
  if (is_hex.val) {
    while (true) {
      if (self.pos < self.input.length) {
        let c;
        _L: {
          const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _c = _Some;
            c = _c;
            break _L;
          }
        }
        let v;
        _L$2: {
          const _bind = _M0FP28Bobojy008moonyara8hex__val(c);
          if (_bind === undefined) {
            break;
          } else {
            const _Some = _bind;
            const _v = _Some;
            v = _v;
            break _L$2;
          }
        }
        num.val = num.val << 4 | v;
        _M0MP28Bobojy008moonyara5Lexer7advance(self);
        continue;
      } else {
        break;
      }
    }
  } else {
    while (true) {
      if (self.pos < self.input.length) {
        _L: {
          _L$2: {
            let c;
            _L$3: {
              const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
              if (_bind === -1) {
                break _L$2;
              } else {
                const _Some = _bind;
                const _c = _Some;
                if (_M0MPC14char4Char16is__ascii__digit(_c)) {
                  c = _c;
                  break _L$3;
                } else {
                  break _L$2;
                }
              }
            }
            num.val = (Math.imul(num.val, 10) | 0) + (c - 48 | 0) | 0;
            _M0MP28Bobojy008moonyara5Lexer7advance(self);
            break _L;
          }
          break;
        }
        continue;
      } else {
        break;
      }
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0), 75) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1), 66)) {
      _M0MP28Bobojy008moonyara5Lexer7advance(self);
      _M0MP28Bobojy008moonyara5Lexer7advance(self);
      num.val = Math.imul(num.val, 1024) | 0;
    } else {
      if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0), 77) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1), 66)) {
        _M0MP28Bobojy008moonyara5Lexer7advance(self);
        _M0MP28Bobojy008moonyara5Lexer7advance(self);
        num.val = Math.imul(Math.imul(num.val, 1024) | 0, 1024) | 0;
      }
    }
  }
  return new _M0TP28Bobojy008moonyara5Token(new _M0DTP28Bobojy008moonyara9TokenKind6IntLit(num.val), start_line, start_col);
}
function _M0MP28Bobojy008moonyara5Lexer11scan__regex(self) {
  const start_line = self.line;
  const start_col = self.col;
  _M0MP28Bobojy008moonyara5Lexer7advance(self);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const closed = new _M0TPB8MutLocalGbE(false);
  const in_class = new _M0TPB8MutLocalGbE(false);
  _L: while (true) {
    if (self.pos < self.input.length) {
      let c;
      _L$2: {
        _L$3: {
          const _bind = _M0MP28Bobojy008moonyara5Lexer7advance(self);
          if (_bind === -1) {
            return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(start_line, start_col));
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 47: {
                if (!in_class.val) {
                  closed.val = true;
                  break _L;
                } else {
                  c = _x;
                  break _L$3;
                }
              }
              case 91: {
                in_class.val = true;
                _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
                break;
              }
              case 93: {
                in_class.val = false;
                _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
                break;
              }
              case 92: {
                let esc;
                _L$4: {
                  _L$5: {
                    const _bind$2 = _M0MP28Bobojy008moonyara5Lexer7advance(self);
                    if (_bind$2 === -1) {
                      return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(start_line, start_col));
                    } else {
                      const _Some$2 = _bind$2;
                      const _x$2 = _Some$2;
                      if (_x$2 === 47) {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 92);
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 47);
                      } else {
                        esc = _x$2;
                        break _L$5;
                      }
                    }
                    break _L$4;
                  }
                  _M0IPB13StringBuilderPB6Logger11write__char(sb, 92);
                  _M0IPB13StringBuilderPB6Logger11write__char(sb, esc);
                }
                break;
              }
              default: {
                c = _x;
                break _L$3;
              }
            }
          }
          break _L$2;
        }
        _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
      }
      continue;
    } else {
      break;
    }
  }
  if (!closed.val) {
    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(start_line, start_col));
  }
  const nocase = new _M0TPB8MutLocalGbE(false);
  while (true) {
    if (self.pos < self.input.length) {
      _L$2: {
        _L$3: {
          const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
          if (_bind === -1) {
            break _L$3;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 105: {
                _M0MP28Bobojy008moonyara5Lexer7advance(self);
                nocase.val = true;
                break;
              }
              case 115: {
                _M0MP28Bobojy008moonyara5Lexer7advance(self);
                break;
              }
              default: {
                break _L$3;
              }
            }
          }
          break _L$2;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE2Ok(new _M0TP28Bobojy008moonyara5Token(new _M0DTP28Bobojy008moonyara9TokenKind8RegexLit(_M0MPB13StringBuilder10to__string(sb), nocase.val), start_line, start_col));
}
function _M0MP28Bobojy008moonyara5Lexer12scan__string(self) {
  const start_line = self.line;
  const start_col = self.col;
  _M0MP28Bobojy008moonyara5Lexer7advance(self);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _L: while (true) {
    let c;
    _L$2: {
      _L$3: {
        const _bind = _M0MP28Bobojy008moonyara5Lexer7advance(self);
        if (_bind === -1) {
          return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(start_line, start_col));
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 34: {
              break _L;
            }
            case 92: {
              let other;
              _L$4: {
                _L$5: {
                  const _bind$2 = _M0MP28Bobojy008moonyara5Lexer7advance(self);
                  if (_bind$2 === -1) {
                    return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(start_line, start_col));
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    switch (_x$2) {
                      case 110: {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 10);
                        break;
                      }
                      case 114: {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 13);
                        break;
                      }
                      case 116: {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 9);
                        break;
                      }
                      case 92: {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 92);
                        break;
                      }
                      case 34: {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, 34);
                        break;
                      }
                      case 120: {
                        const h1 = _M0MP28Bobojy008moonyara5Lexer7advance(self);
                        const h2 = _M0MP28Bobojy008moonyara5Lexer7advance(self);
                        _L$6: {
                          _L$7: {
                            let c1;
                            let c2;
                            _L$8: {
                              if (h1 === -1) {
                                break _L$7;
                              } else {
                                const _Some$3 = h1;
                                const _c1 = _Some$3;
                                if (h2 === -1) {
                                  break _L$7;
                                } else {
                                  const _Some$4 = h2;
                                  const _c2 = _Some$4;
                                  c1 = _c1;
                                  c2 = _c2;
                                  break _L$8;
                                }
                              }
                            }
                            _L$9: {
                              _L$10: {
                                let v1;
                                let v2;
                                _L$11: {
                                  const _bind$3 = _M0FP28Bobojy008moonyara8hex__val(c1);
                                  const _bind$4 = _M0FP28Bobojy008moonyara8hex__val(c2);
                                  if (_bind$3 === undefined) {
                                    break _L$10;
                                  } else {
                                    const _Some$3 = _bind$3;
                                    const _v1 = _Some$3;
                                    if (_bind$4 === undefined) {
                                      break _L$10;
                                    } else {
                                      const _Some$4 = _bind$4;
                                      const _v2 = _Some$4;
                                      v1 = _v1;
                                      v2 = _v2;
                                      break _L$11;
                                    }
                                  }
                                }
                                const code = v1 << 4 | v2;
                                _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC16option6Option10unwrap__orGcE(_M0MPC13int3Int8to__char(code), 63));
                                break _L$9;
                              }
                              _M0IPB13StringBuilderPB6Logger11write__char(sb, 92);
                              _M0IPB13StringBuilderPB6Logger11write__char(sb, 120);
                              _M0IPB13StringBuilderPB6Logger11write__char(sb, c1);
                              _M0IPB13StringBuilderPB6Logger11write__char(sb, c2);
                            }
                            break _L$6;
                          }
                          return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error51Bobojy00_2fmoonyara_2eLexError_2eUnterminatedString(start_line, start_col));
                        }
                        break;
                      }
                      default: {
                        other = _x$2;
                        break _L$5;
                      }
                    }
                  }
                  break _L$4;
                }
                _M0IPB13StringBuilderPB6Logger11write__char(sb, 92);
                _M0IPB13StringBuilderPB6Logger11write__char(sb, other);
              }
              break;
            }
            default: {
              c = _x;
              break _L$3;
            }
          }
        }
        break _L$2;
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara5TokenRP28Bobojy008moonyara8LexErrorE2Ok(new _M0TP28Bobojy008moonyara5Token(new _M0DTP28Bobojy008moonyara9TokenKind9StringLit(_M0MPB13StringBuilder10to__string(sb)), start_line, start_col));
}
function _M0MP28Bobojy008moonyara5Lexer14scan__variable(self, prefix) {
  const start_line = self.line;
  const start_col = self.col;
  _M0MP28Bobojy008moonyara5Lexer7advance(self);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, prefix);
  while (true) {
    if (self.pos < self.input.length) {
      _L: {
        _L$2: {
          let c;
          _L$3: {
            const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
            if (_bind === -1) {
              break _L$2;
            } else {
              const _Some = _bind;
              const _c = _Some;
              if (_M0FP28Bobojy008moonyara19is__ident__continue(_c)) {
                c = _c;
                break _L$3;
              } else {
                break _L$2;
              }
            }
          }
          _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
          _M0MP28Bobojy008moonyara5Lexer7advance(self);
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const text = _M0MPB13StringBuilder10to__string(sb);
  let kind;
  switch (prefix) {
    case 36: {
      kind = new _M0DTP28Bobojy008moonyara9TokenKind11StringIdent(text);
      break;
    }
    case 35: {
      kind = new _M0DTP28Bobojy008moonyara9TokenKind10CountIdent(text);
      break;
    }
    default: {
      kind = new _M0DTP28Bobojy008moonyara9TokenKind11OffsetIdent(text);
    }
  }
  return new _M0TP28Bobojy008moonyara5Token(kind, start_line, start_col);
}
function _M0MP28Bobojy008moonyara5Lexer31skip__whitespace__and__comments(self) {
  _L: while (true) {
    if (self.pos < self.input.length) {
      _L$2: {
        _L$3: {
          _L$4: {
            _L$5: {
              const _bind = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
              if (_bind === -1) {
                break _L$3;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 32: {
                    break _L$5;
                  }
                  case 9: {
                    break _L$5;
                  }
                  case 13: {
                    break _L$5;
                  }
                  case 10: {
                    break _L$5;
                  }
                  case 47: {
                    _L$6: {
                      _L$7: {
                        const _bind$2 = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1);
                        if (_bind$2 === -1) {
                          break _L$7;
                        } else {
                          const _Some$2 = _bind$2;
                          const _x$2 = _Some$2;
                          switch (_x$2) {
                            case 47: {
                              _M0MP28Bobojy008moonyara5Lexer7advance(self);
                              _M0MP28Bobojy008moonyara5Lexer7advance(self);
                              while (true) {
                                if (self.pos < self.input.length) {
                                  _L$8: {
                                    const _bind$3 = _M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0);
                                    if (_bind$3 === -1) {
                                      break _L$8;
                                    } else {
                                      const _Some$3 = _bind$3;
                                      const _x$3 = _Some$3;
                                      if (_x$3 === 10) {
                                        _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                        break;
                                      } else {
                                        break _L$8;
                                      }
                                    }
                                  }
                                  _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                  continue;
                                } else {
                                  break;
                                }
                              }
                              break;
                            }
                            case 42: {
                              const start_line = self.line;
                              const start_col = self.col;
                              _M0MP28Bobojy008moonyara5Lexer7advance(self);
                              _M0MP28Bobojy008moonyara5Lexer7advance(self);
                              const closed = new _M0TPB8MutLocalGbE(false);
                              while (true) {
                                if (self.pos < self.input.length) {
                                  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 0), 42) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(self, 1), 47)) {
                                    _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                    _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                    closed.val = true;
                                    break;
                                  }
                                  _M0MP28Bobojy008moonyara5Lexer7advance(self);
                                  continue;
                                } else {
                                  break;
                                }
                              }
                              if (!closed.val) {
                                return new _M0DTPC16result6ResultGuRP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error52Bobojy00_2fmoonyara_2eLexError_2eUnterminatedComment(start_line, start_col));
                              }
                              break;
                            }
                            default: {
                              break _L$7;
                            }
                          }
                        }
                        break _L$6;
                      }
                      break _L;
                    }
                    break;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
              break _L$4;
            }
            _M0MP28Bobojy008moonyara5Lexer7advance(self);
          }
          break _L$2;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP28Bobojy008moonyara8LexErrorE2Ok(undefined);
}
function _M0FP28Bobojy008moonyara8tokenize(input) {
  const lexer = _M0MP28Bobojy008moonyara5Lexer3new(input);
  const tokens = [];
  while (true) {
    const _bind = _M0MP28Bobojy008moonyara5Lexer31skip__whitespace__and__comments(lexer);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    if (lexer.pos >= lexer.input.length) {
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(tokens, new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind3Eof__, lexer.line, lexer.col));
      break;
    }
    const start_line = lexer.line;
    const start_col = lexer.col;
    const ch = _M0MPC16option6Option6unwrapGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(lexer, 0));
    if (ch === 123 && lexer.prev_was_assign) {
      const _bind$2 = _M0MP28Bobojy008moonyara5Lexer16scan__hex__block(lexer);
      let tok;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        tok = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(tokens, tok);
      lexer.prev_was_assign = false;
      continue;
    }
    if (ch === 47 && lexer.prev_was_assign) {
      const _bind$2 = _M0MP28Bobojy008moonyara5Lexer11scan__regex(lexer);
      let tok;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        tok = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(tokens, tok);
      lexer.prev_was_assign = false;
      continue;
    }
    let tok;
    let other;
    _L: {
      _L$2: {
        let c;
        _L$3: {
          _L$4: {
            let c$2;
            _L$5: {
              _L$6: {
                switch (ch) {
                  case 123: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind6LBrace__, start_line, start_col);
                    break;
                  }
                  case 125: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind6RBrace__, start_line, start_col);
                    break;
                  }
                  case 40: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind6LParen__, start_line, start_col);
                    break;
                  }
                  case 41: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind6RParen__, start_line, start_col);
                    break;
                  }
                  case 58: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind5Colon__, start_line, start_col);
                    break;
                  }
                  case 44: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind5Comma__, start_line, start_col);
                    break;
                  }
                  case 45: {
                    _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                    tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind5Minus__, start_line, start_col);
                    break;
                  }
                  case 46: {
                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(lexer, 1), 46)) {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind6DotDot__, start_line, start_col);
                    } else {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      return new _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error47Bobojy00_2fmoonyara_2eLexError_2eUnexpectedChar(start_line, start_col, 46));
                    }
                    break;
                  }
                  case 61: {
                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(lexer, 1), 61)) {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind2Eq__, start_line, start_col);
                    } else {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind6Assign__, start_line, start_col);
                    }
                    break;
                  }
                  case 33: {
                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(lexer, 1), 61)) {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind3Neq__, start_line, start_col);
                    } else {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      return new _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error47Bobojy00_2fmoonyara_2eLexError_2eUnexpectedChar(start_line, start_col, 33));
                    }
                    break;
                  }
                  case 60: {
                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(lexer, 1), 61)) {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind3Lte__, start_line, start_col);
                    } else {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind2Lt__, start_line, start_col);
                    }
                    break;
                  }
                  case 62: {
                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP28Bobojy008moonyara5Lexer12peek_2einner(lexer, 1), 61)) {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind3Gte__, start_line, start_col);
                    } else {
                      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
                      tok = new _M0TP28Bobojy008moonyara5Token(_M0DTP28Bobojy008moonyara9TokenKind2Gt__, start_line, start_col);
                    }
                    break;
                  }
                  case 34: {
                    const _bind$2 = _M0MP28Bobojy008moonyara5Lexer12scan__string(lexer);
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      tok = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    break;
                  }
                  case 36: {
                    tok = _M0MP28Bobojy008moonyara5Lexer14scan__variable(lexer, 36);
                    break;
                  }
                  case 35: {
                    tok = _M0MP28Bobojy008moonyara5Lexer14scan__variable(lexer, 35);
                    break;
                  }
                  case 64: {
                    tok = _M0MP28Bobojy008moonyara5Lexer14scan__variable(lexer, 64);
                    break;
                  }
                  default: {
                    if (_M0MPC14char4Char16is__ascii__digit(ch)) {
                      c$2 = ch;
                      break _L$6;
                    } else {
                      if (_M0FP28Bobojy008moonyara16is__ident__start(ch)) {
                        c = ch;
                        break _L$4;
                      } else {
                        other = ch;
                        break _L$2;
                      }
                    }
                  }
                }
                break _L$5;
              }
              tok = _M0MP28Bobojy008moonyara5Lexer12scan__number(lexer);
            }
            break _L$3;
          }
          tok = _M0MP28Bobojy008moonyara5Lexer11scan__ident(lexer);
        }
        break _L;
      }
      _M0MP28Bobojy008moonyara5Lexer7advance(lexer);
      return new _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE3Err(new _M0DTPC15error5Error47Bobojy00_2fmoonyara_2eLexError_2eUnexpectedChar(start_line, start_col, other));
    }
    lexer.prev_was_assign = _M0IP28Bobojy008moonyara9TokenKindPB2Eq5equal(tok.kind, _M0DTP28Bobojy008moonyara9TokenKind6Assign__);
    _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(tokens, tok);
    continue;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP28Bobojy008moonyara5TokenERP28Bobojy008moonyara8LexErrorE2Ok(tokens);
}
function _M0FP28Bobojy008moonyara26parse__rules__from__string(input) {
  const _bind = _M0FP28Bobojy008moonyara8tokenize(input);
  let tokens;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tokens = _ok._0;
  } else {
    return _bind;
  }
  return _M0FP28Bobojy008moonyara12parse__rules(tokens);
}
function _M0FP28Bobojy008moonyara22ascii__to__lower__byte(b) {
  const v = b;
  return v >= 65 && v <= 90 ? (v + 32 | 0) & 255 : b;
}
function _M0FP28Bobojy008moonyara18build__wide__bytes(s) {
  const bytes = [];
  const _bind = s.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = s.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
          break _L;
        }
      }
      const _next_string_index = _decoded_next_string_index;
      const c = _decoded_char;
      const code = c;
      _M0MPC15array5Array4pushGyE(bytes, code & 255);
      _M0MPC15array5Array4pushGyE(bytes, code >> 8 & 255);
      _tmp = _next_string_index;
      continue;
    } else {
      break;
    }
  }
  return bytes;
}
function _M0FP28Bobojy008moonyara19match__exact__bytes(target_data, pattern_bytes, identifier) {
  const matches = [];
  const n = target_data.length;
  const m = pattern_bytes.length;
  if (m === 0 || m > n) {
    return matches;
  }
  const limit = n - m | 0;
  if (m >= 3) {
    const shift = $make_array_len_and_init(256, m);
    let _tmp = 0;
    while (true) {
      const k = _tmp;
      if (k < (m - 1 | 0)) {
        const b = _M0MPC15array5Array2atGyE(pattern_bytes, k);
        $bound_check(shift, b);
        shift[b] = (m - 1 | 0) - k | 0;
        _tmp = k + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const i = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (i.val <= limit) {
        const matched = new _M0TPB8MutLocalGbE(true);
        let _tmp$2 = m - 1 | 0;
        while (true) {
          const j = _tmp$2;
          if (j >= 0) {
            const _tmp$3 = i.val + j | 0;
            $bound_check(target_data, _tmp$3);
            if (target_data[_tmp$3] !== _M0MPC15array5Array2atGyE(pattern_bytes, j)) {
              matched.val = false;
              break;
            }
            _tmp$2 = j - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (matched.val) {
          const data = [];
          let _tmp$3 = 0;
          while (true) {
            const k = _tmp$3;
            if (k < m) {
              const _tmp$4 = i.val + k | 0;
              $bound_check(target_data, _tmp$4);
              _M0MPC15array5Array4pushGyE(data, target_data[_tmp$4]);
              _tmp$3 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, i.val, m, data));
        }
        const _tmp$3 = (i.val + m | 0) - 1 | 0;
        $bound_check(target_data, _tmp$3);
        const last_byte = target_data[_tmp$3];
        $bound_check(shift, last_byte);
        const step = shift[last_byte];
        i.val = i.val + (step <= 0 ? 1 : step) | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i <= limit) {
        const matched = new _M0TPB8MutLocalGbE(true);
        let _tmp$2 = 0;
        while (true) {
          const j = _tmp$2;
          if (j < m) {
            const _tmp$3 = i + j | 0;
            $bound_check(target_data, _tmp$3);
            if (target_data[_tmp$3] !== _M0MPC15array5Array2atGyE(pattern_bytes, j)) {
              matched.val = false;
              break;
            }
            _tmp$2 = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (matched.val) {
          const data = [];
          let _tmp$3 = 0;
          while (true) {
            const k = _tmp$3;
            if (k < m) {
              const _tmp$4 = i + k | 0;
              $bound_check(target_data, _tmp$4);
              _M0MPC15array5Array4pushGyE(data, target_data[_tmp$4]);
              _tmp$3 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, i, m, data));
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return matches;
}
function _M0FP28Bobojy008moonyara23encode__base64__segment(bytes, start, len) {
  const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const table_chars = _M0MPC16string6String9to__array(table);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const i = new _M0TPB8MutLocalGiE(start);
  const end_idx = start + len | 0;
  while (true) {
    if (i.val < end_idx) {
      const b0 = _M0MPC15array5Array2atGyE(bytes, i.val);
      const b1 = (i.val + 1 | 0) < end_idx ? _M0MPC15array5Array2atGyE(bytes, i.val + 1 | 0) : 0;
      const b2 = (i.val + 2 | 0) < end_idx ? _M0MPC15array5Array2atGyE(bytes, i.val + 2 | 0) : 0;
      const c0 = b0 >> 2 & 63;
      const c1 = (b0 << 4 | b1 >> 4) & 63;
      const c2 = (b1 << 2 | b2 >> 6) & 63;
      const c3 = b2 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(table_chars, c0));
      _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(table_chars, c1));
      if ((i.val + 1 | 0) < end_idx) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(table_chars, c2));
      }
      if ((i.val + 2 | 0) < end_idx) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(table_chars, c3));
      }
      i.val = i.val + 3 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP28Bobojy008moonyara26generate__base64__patterns(s) {
  const raw = _M0MPC15bytes5Bytes9to__array(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s, 0, s.length), false));
  const n = raw.length;
  const patterns = [];
  if (n >= 3) {
    if (3 === 0) {
      $panic();
    }
    const full_blocks = Math.imul(n / 3 | 0, 3) | 0;
    const b64 = _M0FP28Bobojy008moonyara23encode__base64__segment(raw, 0, full_blocks);
    if (b64.length > 0) {
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(patterns, b64);
    }
  } else {
    if (n > 0) {
      const b64 = _M0FP28Bobojy008moonyara23encode__base64__segment(raw, 0, n);
      if (b64.length >= 2) {
        _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(patterns, b64);
      }
    }
  }
  const b1 = [0];
  const _bind = raw.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const b = raw[_];
      _M0MPC15array5Array4pushGyE(b1, b);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (b1.length >= 4) {
    if (3 === 0) {
      $panic();
    }
    const full_blocks = Math.imul(b1.length / 3 | 0, 3) | 0;
    const b64 = _M0FP28Bobojy008moonyara23encode__base64__segment(b1, 0, full_blocks);
    if (b64.length > 2) {
      const chars = _M0MPC16string6String9to__array(b64);
      const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      let _tmp$2 = 2;
      while (true) {
        const k = _tmp$2;
        if (k < chars.length) {
          _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(chars, k));
          _tmp$2 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(patterns, _M0MPB13StringBuilder10to__string(sb));
    }
  }
  const b2 = [0, 0];
  const _bind$2 = raw.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const b = raw[_];
      _M0MPC15array5Array4pushGyE(b2, b);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (b2.length >= 5) {
    if (3 === 0) {
      $panic();
    }
    const full_blocks = Math.imul(b2.length / 3 | 0, 3) | 0;
    const b64 = _M0FP28Bobojy008moonyara23encode__base64__segment(b2, 0, full_blocks);
    if (b64.length > 3) {
      const chars = _M0MPC16string6String9to__array(b64);
      const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      let _tmp$3 = 3;
      while (true) {
        const k = _tmp$3;
        if (k < chars.length) {
          _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(chars, k));
          _tmp$3 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(patterns, _M0MPB13StringBuilder10to__string(sb));
    }
  }
  return patterns;
}
function _M0FP28Bobojy008moonyara14match__pattern(target_data, identifier, pattern) {
  const matches = [];
  const n = target_data.length;
  let s;
  let wide;
  _L: {
    _L$2: {
      let max_key;
      let s$2;
      let min_key;
      let wide$2;
      _L$3: {
        _L$4: {
          let nocase;
          let re_str;
          _L$5: {
            _L$6: {
              let nocase$2;
              let s$3;
              let wide$3;
              _L$7: {
                _L$8: {
                  let targets;
                  let masks;
                  _L$9: {
                    switch (pattern.$tag) {
                      case 1: {
                        const _Hex = pattern;
                        const _targets = _Hex._0;
                        const _masks = _Hex._1;
                        targets = _targets;
                        masks = _masks;
                        break _L$9;
                      }
                      case 0: {
                        const _Text = pattern;
                        const _s = _Text._0;
                        const _nocase = _Text._1;
                        const _wide = _Text._2;
                        nocase$2 = _nocase;
                        s$3 = _s;
                        wide$3 = _wide;
                        break _L$8;
                      }
                      case 2: {
                        const _Regex = pattern;
                        const _re_str = _Regex._0;
                        const _nocase$2 = _Regex._1;
                        nocase = _nocase$2;
                        re_str = _re_str;
                        break _L$6;
                      }
                      case 3: {
                        const _XorText = pattern;
                        const _s$2 = _XorText._0;
                        const _min_key = _XorText._1;
                        const _max_key = _XorText._2;
                        const _wide$2 = _XorText._3;
                        max_key = _max_key;
                        s$2 = _s$2;
                        min_key = _min_key;
                        wide$2 = _wide$2;
                        break _L$4;
                      }
                      default: {
                        const _Base64Text = pattern;
                        const _s$3 = _Base64Text._0;
                        const _wide$3 = _Base64Text._1;
                        s = _s$3;
                        wide = _wide$3;
                        break _L$2;
                      }
                    }
                  }
                  const m = targets.length;
                  if (m === 0 || m > n) {
                    return matches;
                  }
                  const limit = n - m | 0;
                  let _tmp = 0;
                  while (true) {
                    const i = _tmp;
                    if (i <= limit) {
                      const matched = new _M0TPB8MutLocalGbE(true);
                      let _tmp$2 = 0;
                      while (true) {
                        const j = _tmp$2;
                        if (j < m) {
                          const _tmp$3 = i + j | 0;
                          $bound_check(target_data, _tmp$3);
                          const b = target_data[_tmp$3];
                          const mask = _M0MPC15array5Array2atGyE(masks, j);
                          const target = _M0MPC15array5Array2atGyE(targets, j);
                          if ((b & mask) !== target) {
                            matched.val = false;
                            break;
                          }
                          _tmp$2 = j + 1 | 0;
                          continue;
                        } else {
                          break;
                        }
                      }
                      if (matched.val) {
                        const data = [];
                        let _tmp$3 = 0;
                        while (true) {
                          const k = _tmp$3;
                          if (k < m) {
                            const _tmp$4 = i + k | 0;
                            $bound_check(target_data, _tmp$4);
                            _M0MPC15array5Array4pushGyE(data, target_data[_tmp$4]);
                            _tmp$3 = k + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                        _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, i, m, data));
                      }
                      _tmp = i + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  break _L$7;
                }
                const pattern_bytes = wide$3 ? _M0FP28Bobojy008moonyara18build__wide__bytes(s$3) : _M0MPC15bytes5Bytes9to__array(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s$3, 0, s$3.length), false));
                const m = pattern_bytes.length;
                if (m === 0 || m > n) {
                  return matches;
                }
                const limit = n - m | 0;
                if (!wide$3 && m >= 3) {
                  const shift = $make_array_len_and_init(256, m);
                  if (nocase$2) {
                    const lower_pattern = _M0MPC15array5Array4makeGyE(m, 0);
                    let _tmp = 0;
                    while (true) {
                      const k = _tmp;
                      if (k < m) {
                        _M0MPC15array5Array3setGyE(lower_pattern, k, _M0FP28Bobojy008moonyara22ascii__to__lower__byte(_M0MPC15array5Array2atGyE(pattern_bytes, k)));
                        _tmp = k + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    let _tmp$2 = 0;
                    while (true) {
                      const k = _tmp$2;
                      if (k < (m - 1 | 0)) {
                        const b = _M0MPC15array5Array2atGyE(lower_pattern, k);
                        $bound_check(shift, b);
                        shift[b] = (m - 1 | 0) - k | 0;
                        if (b >= 97 && b <= 122) {
                          const _tmp$3 = b - 32 | 0;
                          $bound_check(shift, _tmp$3);
                          shift[_tmp$3] = (m - 1 | 0) - k | 0;
                        }
                        _tmp$2 = k + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    const i = new _M0TPB8MutLocalGiE(0);
                    while (true) {
                      if (i.val <= limit) {
                        const matched = new _M0TPB8MutLocalGbE(true);
                        let _tmp$3 = m - 1 | 0;
                        while (true) {
                          const j = _tmp$3;
                          if (j >= 0) {
                            const _tmp$4 = i.val + j | 0;
                            $bound_check(target_data, _tmp$4);
                            const b1 = _M0FP28Bobojy008moonyara22ascii__to__lower__byte(target_data[_tmp$4]);
                            if (b1 !== _M0MPC15array5Array2atGyE(lower_pattern, j)) {
                              matched.val = false;
                              break;
                            }
                            _tmp$3 = j - 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                        if (matched.val) {
                          const data = [];
                          let _tmp$4 = 0;
                          while (true) {
                            const k = _tmp$4;
                            if (k < m) {
                              const _tmp$5 = i.val + k | 0;
                              $bound_check(target_data, _tmp$5);
                              _M0MPC15array5Array4pushGyE(data, target_data[_tmp$5]);
                              _tmp$4 = k + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, i.val, m, data));
                        }
                        const _tmp$4 = (i.val + m | 0) - 1 | 0;
                        $bound_check(target_data, _tmp$4);
                        const last_byte = target_data[_tmp$4];
                        $bound_check(shift, last_byte);
                        const step = shift[last_byte];
                        i.val = i.val + (step <= 0 ? 1 : step) | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  } else {
                    let _tmp = 0;
                    while (true) {
                      const k = _tmp;
                      if (k < (m - 1 | 0)) {
                        const b = _M0MPC15array5Array2atGyE(pattern_bytes, k);
                        $bound_check(shift, b);
                        shift[b] = (m - 1 | 0) - k | 0;
                        _tmp = k + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    const i = new _M0TPB8MutLocalGiE(0);
                    while (true) {
                      if (i.val <= limit) {
                        const matched = new _M0TPB8MutLocalGbE(true);
                        let _tmp$2 = m - 1 | 0;
                        while (true) {
                          const j = _tmp$2;
                          if (j >= 0) {
                            const _tmp$3 = i.val + j | 0;
                            $bound_check(target_data, _tmp$3);
                            if (target_data[_tmp$3] !== _M0MPC15array5Array2atGyE(pattern_bytes, j)) {
                              matched.val = false;
                              break;
                            }
                            _tmp$2 = j - 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                        if (matched.val) {
                          const data = [];
                          let _tmp$3 = 0;
                          while (true) {
                            const k = _tmp$3;
                            if (k < m) {
                              const _tmp$4 = i.val + k | 0;
                              $bound_check(target_data, _tmp$4);
                              _M0MPC15array5Array4pushGyE(data, target_data[_tmp$4]);
                              _tmp$3 = k + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, i.val, m, data));
                        }
                        const _tmp$3 = (i.val + m | 0) - 1 | 0;
                        $bound_check(target_data, _tmp$3);
                        const last_byte = target_data[_tmp$3];
                        $bound_check(shift, last_byte);
                        const step = shift[last_byte];
                        i.val = i.val + (step <= 0 ? 1 : step) | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                } else {
                  let _tmp = 0;
                  while (true) {
                    const i = _tmp;
                    if (i <= limit) {
                      const matched = new _M0TPB8MutLocalGbE(true);
                      if (nocase$2) {
                        let _tmp$2 = 0;
                        while (true) {
                          const j = _tmp$2;
                          if (j < m) {
                            const _tmp$3 = i + j | 0;
                            $bound_check(target_data, _tmp$3);
                            const b1 = _M0FP28Bobojy008moonyara22ascii__to__lower__byte(target_data[_tmp$3]);
                            const b2 = _M0FP28Bobojy008moonyara22ascii__to__lower__byte(_M0MPC15array5Array2atGyE(pattern_bytes, j));
                            if (b1 !== b2) {
                              matched.val = false;
                              break;
                            }
                            _tmp$2 = j + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      } else {
                        let _tmp$2 = 0;
                        while (true) {
                          const j = _tmp$2;
                          if (j < m) {
                            const _tmp$3 = i + j | 0;
                            $bound_check(target_data, _tmp$3);
                            if (target_data[_tmp$3] !== _M0MPC15array5Array2atGyE(pattern_bytes, j)) {
                              matched.val = false;
                              break;
                            }
                            _tmp$2 = j + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      }
                      if (matched.val) {
                        const data = [];
                        let _tmp$2 = 0;
                        while (true) {
                          const k = _tmp$2;
                          if (k < m) {
                            const _tmp$3 = i + k | 0;
                            $bound_check(target_data, _tmp$3);
                            _M0MPC15array5Array4pushGyE(data, target_data[_tmp$3]);
                            _tmp$2 = k + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                        _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, new _M0TP28Bobojy008moonyara11StringMatch(identifier, i, m, data));
                      }
                      _tmp = i + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
              }
              break _L$5;
            }
            let re;
            let _try_err;
            _L$7: {
              _L$8: {
                const _bind = _M0FP28Bobojy008moonyara22compile__regex_2einner(re_str, nocase);
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  re = _ok._0;
                } else {
                  const _err = _bind;
                  _try_err = _err._0;
                  break _L$8;
                }
                break _L$7;
              }
              return matches;
            }
            return _M0FP28Bobojy008moonyara16scan__all__regex(re, target_data, identifier);
          }
          break _L$3;
        }
        const base_bytes = wide$2 ? _M0FP28Bobojy008moonyara18build__wide__bytes(s$2) : _M0MPC15bytes5Bytes9to__array(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s$2, 0, s$2.length), false));
        const m = base_bytes.length;
        if (m === 0 || m > n) {
          return matches;
        }
        const low = min_key < 0 ? 0 : min_key;
        const high = max_key > 255 ? 255 : max_key;
        let _tmp = low;
        while (true) {
          const key = _tmp;
          if (key <= high) {
            const xor_bytes = _M0MPC15array5Array4makeGyE(m, 0);
            let _tmp$2 = 0;
            while (true) {
              const j = _tmp$2;
              if (j < m) {
                _M0MPC15array5Array3setGyE(xor_bytes, j, (_M0MPC15array5Array2atGyE(base_bytes, j) ^ key) & 255);
                _tmp$2 = j + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const sub = _M0FP28Bobojy008moonyara19match__exact__bytes(target_data, xor_bytes, identifier);
            const _bind = sub.length;
            let _tmp$3 = 0;
            while (true) {
              const _ = _tmp$3;
              if (_ < _bind) {
                const sm = sub[_];
                _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, sm);
                _tmp$3 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp = key + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      break _L;
    }
    const b64_strs = _M0FP28Bobojy008moonyara26generate__base64__patterns(s);
    const _bind = b64_strs.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const b64 = b64_strs[_];
        const pattern_bytes = wide ? _M0FP28Bobojy008moonyara18build__wide__bytes(b64) : _M0MPC15bytes5Bytes9to__array(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(b64, 0, b64.length), false));
        const sub = _M0FP28Bobojy008moonyara19match__exact__bytes(target_data, pattern_bytes, identifier);
        const _bind$2 = sub.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$2) {
            const sm = sub[_$2];
            _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matches, sm);
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return matches;
}
function _M0FP28Bobojy008moonyara20match__rule__strings(target_data, strings) {
  const _bind = [];
  const results = _M0MPB3Map3MapGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(new _M0TPB9ArrayViewGUsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEEE(_bind, 0, 0), undefined);
  const _bind$2 = strings.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const str_def = strings[_];
      const matches = _M0FP28Bobojy008moonyara14match__pattern(target_data, str_def.identifier, str_def.pattern);
      _M0MPB3Map3setGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(results, str_def.identifier, matches);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return results;
}
function _M0MP28Bobojy008moonyara9EvalValue8as__bool(self) {
  let i;
  _L: {
    if (self.$tag === 0) {
      const _VBool = self;
      const _b = _VBool._0;
      return _b;
    } else {
      const _VInt = self;
      const _i = _VInt._0;
      i = _i;
      break _L;
    }
  }
  return i !== 0;
}
function _M0MP28Bobojy008moonyara9EvalValue7as__int(self) {
  let b;
  _L: {
    if (self.$tag === 1) {
      const _VInt = self;
      const _i = _VInt._0;
      return _i;
    } else {
      const _VBool = self;
      const _b = _VBool._0;
      b = _b;
      break _L;
    }
  }
  return b ? 1 : 0;
}
function _M0FP28Bobojy008moonyara8read__u8(bytes, offset) {
  if (offset < 0 || offset >= bytes.length) {
    return -1;
  } else {
    $bound_check(bytes, offset);
    return bytes[offset];
  }
}
function _M0FP28Bobojy008moonyara13read__u16__le(bytes, offset) {
  if (offset < 0 || (offset + 2 | 0) > bytes.length) {
    return -1;
  } else {
    $bound_check(bytes, offset);
    const b0 = bytes[offset];
    const _tmp = offset + 1 | 0;
    $bound_check(bytes, _tmp);
    const b1 = bytes[_tmp];
    return b0 | b1 << 8;
  }
}
function _M0FP28Bobojy008moonyara13read__u16__be(bytes, offset) {
  if (offset < 0 || (offset + 2 | 0) > bytes.length) {
    return -1;
  } else {
    $bound_check(bytes, offset);
    const b0 = bytes[offset];
    const _tmp = offset + 1 | 0;
    $bound_check(bytes, _tmp);
    const b1 = bytes[_tmp];
    return b0 << 8 | b1;
  }
}
function _M0FP28Bobojy008moonyara13read__u32__le(bytes, offset) {
  if (offset < 0 || (offset + 4 | 0) > bytes.length) {
    return -1;
  } else {
    $bound_check(bytes, offset);
    const b0 = bytes[offset];
    const _tmp = offset + 1 | 0;
    $bound_check(bytes, _tmp);
    const b1 = bytes[_tmp];
    const _tmp$2 = offset + 2 | 0;
    $bound_check(bytes, _tmp$2);
    const b2 = bytes[_tmp$2];
    const _tmp$3 = offset + 3 | 0;
    $bound_check(bytes, _tmp$3);
    const b3 = bytes[_tmp$3];
    return b0 | b1 << 8 | b2 << 16 | b3 << 24;
  }
}
function _M0FP28Bobojy008moonyara13read__u32__be(bytes, offset) {
  if (offset < 0 || (offset + 4 | 0) > bytes.length) {
    return -1;
  } else {
    $bound_check(bytes, offset);
    const b0 = bytes[offset];
    const _tmp = offset + 1 | 0;
    $bound_check(bytes, _tmp);
    const b1 = bytes[_tmp];
    const _tmp$2 = offset + 2 | 0;
    $bound_check(bytes, _tmp$2);
    const b2 = bytes[_tmp$2];
    const _tmp$3 = offset + 3 | 0;
    $bound_check(bytes, _tmp$3);
    const b3 = bytes[_tmp$3];
    return b0 << 24 | b1 << 16 | b2 << 8 | b3;
  }
}
function _M0FP28Bobojy008moonyara18normalize__var__id(id) {
  let _tmp;
  if (id.length > 0) {
    let _tmp$2;
    $bound_check(id, 0);
    if (_M0IPC16uint166UInt16PB2Eq5equal(id.charCodeAt(0), 35)) {
      _tmp$2 = true;
    } else {
      $bound_check(id, 0);
      _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(id.charCodeAt(0), 64);
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return `$${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(id, 1, undefined))}`;
  } else {
    return id;
  }
}
function _M0FP28Bobojy008moonyara10eval__expr(expr, ctx) {
  let id;
  _L: {
    let offset_expr;
    _L$2: {
      let offset_expr$2;
      _L$3: {
        let offset_expr$3;
        _L$4: {
          let offset_expr$4;
          _L$5: {
            let offset_expr$5;
            _L$6: {
              let n_expr;
              let set;
              _L$7: {
                let n_expr$2;
                _L$8: {
                  let start_expr;
                  let id$2;
                  let end_expr;
                  _L$9: {
                    let id$3;
                    let offset_expr$6;
                    _L$10: {
                      let left;
                      let right;
                      _L$11: {
                        let left$2;
                        let right$2;
                        _L$12: {
                          let left$3;
                          let right$3;
                          _L$13: {
                            let left$4;
                            let right$4;
                            _L$14: {
                              let left$5;
                              let right$5;
                              _L$15: {
                                let left$6;
                                let right$6;
                                _L$16: {
                                  let left$7;
                                  let right$7;
                                  _L$17: {
                                    let left$8;
                                    let right$8;
                                    _L$18: {
                                      let sub;
                                      _L$19: {
                                        let id$4;
                                        _L$20: {
                                          let id$5;
                                          _L$21: {
                                            let i;
                                            _L$22: {
                                              switch (expr.$tag) {
                                                case 0: {
                                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(true);
                                                }
                                                case 1: {
                                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(false);
                                                }
                                                case 2: {
                                                  const _IntLit = expr;
                                                  const _i = _IntLit._0;
                                                  i = _i;
                                                  break _L$22;
                                                }
                                                case 5: {
                                                  return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(ctx.target_size);
                                                }
                                                case 3: {
                                                  const _StringId = expr;
                                                  const _id = _StringId._0;
                                                  id$5 = _id;
                                                  break _L$21;
                                                }
                                                case 4: {
                                                  const _MatchCount = expr;
                                                  const _id$2 = _MatchCount._0;
                                                  id$4 = _id$2;
                                                  break _L$20;
                                                }
                                                case 6: {
                                                  const _Not = expr;
                                                  const _sub = _Not._0;
                                                  sub = _sub;
                                                  break _L$19;
                                                }
                                                case 7: {
                                                  const _And = expr;
                                                  const _left = _And._0;
                                                  const _right = _And._1;
                                                  left$8 = _left;
                                                  right$8 = _right;
                                                  break _L$18;
                                                }
                                                case 8: {
                                                  const _Or = expr;
                                                  const _left$2 = _Or._0;
                                                  const _right$2 = _Or._1;
                                                  left$7 = _left$2;
                                                  right$7 = _right$2;
                                                  break _L$17;
                                                }
                                                case 9: {
                                                  const _Eq = expr;
                                                  const _left$3 = _Eq._0;
                                                  const _right$3 = _Eq._1;
                                                  left$6 = _left$3;
                                                  right$6 = _right$3;
                                                  break _L$16;
                                                }
                                                case 10: {
                                                  const _Neq = expr;
                                                  const _left$4 = _Neq._0;
                                                  const _right$4 = _Neq._1;
                                                  left$5 = _left$4;
                                                  right$5 = _right$4;
                                                  break _L$15;
                                                }
                                                case 11: {
                                                  const _Lt = expr;
                                                  const _left$5 = _Lt._0;
                                                  const _right$5 = _Lt._1;
                                                  left$4 = _left$5;
                                                  right$4 = _right$5;
                                                  break _L$14;
                                                }
                                                case 12: {
                                                  const _Lte = expr;
                                                  const _left$6 = _Lte._0;
                                                  const _right$6 = _Lte._1;
                                                  left$3 = _left$6;
                                                  right$3 = _right$6;
                                                  break _L$13;
                                                }
                                                case 13: {
                                                  const _Gt = expr;
                                                  const _left$7 = _Gt._0;
                                                  const _right$7 = _Gt._1;
                                                  left$2 = _left$7;
                                                  right$2 = _right$7;
                                                  break _L$12;
                                                }
                                                case 14: {
                                                  const _Gte = expr;
                                                  const _left$8 = _Gte._0;
                                                  const _right$8 = _Gte._1;
                                                  left = _left$8;
                                                  right = _right$8;
                                                  break _L$11;
                                                }
                                                case 15: {
                                                  const _At = expr;
                                                  const _id$3 = _At._0;
                                                  const _offset_expr = _At._1;
                                                  id$3 = _id$3;
                                                  offset_expr$6 = _offset_expr;
                                                  break _L$10;
                                                }
                                                case 16: {
                                                  const _In = expr;
                                                  const _id$4 = _In._0;
                                                  const _start_expr = _In._1;
                                                  const _end_expr = _In._2;
                                                  start_expr = _start_expr;
                                                  id$2 = _id$4;
                                                  end_expr = _end_expr;
                                                  break _L$9;
                                                }
                                                case 17: {
                                                  const any_matched = new _M0TPB8MutLocalGbE(false);
                                                  const _bind = ctx.all_strings;
                                                  const _bind$2 = _bind.length;
                                                  let _tmp = 0;
                                                  while (true) {
                                                    const _ = _tmp;
                                                    if (_ < _bind$2) {
                                                      const str_def = _bind[_];
                                                      let arr;
                                                      _L$23: {
                                                        _L$24: {
                                                          const _bind$3 = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, str_def.identifier);
                                                          if (_bind$3.$tag === 1) {
                                                            const _Some = _bind$3;
                                                            const _arr = _Some._0;
                                                            if (_arr.length > 0) {
                                                              arr = _arr;
                                                              break _L$24;
                                                            }
                                                          }
                                                          break _L$23;
                                                        }
                                                        any_matched.val = true;
                                                        break;
                                                      }
                                                      _tmp = _ + 1 | 0;
                                                      continue;
                                                    } else {
                                                      break;
                                                    }
                                                  }
                                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(any_matched.val);
                                                }
                                                case 18: {
                                                  const all_matched = new _M0TPB8MutLocalGbE(true);
                                                  const _bind$3 = ctx.all_strings;
                                                  const _bind$4 = _bind$3.length;
                                                  let _tmp$2 = 0;
                                                  while (true) {
                                                    const _ = _tmp$2;
                                                    if (_ < _bind$4) {
                                                      const str_def = _bind$3[_];
                                                      _L$23: {
                                                        _L$24: {
                                                          let arr;
                                                          _L$25: {
                                                            const _bind$5 = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, str_def.identifier);
                                                            if (_bind$5.$tag === 1) {
                                                              const _Some = _bind$5;
                                                              const _arr = _Some._0;
                                                              if (_arr.length > 0) {
                                                                arr = _arr;
                                                                break _L$25;
                                                              } else {
                                                                break _L$24;
                                                              }
                                                            } else {
                                                              break _L$24;
                                                            }
                                                          }
                                                          break _L$23;
                                                        }
                                                        all_matched.val = false;
                                                        break;
                                                      }
                                                      _tmp$2 = _ + 1 | 0;
                                                      continue;
                                                    } else {
                                                      break;
                                                    }
                                                  }
                                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(all_matched.val);
                                                }
                                                case 19: {
                                                  const _NumOfThem = expr;
                                                  const _n_expr = _NumOfThem._0;
                                                  n_expr$2 = _n_expr;
                                                  break _L$8;
                                                }
                                                case 20: {
                                                  const _NumOfSet = expr;
                                                  const _n_expr$2 = _NumOfSet._0;
                                                  const _set = _NumOfSet._1;
                                                  n_expr = _n_expr$2;
                                                  set = _set;
                                                  break _L$7;
                                                }
                                                case 21: {
                                                  const _Uint8 = expr;
                                                  const _offset_expr$2 = _Uint8._0;
                                                  offset_expr$5 = _offset_expr$2;
                                                  break _L$6;
                                                }
                                                case 22: {
                                                  const _Uint16 = expr;
                                                  const _offset_expr$3 = _Uint16._0;
                                                  offset_expr$4 = _offset_expr$3;
                                                  break _L$5;
                                                }
                                                case 23: {
                                                  const _Uint16Be = expr;
                                                  const _offset_expr$4 = _Uint16Be._0;
                                                  offset_expr$3 = _offset_expr$4;
                                                  break _L$4;
                                                }
                                                case 24: {
                                                  const _Uint32 = expr;
                                                  const _offset_expr$5 = _Uint32._0;
                                                  offset_expr$2 = _offset_expr$5;
                                                  break _L$3;
                                                }
                                                case 25: {
                                                  const _Uint32Be = expr;
                                                  const _offset_expr$6 = _Uint32Be._0;
                                                  offset_expr = _offset_expr$6;
                                                  break _L$2;
                                                }
                                                default: {
                                                  const _MatchOffset = expr;
                                                  const _id$5 = _MatchOffset._0;
                                                  id = _id$5;
                                                  break _L;
                                                }
                                              }
                                            }
                                            return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(i);
                                          }
                                          let arr;
                                          _L$22: {
                                            const _bind = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, id$5);
                                            if (_bind.$tag === 1) {
                                              const _Some = _bind;
                                              const _arr = _Some._0;
                                              arr = _arr;
                                              break _L$22;
                                            } else {
                                              return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(false);
                                            }
                                          }
                                          return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(arr.length > 0);
                                        }
                                        const var_id = _M0FP28Bobojy008moonyara18normalize__var__id(id$4);
                                        let arr;
                                        _L$21: {
                                          const _bind = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, var_id);
                                          if (_bind.$tag === 1) {
                                            const _Some = _bind;
                                            const _arr = _Some._0;
                                            arr = _arr;
                                            break _L$21;
                                          } else {
                                            return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(0);
                                          }
                                        }
                                        return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(arr.length);
                                      }
                                      return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(!_M0MP28Bobojy008moonyara9EvalValue8as__bool(_M0FP28Bobojy008moonyara10eval__expr(sub, ctx)));
                                    }
                                    return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue8as__bool(_M0FP28Bobojy008moonyara10eval__expr(left$8, ctx)) && _M0MP28Bobojy008moonyara9EvalValue8as__bool(_M0FP28Bobojy008moonyara10eval__expr(right$8, ctx)));
                                  }
                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue8as__bool(_M0FP28Bobojy008moonyara10eval__expr(left$7, ctx)) || _M0MP28Bobojy008moonyara9EvalValue8as__bool(_M0FP28Bobojy008moonyara10eval__expr(right$7, ctx)));
                                }
                                const lv = _M0FP28Bobojy008moonyara10eval__expr(left$6, ctx);
                                const rv = _M0FP28Bobojy008moonyara10eval__expr(right$6, ctx);
                                _L$17: {
                                  let a;
                                  let b;
                                  _L$18: {
                                    let a$2;
                                    let b$2;
                                    _L$19: {
                                      if (lv.$tag === 1) {
                                        const _VInt = lv;
                                        const _a = _VInt._0;
                                        if (rv.$tag === 1) {
                                          const _VInt$2 = rv;
                                          const _b = _VInt$2._0;
                                          a$2 = _a;
                                          b$2 = _b;
                                          break _L$19;
                                        } else {
                                          break _L$17;
                                        }
                                      } else {
                                        const _VBool = lv;
                                        const _a = _VBool._0;
                                        if (rv.$tag === 0) {
                                          const _VBool$2 = rv;
                                          const _b = _VBool$2._0;
                                          a = _a;
                                          b = _b;
                                          break _L$18;
                                        } else {
                                          break _L$17;
                                        }
                                      }
                                    }
                                    return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(a$2 === b$2);
                                  }
                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(a === b);
                                }
                                return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue7as__int(lv) === _M0MP28Bobojy008moonyara9EvalValue7as__int(rv));
                              }
                              const lv = _M0FP28Bobojy008moonyara10eval__expr(left$5, ctx);
                              const rv = _M0FP28Bobojy008moonyara10eval__expr(right$5, ctx);
                              _L$16: {
                                let a;
                                let b;
                                _L$17: {
                                  let a$2;
                                  let b$2;
                                  _L$18: {
                                    if (lv.$tag === 1) {
                                      const _VInt = lv;
                                      const _a = _VInt._0;
                                      if (rv.$tag === 1) {
                                        const _VInt$2 = rv;
                                        const _b = _VInt$2._0;
                                        a$2 = _a;
                                        b$2 = _b;
                                        break _L$18;
                                      } else {
                                        break _L$16;
                                      }
                                    } else {
                                      const _VBool = lv;
                                      const _a = _VBool._0;
                                      if (rv.$tag === 0) {
                                        const _VBool$2 = rv;
                                        const _b = _VBool$2._0;
                                        a = _a;
                                        b = _b;
                                        break _L$17;
                                      } else {
                                        break _L$16;
                                      }
                                    }
                                  }
                                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(a$2 !== b$2);
                                }
                                return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0IP016_24default__implPB2Eq10not__equalGbE(a, b));
                              }
                              return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue7as__int(lv) !== _M0MP28Bobojy008moonyara9EvalValue7as__int(rv));
                            }
                            return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(left$4, ctx)) < _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(right$4, ctx)));
                          }
                          return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(left$3, ctx)) <= _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(right$3, ctx)));
                        }
                        return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(left$2, ctx)) > _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(right$2, ctx)));
                      }
                      return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(_M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(left, ctx)) >= _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(right, ctx)));
                    }
                    const expected_offset = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(offset_expr$6, ctx));
                    let arr;
                    _L$11: {
                      const _bind = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, id$3);
                      if (_bind.$tag === 1) {
                        const _Some = _bind;
                        const _arr = _Some._0;
                        arr = _arr;
                        break _L$11;
                      } else {
                        return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(false);
                      }
                    }
                    const found = new _M0TPB8MutLocalGbE(false);
                    const _bind = arr.length;
                    let _tmp = 0;
                    while (true) {
                      const _ = _tmp;
                      if (_ < _bind) {
                        const m = arr[_];
                        if (m.offset === expected_offset) {
                          found.val = true;
                          break;
                        }
                        _tmp = _ + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(found.val);
                  }
                  const s = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(start_expr, ctx));
                  const e = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(end_expr, ctx));
                  let arr;
                  _L$10: {
                    const _bind = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, id$2);
                    if (_bind.$tag === 1) {
                      const _Some = _bind;
                      const _arr = _Some._0;
                      arr = _arr;
                      break _L$10;
                    } else {
                      return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(false);
                    }
                  }
                  const found = new _M0TPB8MutLocalGbE(false);
                  const _bind = arr.length;
                  let _tmp = 0;
                  while (true) {
                    const _ = _tmp;
                    if (_ < _bind) {
                      const m = arr[_];
                      if (m.offset >= s && m.offset <= e) {
                        found.val = true;
                        break;
                      }
                      _tmp = _ + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(found.val);
                }
                const required = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(n_expr$2, ctx));
                const count = new _M0TPB8MutLocalGiE(0);
                const _bind = ctx.all_strings;
                const _bind$2 = _bind.length;
                let _tmp = 0;
                while (true) {
                  const _ = _tmp;
                  if (_ < _bind$2) {
                    const str_def = _bind[_];
                    let arr;
                    _L$9: {
                      _L$10: {
                        const _bind$3 = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, str_def.identifier);
                        if (_bind$3.$tag === 1) {
                          const _Some = _bind$3;
                          const _arr = _Some._0;
                          if (_arr.length > 0) {
                            arr = _arr;
                            break _L$10;
                          }
                        }
                        break _L$9;
                      }
                      count.val = count.val + 1 | 0;
                    }
                    _tmp = _ + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(count.val >= required);
              }
              const required = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(n_expr, ctx));
              const count = new _M0TPB8MutLocalGiE(0);
              const _bind = set.length;
              let _tmp = 0;
              while (true) {
                const _ = _tmp;
                if (_ < _bind) {
                  const id$2 = set[_];
                  let arr;
                  _L$8: {
                    _L$9: {
                      const _bind$2 = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, id$2);
                      if (_bind$2.$tag === 1) {
                        const _Some = _bind$2;
                        const _arr = _Some._0;
                        if (_arr.length > 0) {
                          arr = _arr;
                          break _L$9;
                        }
                      }
                      break _L$8;
                    }
                    count.val = count.val + 1 | 0;
                  }
                  _tmp = _ + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTP28Bobojy008moonyara9EvalValue5VBool(count.val >= required);
            }
            const off = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(offset_expr$5, ctx));
            return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(_M0FP28Bobojy008moonyara8read__u8(ctx.target_data, off));
          }
          const off = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(offset_expr$4, ctx));
          return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(_M0FP28Bobojy008moonyara13read__u16__le(ctx.target_data, off));
        }
        const off = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(offset_expr$3, ctx));
        return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(_M0FP28Bobojy008moonyara13read__u16__be(ctx.target_data, off));
      }
      const off = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(offset_expr$2, ctx));
      return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(_M0FP28Bobojy008moonyara13read__u32__le(ctx.target_data, off));
    }
    const off = _M0MP28Bobojy008moonyara9EvalValue7as__int(_M0FP28Bobojy008moonyara10eval__expr(offset_expr, ctx));
    return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(_M0FP28Bobojy008moonyara13read__u32__be(ctx.target_data, off));
  }
  const var_id = _M0FP28Bobojy008moonyara18normalize__var__id(id);
  _L$2: {
    let arr;
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(ctx.string_matches, var_id);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _arr = _Some._0;
        if (_arr.length > 0) {
          arr = _arr;
          break _L$3;
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
    }
    return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(_M0MPC15array5Array2atGRP28Bobojy008moonyara11StringMatchE(arr, 0).offset);
  }
  return new _M0DTP28Bobojy008moonyara9EvalValue4VInt(-1);
}
function _M0FP28Bobojy008moonyara15eval__condition(expr, ctx) {
  return _M0MP28Bobojy008moonyara9EvalValue8as__bool(_M0FP28Bobojy008moonyara10eval__expr(expr, ctx));
}
function _M0FP28Bobojy008moonyara7compile(source) {
  const _bind = _M0FP28Bobojy008moonyara26parse__rules__from__string(source);
  let rules;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    rules = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRP28Bobojy008moonyara6EngineRPC15error5ErrorE2Ok(new _M0TP28Bobojy008moonyara6Engine(rules));
}
function _M0MP28Bobojy008moonyara6Engine4scan(self, target_data) {
  const matched_rules = [];
  const n = target_data.length;
  const _bind = self.rules;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const rule = _bind[_];
      const match_map = _M0FP28Bobojy008moonyara20match__rule__strings(target_data, rule.strings);
      const ctx = new _M0TP28Bobojy008moonyara11EvalContext(target_data, n, match_map, rule.strings);
      const passed = _M0FP28Bobojy008moonyara15eval__condition(rule.condition, ctx);
      if (passed) {
        const matched_strings = [];
        const _bind$3 = rule.strings;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const str_def = _bind$3[_$2];
            let arr;
            _L: {
              _L$2: {
                const _bind$5 = _M0MPB3Map3getGsRPB5ArrayGRP28Bobojy008moonyara11StringMatchEE(match_map, str_def.identifier);
                if (_bind$5.$tag === 1) {
                  const _Some = _bind$5;
                  const _arr = _Some._0;
                  arr = _arr;
                  break _L$2;
                }
                break _L;
              }
              const _bind$5 = arr.length;
              let _tmp$3 = 0;
              while (true) {
                const _$3 = _tmp$3;
                if (_$3 < _bind$5) {
                  const m = arr[_$3];
                  _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matched_strings, m);
                  _tmp$3 = _$3 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGRP28Bobojy008moonyara11StringMatchE(matched_rules, new _M0TP28Bobojy008moonyara9RuleMatch(rule.name, rule.tags, rule.metas, matched_strings));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP28Bobojy008moonyara10ScanReport(n, matched_rules);
}
function _M0FP38Bobojy008moonyara4wasm20format__report__json(report) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\n");
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  \"size\": ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.target_size);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder));
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "  \"matches_count\": ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.matches.length);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder$2));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "  \"matches\": [\n");
  const first_rule = new _M0TPB8MutLocalGbE(true);
  const _bind = report.matches;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const m = _bind[_];
      if (!first_rule.val) {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\n");
      }
      first_rule.val = false;
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "    {\n");
      const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "      \"rule\": \"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, m.rule_name);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\",\n");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder$3));
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "      \"tags\": [");
      const first_tag = new _M0TPB8MutLocalGbE(true);
      const _bind$3 = m.tags;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const tag = _bind$3[_$2];
          if (!first_tag.val) {
            _M0IPB13StringBuilderPB6Logger13write__string(sb, ", ");
          }
          first_tag.val = false;
          const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\"");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, tag);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\"");
          _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder$4));
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\n");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "      \"strings\": [\n");
      const first_str = new _M0TPB8MutLocalGbE(true);
      const _bind$5 = m.matched_strings;
      const _bind$6 = _bind$5.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$6) {
          const sm = _bind$5[_$2];
          if (!first_str.val) {
            _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\n");
          }
          first_str.val = false;
          const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(44);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "        { \"id\": \"");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, sm.identifier);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\", \"offset\": ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, sm.offset);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ", \"length\": ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, sm.length);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, " }");
          _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder$4));
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "\n      ]\n");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "    }");
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "\n  ]\n}");
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP38Bobojy008moonyara4wasm17parse__hex__bytes(hex) {
  const buf = [];
  const current_nibble = new _M0TPB8MutLocalGOiE(undefined);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < hex.length) {
      $bound_check(hex, i);
      const c = hex.charCodeAt(i);
      const nibble = c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? (c - 97 | 0) + 10 | 0 : c >= 65 && c <= 70 ? (c - 65 | 0) + 10 | 0 : undefined;
      let n;
      _L: {
        _L$2: {
          if (nibble === undefined) {
          } else {
            const _Some = nibble;
            const _n = _Some;
            n = _n;
            break _L$2;
          }
          break _L;
        }
        let high;
        _L$3: {
          _L$4: {
            const _bind = current_nibble.val;
            if (_bind === undefined) {
              current_nibble.val = n;
            } else {
              const _Some = _bind;
              const _high = _Some;
              high = _high;
              break _L$4;
            }
            break _L$3;
          }
          _M0MPC15array5Array4pushGyE(buf, (high << 4 | n) & 255);
          current_nibble.val = undefined;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(buf, 0, buf.length));
}
function _M0FP38Bobojy008moonyara4wasm20scan__text__to__json(rule_src, sample_text) {
  let engine;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP28Bobojy008moonyara7compile(rule_src);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        engine = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const err = _try_err;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"error\": \"Failed to compile rules: ");
    _M0MPB13StringBuilder13write__objectGRPC15error5ErrorE(_string_builder, err);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"}");
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
  const sample_bytes = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(sample_text, 0, sample_text.length), false);
  const report = _M0MP28Bobojy008moonyara6Engine4scan(engine, sample_bytes);
  return _M0FP38Bobojy008moonyara4wasm20format__report__json(report);
}
function _M0FP38Bobojy008moonyara4wasm19scan__hex__to__json(rule_src, hex_str) {
  let engine;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP28Bobojy008moonyara7compile(rule_src);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        engine = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const err = _try_err;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"error\": \"Failed to compile rules: ");
    _M0MPB13StringBuilder13write__objectGRPC15error5ErrorE(_string_builder, err);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"}");
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
  const sample_bytes = _M0FP38Bobojy008moonyara4wasm17parse__hex__bytes(hex_str);
  const report = _M0MP28Bobojy008moonyara6Engine4scan(engine, sample_bytes);
  return _M0FP38Bobojy008moonyara4wasm20format__report__json(report);
}
function _M0FP38Bobojy008moonyara4wasm19check__rule__syntax(rule_src) {
  let _try_err;
  _L: {
    const _bind = _M0FP28Bobojy008moonyara7compile(rule_src);
    let engine;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      engine = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return engine.rules.length;
  }
  return -1;
}
function _M0FP38Bobojy008moonyara4wasm14count__matches(rule_src, sample_text) {
  let _try_err;
  _L: {
    const _bind = _M0FP28Bobojy008moonyara7compile(rule_src);
    let engine;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      engine = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const sample_bytes = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(sample_text, 0, sample_text.length), false);
    const report = _M0MP28Bobojy008moonyara6Engine4scan(engine, sample_bytes);
    return report.matches.length;
  }
  return -1;
}
export { _M0FP38Bobojy008moonyara4wasm20scan__text__to__json as scan_text_to_json, _M0FP38Bobojy008moonyara4wasm19scan__hex__to__json as scan_hex_to_json, _M0FP38Bobojy008moonyara4wasm19check__rule__syntax as check_rule_syntax, _M0FP38Bobojy008moonyara4wasm14count__matches as count_matches }
//# sourceMappingURL=wasm.js.map
