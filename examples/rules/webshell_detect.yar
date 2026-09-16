rule Suspicious_Webshell_PHP : webshell php backdoor {
    meta:
        description = "Detects PHP webshell artifacts and dangerous execution wrappers"
        author = "SecurityAnalyst"
        severity = "critical"
    strings:
        $tag = "<?php" nocase
        $eval = "eval(" nocase
        $b64 = "base64_decode(" nocase
        $sys = "system(" nocase
        $shell = "shell_exec(" nocase
        $post = "$_POST"
    condition:
        $tag at 0 and ($post and ($eval or $b64 or $sys or $shell))
}
