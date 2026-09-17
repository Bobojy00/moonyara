rule C2_Beacon_HTTP_Traffic {
    meta:
        description = "Detects suspicious C2 beacon headers and HTTP user-agents"
        author = "moonyara"
        severity = "critical"
    strings:
        $ua_suspicious = /User-Agent:\s*(Mozilla\/5\.0\s+\(Windows\s+NT\s+6\.1\)|curl\/\d+\.\d+|python-requests\/\d+\.\d+)/ nocase
        $cookie_session = /Cookie:\s*session=[a-f0-9]+/ nocase
        $c2_uri = /GET\s+\/(api\/v[12]\/tasks|beacon\/heartbeat|pixel\.gif)\?[a-zA-Z0-9_=-]+/ nocase
    condition:
        $c2_uri and ($ua_suspicious or $cookie_session)
}
