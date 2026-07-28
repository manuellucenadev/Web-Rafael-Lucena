$origen = 'C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\32 obras destacadas'
$destino = 'C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads'

$mapeo = @{
    'Abierto y cerrados 20 x 36cm.. Tintas-Papel-Tabla. 2006.jpg' = '2006-abierto-y-cerrados.jpg'
    'Alambradas II. Mixta-Tabla. 48 x 35 cm. 2006.JPG' = '2006-alambradas-ii.jpg'
    'Alambradas. 116 x 81 cm - Mixta-Lienzo. Seleccionado en el XV Certamen Nacional de Pintura Villa de La Roda (Albacete). 2006..jpg' = '2006-alambradas.jpg'
    'Algunos ya partieron...130 x 146 cm. Óleo -lienzo. Seleccionado en el V Certamen Nacional de Pintura “Pedro Bueno”. Villa del Río. 2006. ND.jpg' = '2006-algunos-ya-partieron.jpg'
    'Adquisición de obra en el VII Concurso de pintura “El Flamenco y sus formas de expresión”. Cerdanyola del Vallés. 2011..JPG' = '2011-alegoria-flamenca.jpg'
    'Bodegón. 130 x 162 cm. Mixta - Lienzo. Seleccionado en el III Premio de Artes Plásticas Ciudad de Córdoba “Antonio del Castillo”  1999..JPG' = '1999-bodegon.jpg'
    'Bodegón II.jpg' = '2002-bodegon-ii.jpg'
    'Cartel para la feria taurina “Nuestra Señora de la Salud”. Córdoba. 2011..JPG' = '2011-cartel-feria-taurina.jpg'
    'Cicloide. 162 x 114 cm. Mixta-Lienzo. Seleccionado en el II Concurso Nacional de Pintura “Ciudad de Montilla”  1999..jpg' = '1999-cicloide.jpg'
    'Desmentir el caos aparente. 114 x 146 cm. Mixta-tela. Seleccionada en el XVI Certamen de Dibujo Gregorio Prieto. 2006. ND.JPG' = '2006-desmentir-el-caos-aparente.jpg'
    'DESTINO.130 x 146 cm. Óleo sobre lienzo. Segundo Premio en el V Certamen Nacional de Pintura Taurina. Valdepeñas. 2006 ND.JPG' = '2006-destino.jpg'
    'División de opiniones. 97 x 62 cm. Óleo-Lienzo. 2006. Tercer Premio en el XI Concurso Nacional de Pintura con Motivos Taurinos. Osuna. 2007..JPG' = '2006-division-de-opiniones.jpg'
    'Encierro II. Mixta - Lienzo 114 x 162 cm. Accésit en el I Concurso Nacional de Pintura CECO. Córdoba. 2003..jpg' = '2003-encierro-ii.jpg'
    'Fusión 146 x 114 cm Mixta-Lienzo Seleccionado en el III Certamen Nacional de Pintura “El Toro Bravo”. Salamanca 1994..jpg' = '1994-fusion.jpg'
    'Impresiones - Mixta-Lienzo 89 x 116 cm. Tercer Premio en el IV Certamen Nacional de Pintura Taurina. Valdepeñas. 2005. Colección Jesús Barcenas- ND.JPG' = '2005-impresiones.jpg'
    'Legajos. 46 x 61 cm. Tintas-papel-tabla. 2006.JPG' = '2006-legajos.jpg'
    'Los pilares de la tierra. 97 x 195 cm. Mixta-Lienzo. Seleccionado en el IV Certamen Nacional de Pintura “Pedro Bueno”. Villa del Río. 2003..jpg' = '2003-los-pilares-de-la-tierra.jpg'
    'Manzanas.jpg' = '2002-manzanas.jpg'
    'Pitas. Mixta-lienzo. 130 x 130 cm. Seleccionado en el XXXVII Concurso Internacional de Pintura “Rafael Zabaleta”. Quesada (Jaén). 2007..jpg' = '2007-pitas.jpg'
    'Primer lance. 116 x 114 cm. Óleo sobre lienzo. Primer Premio Nacional Osuna 2008 ND.JPG' = '2008-primer-lance.jpg'
    'Raíces - 100 x 81 cm - Mixta-Tabla-Ganador del IV Certamen Nacional “El flamenco y sus formas de expresión”. Cerdanyola del Vallés, (Barcelona) 1997 ND.JPG' = '1997-raices.jpg'
    'Resurgir II 114 x 146 cm Óleo-lino. Seleccionado en el Premio de Pintura BBVA-MUFACE. Madrid 2014..jpg' = '2014-resurgir-ii.jpg'
    'Taurus III - 100 x 81 cm - Mixta-Tabla. Ganador del I Premio de Artes Plásticas Ciudad de Córdoba “Antonio del Castillo” 1997 ND.JPG' = '1997-taurus-iii.jpg'
    'Toro de muerte II Mixta-Lienzo 130x146 cm Primer accésit en el II Certamen Nacional de Arte Contemporáneo Premio Manolete. Villa del Río. 2008. D.jpg' = '2008-toro-de-muerte-ii.jpg'
    'Vidas silenciosas. 130 x 195 cm. Grafito y oleo sobre lienzo..JPG' = '2007-vidas-silenciosas.jpg'
    'Y aun levantan la cabeza. 162 x 130. Óleo sobre lienzo. Seleccionado Certamen Virgen de las Viñas 2002. ND.JPG' = '2002-y-aun-levantan-la-cabeza.jpg'
    'Último aliento. 46 x 61 cm. Mixta-Tabla. 2003.jpg' = '2003-ultimo-aliento.jpg'
}

$copiados = 0
$fallidos = @()

foreach ($original in $mapeo.Keys) {
    $rutaOrigen = Join-Path $origen $original
    $rutaDestino = Join-Path $destino $mapeo[$original]

    if (Test-Path -LiteralPath $rutaOrigen) {
        Copy-Item -LiteralPath $rutaOrigen -Destination $rutaDestino -Force
        Write-Host "OK  -> $($mapeo[$original])" -ForegroundColor Green
        $copiados++
    } else {
        Write-Host "NO ENCONTRADO -> $original" -ForegroundColor Red
        $fallidos += $original
    }
}

Write-Host ""
Write-Host "Copiados: $copiados de $($mapeo.Count)" -ForegroundColor Cyan

if ($fallidos.Count -gt 0) {
    Write-Host ""
    Write-Host "Archivos no encontrados (revisar nombre exacto):" -ForegroundColor Yellow
    $fallidos | ForEach-Object { Write-Host " - $_" }
}