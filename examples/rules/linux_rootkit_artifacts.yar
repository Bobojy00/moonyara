rule Linux_Rootkit_Preload : rootkit linux elf {
    meta:
        description = "Detects Linux ELF binaries attempting dynamic loader hijacking or shm payload execution"
        author = "SecurityAnalyst"
        severity = "critical"
    strings:
        $preload_path = "/etc/ld.so.preload"
        $shm_path = "/dev/shm"
    condition:
        uint32(0) == 0x464C457F and ($preload_path or $shm_path)
}
