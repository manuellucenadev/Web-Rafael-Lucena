-- ============================================================
-- Carga de datos: Exposición Castillo del Moral Lucena 2000
-- ============================================================

INSERT INTO exposiciones (titulo, lugar, fecha_inicio, fecha_fin, descripcion)
VALUES ('Exposición Castillo del Moral', 'Castillo del Moral, Lucena', '2000-01-01', '2000-12-31',
        'Exposición individual celebrada en el Castillo del Moral de Lucena en el año 2000.');

SET @exposicion_id = LAST_INSERT_ID();

INSERT INTO obras (titulo, anio, disponible, tecnica_id) VALUES
('Toro I', 1995, true, NULL),
('Muerte', 2000, true, NULL),
('Boceto', 2000, true, NULL),
('El trofeo', 2000, true, NULL),
('Toro II', 2000, true, NULL),
('El destino', 2000, true, NULL),
('Caballos', 2000, true, NULL),
('Fases', 2000, true, NULL),
('Agonía II', 2000, true, NULL),
('Definición', 2000, true, NULL),
('Hombre y mujer', 2000, true, NULL),
('El hombre de la lluvia', 2000, true, NULL),
('Desamparo', 2000, true, NULL),
('Pensar con el corazón o con la cabeza', 2000, true, NULL),
('Vida', 2000, true, NULL),
('Desnudo I', 2000, true, NULL),
('Desnudo II', 2000, true, NULL),
('Composición vegetal I', 2000, true, NULL),
('Metamorfosis I', 2000, true, NULL),
('Bodegón I', 2000, true, NULL);

INSERT INTO imagenes_obra (url, es_principal, orden, obra_id)
SELECT '/api/imagenes/2000-toro-i.jpg', true, 0, id FROM obras WHERE titulo = 'Toro I' AND anio = 1995
UNION ALL
SELECT '/api/imagenes/2000-muerte.jpg', true, 0, id FROM obras WHERE titulo = 'Muerte' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-boceto.jpg', true, 0, id FROM obras WHERE titulo = 'Boceto' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-el-trofeo.jpg', true, 0, id FROM obras WHERE titulo = 'El trofeo' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-toro-ii.jpg', true, 0, id FROM obras WHERE titulo = 'Toro II' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-el-destino.jpg', true, 0, id FROM obras WHERE titulo = 'El destino' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-caballos.jpg', true, 0, id FROM obras WHERE titulo = 'Caballos' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-fases.jpg', true, 0, id FROM obras WHERE titulo = 'Fases' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-agonia-ii.jpg', true, 0, id FROM obras WHERE titulo = 'Agonía II' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-definicion.jpg', true, 0, id FROM obras WHERE titulo = 'Definición' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-hombre-y-mujer.jpg', true, 0, id FROM obras WHERE titulo = 'Hombre y mujer' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-el-hombre-de-la-lluvia.jpg', true, 0, id FROM obras WHERE titulo = 'El hombre de la lluvia' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-desamparo.jpg', true, 0, id FROM obras WHERE titulo = 'Desamparo' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-pensar-con-el-corazon-o-con-la-cabeza.jpg', true, 0, id FROM obras WHERE titulo = 'Pensar con el corazón o con la cabeza' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-vida.jpg', true, 0, id FROM obras WHERE titulo = 'Vida' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-desnudo-i.jpg', true, 0, id FROM obras WHERE titulo = 'Desnudo I' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-desnudo-ii.jpg', true, 0, id FROM obras WHERE titulo = 'Desnudo II' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-composicion-vegetal-i.jpg', true, 0, id FROM obras WHERE titulo = 'Composición vegetal I' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-metamorfosis-i.jpg', true, 0, id FROM obras WHERE titulo = 'Metamorfosis I' AND anio = 2000
UNION ALL
SELECT '/api/imagenes/2000-bodegon-i.jpg', true, 0, id FROM obras WHERE titulo = 'Bodegón I' AND anio = 2000;

INSERT INTO exposicion_obra (exposicion_id, obra_id)
SELECT @exposicion_id, id FROM obras WHERE titulo IN (
    'Toro I', 'Muerte', 'Boceto', 'El trofeo', 'Toro II', 'El destino', 'Caballos',
    'Fases', 'Agonía II', 'Definición', 'Hombre y mujer', 'El hombre de la lluvia',
    'Desamparo', 'Pensar con el corazón o con la cabeza', 'Vida', 'Desnudo I',
    'Desnudo II', 'Composición vegetal I', 'Metamorfosis I', 'Bodegón I'
) AND anio IN (1995, 2000);