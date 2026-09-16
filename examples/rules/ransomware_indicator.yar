rule Ransomware_Note_Indicator : ransomware crypto threat {
    meta:
        description = "Detects characteristic ransom payment instructions and extortion demands"
        author = "SecurityAnalyst"
        severity = "high"
    strings:
        $header = "YOUR FILES HAVE BEEN ENCRYPTED" nocase
        $btc = "bitcoin" nocase
        $monero = "monero" nocase
        $onion = ".onion" nocase
        $decrypt = "decrypt" nocase
    condition:
        $header and ($btc or $monero or $onion) and $decrypt
}
