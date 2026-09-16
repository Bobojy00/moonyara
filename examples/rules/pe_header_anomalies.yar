rule PE_DOS_Header_Anomaly : pe binary header {
    meta:
        description = "Identifies Windows Portable Executable DOS MZ header with typical signature offset"
        author = "SecurityAnalyst"
        severity = "medium"
    strings:
        $mz = { 4D 5A }
        $pe_magic = { 50 45 00 00 }
    condition:
        $mz at 0 and $pe_magic
}
