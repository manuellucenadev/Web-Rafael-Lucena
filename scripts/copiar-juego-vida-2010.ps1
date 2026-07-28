$origen = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Fotos cuadros\Exposiciones\El Juego de la Vida -2010\El Juego de la Vida. 2010. Galería Carmen del Campo. Córdoba"
$destino = "C:\Users\Usuario\Desktop\Trabajo\Proyectos Personales\Web Papá\backend\uploads"

if (!(Test-Path $destino)) { New-Item -ItemType Directory -Path $destino -Force }

$mapeo = @{
    "Airbag de serie. 65 x 52,5. Grafito-Tabla.JPG" = "2010-airbag-de-serie.jpg"
    "Airoso. 33 x 36. Óleo-Tintas-Papel-Tabla.JPG" = "2010-airoso.jpg"
    "Calvario. 36,5 x 20. Óleo-Tintas-papel-Tabla.JPG" = "2010-calvario.jpg"
    "Dignidad. 33 x 73. Grafito-Tabla.JPG" = "2010-dignidad.jpg"
    "Dolor. 81 x 116 cm. Óleo-Acrílico-Carbón-Tela.jpg" = "2010-dolor.jpg"
    "Escorzos finales. 81 x 100. Óleo-Grafito-Tela.JPG" = "2010-escorzos-finales.jpg"
    "Furia española. 73 x 92. Acrílico-Grafito-Tela..JPG" = "2010-furia-espanola.jpg"
    "Inundación roja. 60 x 73. Óleo-Grafito-Tabla.JPG" = "2010-inundacion-roja.jpg"
    "Invitado a jugar. 44 x 61. Acrílico-Grafito-Carbón-Tabla.JPG" = "2010-invitado-a-jugar.jpg"
    "Libre. 25 x 35. Tintas-Papel-Tabla.JPG" = "2010-libre.jpg"
    "Lid. 20 x 36,5. Tintas-Papel-Tabla.JPG" = "2010-lid.jpg"
    "Luces finales. 33 x 46. Lápiz-Tintas-Papel-Tabla.JPG" = "2010-luces-finales.jpg"
    "Luto. 81 x 116. Óleo-Grafito-Tela.JPG" = "2010-luto.jpg"
    "Mirada. 20 x 36,5. Tintas-Papel-Tabla.JPG" = "2010-mirada.jpg"
    "Naturaleza muerta. 30,5 x 33. Tintas-Papel-Tabla.JPG" = "2010-naturaleza-muerta.jpg"
    "Preparado. 46 x 50. Acrílico-Grafito-Tabla.JPG" = "2010-preparado.jpg"
    "Presagio en las sombras. 116 x 180. Grafito-Carbón-Sanguina-Tela.JPG" = "2010-presagio-en-las-sombras.jpg"
    "Recuerdos. 33 x 73. Acrílico-Grafito-Tabla.JPG" = "2010-recuerdos.jpg"
    "Reojo. 89 x 116. Óleo-Grafito-Tela.JPG" = "2010-reojo.jpg"
    "Salida del laberinto I. 100 x 100. Acrílico-Grafito-Tela..JPG" = "2010-salida-del-laberinto-i.jpg"
    "Salida del laberinto II. 20 x 36,5. Tintas-Papel-Tabla.JPG" = "2010-salida-del-laberinto-ii.jpg"
    "Sangre propia. 100 x 100. Óleo-Grafito-Tela..JPG" = "2010-sangre-propia.jpg"
    "Sutil. 33 x 36. Acrílico-Tintas-Papel-Tabla.JPG" = "2010-sutil.jpg"
    "Sálvate, toro 65 x 130 cm. Grafito.jpg" = "2010-salvate-toro.jpg"
    "Taurodromo. 14,3 x 84 cm. Tintas-Papel-Tabla.jpg" = "2010-taurodromo.jpg"
    "Toro de muerte II.Óleo-Tela. 130 x 146 cm..jpg" = "2010-toro-de-muerte-ii.jpg"
    "Trío de ases II. 61 x 46. Grafito-Sanguina-Tabla.JPG" = "2010-trio-de-ases-ii.jpg"
    "Volcán II. 46 x 66. Grafito-Carbón-Sanguina-Tabla.JPG" = "2010-volcan-ii.jpg"
    "Y se hizo la luz. 12 x 61. Tintas-Papel-Tabla.JPG" = "2010-y-se-hizo-la-luz.jpg"
    "Yérguete, toro. 116 x 81 cm. Grafito y lápiz de color.jpg" = "2010-yerguete-toro.jpg"
    "Últimas caricias. 36,5 x 20. Óleo-Tintas-Papelo-Tabla.JPG" = "2010-ultimas-caricias.jpg"
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