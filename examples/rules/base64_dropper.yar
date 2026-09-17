rule Base64_Embedded_Executable_Payload : dropper obfuscation {
    meta:
        description = "Detects Base64-encoded PE executable artifacts and stagers regardless of alignment"
        author = "SecurityAnalyst"
        severity = "critical"
    strings:
        $pe_msg = "This program cannot be run in DOS mode" base64
        $bypass = "ExecutionPolicy Bypass" base64
        $download = "DownloadString" base64
    condition:
        $pe_msg or ($bypass and $download)
}
