$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\Exposición Castillo del Moral Lucena 2000"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "001TORO.JPG" = "2000-toro-i.jpg"
    "002muerte.JPG" = "2000-muerte.jpg"
    "003boceto.JPG" = "2000-boceto.jpg"
    "004el trofeo.JPG" = "2000-el-trofeo.jpg"
    "005TORO.JPG" = "2000-toro-ii.jpg"
    "006el destino.JPG" = "2000-el-destino.jpg"
    "008caballos.JPG" = "2000-caballos.jpg"
    "010FASES.JPG" = "2000-fases.jpg"
    "011agonia II.JPG" = "2000-agonia-ii.jpg"
    "018definicion.JPG" = "2000-definicion.jpg"
    "019hombre y mujer.JPG" = "2000-hombre-y-mujer.jpg"
    "021el hombre de la lluvia.JPG" = "2000-el-hombre-de-la-lluvia.jpg"
    "022desamparo.JPG" = "2000-desamparo.jpg"
    "023pensar con el corazon o con la cabeza.JPG" = "2000-pensar-con-el-corazon-o-con-la-cabeza.jpg"
    "024VIDA.JPG" = "2000-vida.jpg"
    "025desnudo I.JPG" = "2000-desnudo-i.jpg"
    "026desnudo II.JPG" = "2000-desnudo-ii.jpg"
    "031composicion vegetal I.JPG" = "2000-composicion-vegetal-i.jpg"
    "032metamorfosis I.JPG" = "2000-metamorfosis-i.jpg"
    "041bodegon I.JPG" = "2000-bodegon-i.jpg"
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