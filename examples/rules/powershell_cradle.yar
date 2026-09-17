rule Suspicious_PowerShell_Cradle {
    meta:
        description = "Detects obfuscated PowerShell download cradles and encoded execution"
        author = "moonyara"
        severity = "high"
    strings:
        $ps_invoke = /powershell(\.exe)?\s+(-(no)?p(rofile)?\s+)?(-w(indowstyle)?\s+hidden\s+)?-e(nc(odedcommand)?)?\s+[A-Za-z0-9+/=]+/ nocase
        $webclient = /New-Object\s+Net\.WebClient/ nocase
        $download_method = /\.(DownloadString|DownloadFile)\s*\(\s*['"]https?:\/\// nocase
        $iex = /IEX\s*\(\s*New-Object/ nocase
    condition:
        $ps_invoke or ($webclient and $download_method) or $iex
}
