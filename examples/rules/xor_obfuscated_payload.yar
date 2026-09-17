rule XOR_Encoded_WinAPI_Stager : trojan obfuscation {
    meta:
        description = "Detects obfuscated payloads using single-byte XOR encoding on critical API strings"
        author = "SecurityAnalyst"
        severity = "high"
    strings:
        $virtual_alloc = "VirtualAlloc" xor(0x01-0xff)
        $create_thread = "CreateThread" xor(0x01-0xff)
        $win_exec = "WinExec" xor(0x01-0xff)
    condition:
        any of them
}
