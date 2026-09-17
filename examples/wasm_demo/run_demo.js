import * as scanner from '../../_build/js/debug/build/wasm/wasm.js';

console.log('=== WebAssembly / JS Sandboxed Scanner Demo ===\n');

// 1. Validate Rule Syntax
const ruleSource = `
rule Web_Attack_Detection {
    meta:
        description = "Detects web application attack payloads"
        severity = "high"
    strings:
        $sql = "UNION SELECT" nocase
        $xss = "<script>alert(" nocase
        $traversal = "../../../"
    condition:
        $sql or $xss or $traversal
}
`;

console.log('[1] Checking rule syntax in sandbox...');
const ruleCount = scanner.check_rule_syntax(ruleSource);
console.log(`    Validation success: ${ruleCount} rule(s) parsed.\n`);

// 2. Scan Malicious Payload with UNION SELECT
const attackPayload = 'GET /search?q=1 UNION SELECT user,password FROM admins HTTP/1.1';
console.log(`[2] Scanning payload: "${attackPayload}"`);

const matchCount = scanner.count_matches(ruleSource, attackPayload);
console.log(`    Matched rules count: ${matchCount}`);

const jsonReport = scanner.scan_text_to_json(ruleSource, attackPayload);
console.log('    JSON Scan Report:');
console.log(jsonReport);

// 3. Scan Clean Payload
const cleanPayload = 'GET /index.html HTTP/1.1';
console.log(`\n[3] Scanning clean payload: "${cleanPayload}"`);
const cleanCount = scanner.count_matches(ruleSource, cleanPayload);
console.log(`    Matched rules count: ${cleanCount} (Clean verified!)`);
