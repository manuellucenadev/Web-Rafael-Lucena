$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\Exposición Galería José Pedraza. Montilla 2006"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "01 Viaducto (40 x 78 cm.).jpg" = "2006-viaducto.jpg"
    "02 Construcción (61 x 92 cm.).jpg" = "2006-construccion.jpg"
    "03 Calma I (33 x 40 cm.).jpg" = "2006-calma-i.jpg"
    "04 Calma II (46 x 61 cm.).jpg" = "2006-calma-ii.jpg"
    "05 Destrucción 60 x 81 cm.).jpg" = "2006-destruccion.jpg"
    "06 Estío I (46 x 61 cm.).jpg" = "2006-estio-i.jpg"
    "07 Estío II (46 x 61 cm.).jpg" = "2006-estio-ii.jpg"
    "08 Estío III (40 x 157 cm.).jpg" = "2006-estio-iii.jpg"
    "09 Buscando aire I (61 x 46 cm.).jpg" = "2006-buscando-aire-i.jpg"
    "10 Buscando aire II (73 x 39 cm.).jpg" = "2006-buscando-aire-ii.jpg"
    "11 Buscando aire III 61 x 46 cm.).jpg" = "2006-buscando-aire-iii.jpg"
    "12 Deshabitadas (65 x 54 cm.).jpg" = "2006-deshabitadas.jpg"
    "13 Espacio ocupado (45 x 22 cm.).jpg" = "2006-espacio-ocupado.jpg"
    "14 Out I (33 x 40 cm.).jpg" = "2006-out-i.jpg"
    "15 Out II (20 x 36 cm.).jpg" = "2006-out-ii.jpg"
    "16 8 am (61 x 46 cm.).jpg" = "2006-8-am.jpg"
    "17 Calor (54 x 65 cm.).jpg" = "2006-calor.jpg"
    "18 El paso del tiempo (44 x 33 cm.).jpg" = "2006-el-paso-del-tiempo.jpg"
    "19 Transición (33 x 44 cm.).jpg" = "2006-transicion.jpg"
    "20 Frágil (60 x 81 cm.).jpg" = "2006-fragil.jpg"
    "21 Alambradas (116 x 81 cm.).jpg" = "2006-alambradas.jpg"
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