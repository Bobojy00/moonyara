rule PE_DOS_Header_Anomaly : pe binary header {
    meta:
        description = "Identifies Windows Portable Executable DOS MZ header using uint16 endian check"
        author = "SecurityAnalyst"
        severity = "medium"
    strings:
        $pe_magic = { 50 45 00 00 }
    condition:
        uint16(0) == 0x5A4D and $pe_magic
}
