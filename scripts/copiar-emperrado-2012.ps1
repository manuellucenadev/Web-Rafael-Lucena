$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\Emperrado - 2012\Recortadas"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "01 Malherido I- 41 x 68 cm. (Lápiz conté-acrílico-tabla).JPG" = "2012-malherido-i.jpg"
    "04 Perro semihundido II. 20 x 36,5 cm. (Tinta-papel-tabla).JPG" = "2012-perro-semihundido-ii.jpg"
    "06 Callejero. 22 x 20 cm.Lápiz compuesto-papel-tabla.JPG" = "2012-callejero.jpg"
    "07 Huidizo. 15 x 41 cm. (Tinta-papel-tabla).JPG" = "2012-huidizo.jpg"
    "08 Tristeza infinita. 41 x 15 cm. (Tinta-papel-tabla).JPG" = "2012-tristeza-infinita.jpg"
    "09 Clara 36,5 x 20 cm.(Tinta-papel-tabla).JPG" = "2012-clara.jpg"
    "11 Reposo.162 x 162 cm.(Óleo-acrílico-grafito-Lienzo).JPG" = "2012-reposo.jpg"
    "12 Espejo del alma I. 33 x 41 cm. Tinta-papel-tabla IMG_4583.JPG" = "2012-espejo-del-alma-i.jpg"
    "12 Messi. 33 x 41 cm. (Tinta-papel-tabla).JPG" = "2012-messi.jpg"
    "14 En carrera. 89 x 146 cm. (Mixta-Lienzo).JPG" = "2012-en-carrera.jpg"
    "15 Elasticidad I. 23 x 65 cm. (Tinta-papel-tabla).JPG" = "2012-elasticidad-i.jpg"
    "16 Elasticidad II. 26,5 x 65 cm.(Tinta-papel-tabla).JPG" = "2012-elasticidad-ii.jpg"
    "17 Nobleza 50 x 65 cm. (Grafito-temple-tabla).JPG" = "2012-nobleza.jpg"
    "18 Espejo del alma II. 16 x 40 cm. (Tinta-papel-tabla).JPG" = "2012-espejo-del-alma-ii.jpg"
    "21 The thick red line. 130 x 89 cm. Óleo-lienzo.JPG" = "2012-the-thick-red-line.jpg"
    "Lealtad. 40 x 40 cm. (Óleo-lienzo).jpg" = "2012-lealtad.jpg"
    "Malherido II. 20 x 36,5 cm. (lápiz conté-acrílico-tabla).JPG" = "2012-malherido-ii.jpg"
    "Perro semihundido I. 21 x 26 cm.(Grafito-temple-tabla).jpg" = "2012-perro-semihundido-i.jpg"
    "Perro semihundido III. 100 x 170 cm. (Tinta-papel-tabla).JPG" = "2012-perro-semihundido-iii.jpg"
    "Te lo imploro. 46 x 46 cm. (Tinta-papel-tabla).jpg" = "2012-te-lo-imploro.jpg"
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