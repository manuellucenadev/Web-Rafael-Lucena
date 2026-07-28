$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\Taurus.2004. Galería Carmen del Campo. Córdoba"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "ANÁLISIS.Mixta-Lienzo.81 x 100 cm..jpg" = "2004-analisis.jpg"
    "ARRASTRE 2.Mixta-Lienzo. 100 x 81 cm..jpg" = "2004-arrastre-2.jpg"
    "CAMBIO DE PLANES.Mixta-Tabla.46 x 61 cm..jpg" = "2004-cambio-de-planes.jpg"
    "CITANDO I.Mixta-Tabla.60 x 73 cm..jpg" = "2004-citando-i.jpg"
    "CITANDO II.Tintas-Papel40 x 33 cm..JPG" = "2004-citando-ii.jpg"
    "CONDUCIDOS.Mixta-Tabla.73 x 60 cm..jpg" = "2004-conducidos.jpg"
    "CREYERON SER LIBRES.Mixta-Lienzo. 162 x 114 cm..jpg" = "2004-creyeron-ser-libres.jpg"
    "CURIOSO.Tintas-Papel.33 x 22,5 cm..jpg" = "2004-curioso.jpg"
    "DESARME.Mixta-Lienzo. 73 x 100 cm..jpg" = "2004-desarme.jpg"
    "EL LOTE EN SUERTE.Mixta-Lienzo. 92 x 73 cm..jpg" = "2004-el-lote-en-suerte.jpg"
    "ENCHIQUERADO.Mixta-Tabla 61 x 46 cm..jpg" = "2004-enchiquerado.jpg"
    "ENLUNAOTintas-Papel 33 x 40 cm..JPG" = "2004-enlunao.jpg"
    "ENTRE SOMBRA Y LUZ.Mixta-Tabla.46 x 61 cm..jpg" = "2004-entre-sombra-y-luz.jpg"
    "ESCANEANDO.Tintas-Papel.33 x 22,5 cm..JPG" = "2004-escaneando.jpg"
    "ESPERANDO EL FIN.Tintas-papel.40 x 33 cm..jpg" = "2004-esperando-el-fin.jpg"
    "ESTÁTICA-DINÁMICA.Mixta-Lienzo 60 x 73 cm..jpg" = "2004-estatica-dinamica.jpg"
    "FULMINANTE Mixta-Lienzo 114 x 162 cm..jpg" = "2004-fulminante.jpg"
    "HERIDO POR FUERZA.Mixta-Lienzo. 130 x 130 cm..jpg" = "2004-herido-por-fuerza.jpg"
    "HOLA!Mixta-Lienzo.97 x 130 cm.jpg" = "2004-hola.jpg"
    "IDA Y VUELTA.Tintas-papel.40 x 33 cm..jpg" = "2004-ida-y-vuelta.jpg"
    "LA VIDA EN TRES TERCIOS.Mixta-Lienzo.65 x 81 cm..jpg" = "2004-la-vida-en-tres-tercios.jpg"
    "LOS 5 RESTANTES.Mixta- Tabla.73 x 60 cm..jpg" = "2004-los-5-restantes.jpg"
    "PASANDO DEL TEMA.Tintas-Papel. 33 x 22,5 cm..JPG" = "2004-pasando-del-tema.jpg"
    "PORTAGAYOLA. Tintas-Papel. 33 x 40 cm..JPG" = "2004-portagayola.jpg"
    "RENCILLA.Mixta -Lienzo.100 x 81 cm..jpg" = "2004-rencilla.jpg"
    "SOLEDAD.Mixta-Tabla.46 x 61 cm..jpg" = "2004-soledad.jpg"
    "SOÑADOR.Tintas-Papel. 33 x 41 cm..jpg" = "2004-sonador.jpg"
    "SUERTE DE VARAS.Mixta-Lienzo.60 x 73 cm..jpg" = "2004-suerte-de-varas.jpg"
    "TRAPÍO.Tintas-Papel. 33 x 22,5 cm..JPG" = "2004-trapio.jpg"
    "TRAS LA ESTELAMixta-Lienzo. 60 x 73 cm..jpg" = "2004-tras-la-estela.jpg"
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