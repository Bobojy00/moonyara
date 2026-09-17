# PowerShell Stage-1 Dropper Emulation
$stage2_blob = "UHJlZml4X1VucmVsYXRlZF9CeXRlc19UaGlzIHByb2dyYW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZV9TdWZmaXg="
$decompressed = [System.Convert]::FromBase64String($stage2_blob)
Write-Output "Decompressing payload: $($decompressed.Length) bytes"
