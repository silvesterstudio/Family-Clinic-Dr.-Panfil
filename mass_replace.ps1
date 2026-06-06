Get-ChildItem -Path components -Filter *.tsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace '--color-brand-red', '--color-brand-teal'
    $content = $content -replace '--color-brand-navy', '--color-brand-black'
    $content = $content -replace '--color-brand-light', '--color-brand-grey'
    $content = $content -replace 'font-playfair', 'font-primary'
    $content = $content -replace 'font-inter', 'font-secondary'
    Set-Content -Path $_.FullName -Value $content -Encoding UTF8
}
