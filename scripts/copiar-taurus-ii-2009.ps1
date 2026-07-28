$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\Taurus II - 2009\Recortadas por mí"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "Abalánzate, toro 20 x 36,5 cm. Tintas.jpg" = "2009-abalanzate-toro.jpg"
    "Angustia roja 61 x 46 cm. Acrílico y óleo.jpg" = "2009-angustia-roja.jpg"
    "Bramidos de espuma roja 40 x 33 cm. Grafito.jpg" = "2009-bramidos-de-espuma-roja.jpg"
    "Coloso en el coliseo 61 x 46 cm. Grafito, carbón y óleo.jpg" = "2009-coloso-en-el-coliseo.jpg"
    "Derribo 42,5 x 66 cm. Tintas.jpg" = "2009-derribo.jpg"
    "El juez de la contienda 42,5 x 66 cm. Tintas.jpg" = "2009-el-juez-de-la-contienda.jpg"
    "Entregado 33 x 40 cm. Grafito y temple.jpg" = "2009-entregado.jpg"
    "Estampida 20 x 36,5 cm. Tintas.jpg" = "2009-estampida.jpg"
    "Llegabas con luceros...(III) 61 x 27 cm. Tintas.jpg" = "2009-llegabas-con-luceros-iii.jpg"
    "Llegabas negro... 61 x 27 cm. Tintas.jpg" = "2009-llegabas-negro.jpg"
    "Llegabas rojo... 61 x 27 cm. Tintas.jpg" = "2009-llegabas-rojo.jpg"
    "Mugiendo en magenta 40 x 33 cm. Carbón y óleo.jpg" = "2009-mugiendo-en-magenta.jpg"
    "Obsesión 60,5 x 81 cm. Grafito y óleo.jpg" = "2009-obsesion.jpg"
    "Por el portón de los sustos 36,5 x 20 cm. Tintas.jpg" = "2009-por-el-porton-de-los-sustos.jpg"
    "Presentación 55 x 46 cm. Grafito y tiza pastel.jpg" = "2009-presentacion.jpg"
    "Recargando 61 x 73 cm. Grafito y temple.jpg" = "2009-recargando.jpg"
    "Reclamo 46 x 61 cm. Tintas y óleo.jpg" = "2009-reclamo.jpg"
    "Respirando luz 20 x 36,5 cm. Tintas y óleo.jpg" = "2009-respirando-luz.jpg"
    "Revuélvete,  toro 20 x 36,5 cm. Tintas y óleo.jpg" = "2009-revuelvete-toro.jpg"
    "Rojo sobre negro 33 x 40 cm. Óleo y carbón.jpg" = "2009-rojo-sobre-negro.jpg"
    "Sálvate, toro 65 x 130 cm. Grafito.jpg" = "2009-salvate-toro.jpg"
    "Trío de ases 61 x 46 cm. Grafito y lápiz carbón.jpg" = "2009-trio-de-ases.jpg"
    "Volcán 81 x 116 cm. Grafito.jpg" = "2009-volcan.jpg"
    "Yérguete, toro. 116 x 81 cm. Grafito y lápiz de color.jpg" = "2009-yerguete-toro.jpg"
    "Ínsula de bravura 20 x 36,5 cm. Tintas y óleo.jpg" = "2009-insula-de-bravura.jpg"
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