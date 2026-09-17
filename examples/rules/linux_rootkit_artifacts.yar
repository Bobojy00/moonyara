rule Linux_Rootkit_Preload : rootkit linux elf {
    meta:
        description = "Detects Linux ELF binaries attempting dynamic loader hijacking or shm payload execution"
        author = "SecurityAnalyst"
        severity = "critical"
    strings:
        $elf_magic = { 7F 45 4C 46 }
        $preload_path = "/etc/ld.so.preload"
        $shm_path = "/dev/shm"
    condition:
        $elf_magic at 0 and ($preload_path or $shm_path)
}
