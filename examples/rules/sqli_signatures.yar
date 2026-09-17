rule SQL_Injection_Probe : web attack sqli {
    meta:
        description = "Detects common SQL injection and automated database fingerprinting payload patterns"
        author = "SecurityAnalyst"
        severity = "high"
    strings:
        $union_select = "UNION SELECT" nocase
        $sleep_func = "SLEEP(" nocase
        $benchmark_func = "BENCHMARK(" nocase
        $sqli_comment = "-- -"
        $sqlmap_marker = "sqlmap" nocase
    condition:
        $sqlmap_marker or ($union_select or $sleep_func or $benchmark_func or $sqli_comment)
}
