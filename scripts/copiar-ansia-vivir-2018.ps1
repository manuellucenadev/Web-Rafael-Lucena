$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\El ansia de vivir - 2018\Obras"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "Abandonadas a su suerte 89 x 146 cm.jpg" = "2018-abandonadas-a-su-suerte.jpg"
    "Aferrada I 38 x 55 cm.jpg" = "2018-aferrada-i.jpg"
    "Aferrada II 33 x 41 cm.jpg" = "2018-aferrada-ii.jpg"
    "Al final del tunel II 55 x 38 cm.jpg" = "2018-al-final-del-tunel-ii.jpg"
    "Al final del túnel I 40 x 30 cm.jpg" = "2018-al-final-del-tunel-i.jpg"
    "Arterias-Arterías 50 x 110 cm.jpg" = "2018-arterias.jpg"
    "Cuidado, no pisar 27 x 41 cm.jpg" = "2018-cuidado-no-pisar.jpg"
    "En condiciones extremas 100 x 65 cm.jpg" = "2018-en-condiciones-extremas.jpg"
    "Erupción de vida I 30 x 24 cm.jpg" = "2018-erupcion-de-vida-i.jpg"
    "Erupción de vida II 24 x 18 cm.jpg" = "2018-erupcion-de-vida-ii.jpg"
    "Irene y Fran 38 x 55 cm.jpg" = "2018-irene-y-fran.jpg"
    "La grieta 81 x 54 cm.jpg" = "2018-la-grieta.jpg"
    "Lazos rotos 38 x 46 cm.jpg" = "2018-lazos-rotos.jpg"
    "Pendiente de un hilo 54 x 81 cm.jpg" = "2018-pendiente-de-un-hilo.jpg"
    "Pulmones 46 x 54 cm.jpg" = "2018-pulmones.jpg"
    "Refugio 41 x 33 cm.jpg" = "2018-refugio.jpg"
    "Resquicio habitable 46 x 38 cm.jpg" = "2018-resquicio-habitable.jpg"
    "Rota pero viva 33 x 46 cm.jpg" = "2018-rota-pero-viva.jpg"
    "Sombras vivas 92 x 73 cm.jpg" = "2018-sombras-vivas.jpg"
    "Zócalo pariendo una higuera 41 x 27 cm.jpg" = "2018-zocalo-pariendo-una-higuera.jpg"
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