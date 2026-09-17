rule Cobalt_Strike_Beacon_Memory : c2 beacon memory {
    meta:
        description = "Detects Cobalt Strike / Metasploit beacon pipe names and memory artifacts"
        author = "SecurityAnalyst"
        severity = "critical"
    strings:
        $pipe1 = "\\\\.\\pipe\\msagent_" nocase
        $pipe2 = "\\\\.\\pipe\\status_" nocase
        $user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101"
    condition:
        $pipe1 or $pipe2 or $user_agent
}
