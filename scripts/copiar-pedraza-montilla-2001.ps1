$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\Exposición Galería José Pedraza. Montilla 2001"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "009animal.JPG" = "2001-animal.jpg"
    "012sumiso.JPG" = "2001-sumiso.jpg"
    "013cronica.JPG" = "2001-cronica.jpg"
    "014tercio de varas.JPG" = "2001-tercio-de-varas.jpg"
    "015alegoria taurina.JPG" = "2001-alegoria-taurina.jpg"
    "016cogida.JPG" = "2001-cogida.jpg"
    "027desconexion.JPG" = "2001-desconexion.jpg"
    "028descanso I.JPG" = "2001-descanso-i.jpg"
    "029descanso II.JPG" = "2001-descanso-ii.jpg"
    "033entre flores raras I.JPG" = "2001-entre-flores-raras-i.jpg"
    "034entre flores raras II.JPG" = "2001-entre-flores-raras-ii.jpg"
    "035sin mas.JPG" = "2001-sin-mas.jpg"
    "036metamorfosis II.JPG" = "2001-metamorfosis-ii.jpg"
    "037engendro.JPG" = "2001-engendro.jpg"
    "038despojo.JPG" = "2001-despojo.jpg"
    "039efimeras.JPG" = "2001-efimeras.jpg"
    "042bodegon II.JPG" = "2001-bodegon-ii.jpg"
    "045algunos frutos.JPG" = "2001-algunos-frutos.jpg"
    "047santaella.JPG" = "2001-santaella.jpg"
    "048nocturno.JPG" = "2001-nocturno.jpg"
    "049ribera.JPG" = "2001-ribera.jpg"
    "050espesura.JPG" = "2001-espesura.jpg"
}

$copiados = 0
foreach ($archivo in $mapeo.Keys) {
    $rutaOrigen = Join-Path $origen $archivo
    $rutaDestino = Join-Path $destino $mapeo[$archivo]
    if (Test-Path $rutaOrigen) {
        Copy-Item -Path $rutaOrigen -Destination $rutaDestino -Force
        Write-Host "Copiado: $archivo" -ForegroundColor Green
        $copiados++
    } else {
        Write-Host "NO ENCONTRADO: $archivo" -ForegroundColor Red
    }
}
Write-Host "Total copiados: $copiados de $($mapeo.Count)" -ForegroundColor Cyan