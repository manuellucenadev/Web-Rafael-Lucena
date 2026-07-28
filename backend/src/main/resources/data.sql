-- Técnicas
INSERT INTO tecnicas (nombre, descripcion) SELECT * FROM (SELECT 'Óleo', 'Pinturas al óleo sobre lienzo') AS tmp
WHERE NOT EXISTS (SELECT nombre FROM tecnicas WHERE nombre = 'Óleo') LIMIT 1;

INSERT INTO tecnicas (nombre, descripcion) SELECT * FROM (SELECT 'Acrílico', 'Obras realizadas con pintura acrílica') AS tmp
WHERE NOT EXISTS (SELECT nombre FROM tecnicas WHERE nombre = 'Acrílico') LIMIT 1;

INSERT INTO tecnicas (nombre, descripcion) SELECT * FROM (SELECT 'Acuarela', 'Trabajos en acuarela sobre papel') AS tmp
WHERE NOT EXISTS (SELECT nombre FROM tecnicas WHERE nombre = 'Acuarela') LIMIT 1;

-- Obras de ejemplo
INSERT INTO obras (titulo, descripcion, anio, tecnica, dimensiones, precio, disponible, fecha_creacion, tecnica_id)
SELECT 'Atardecer en el olivar', 'Paisaje de la campiña cordobesa al atardecer.', 2022, 'Óleo sobre lienzo', '60x80 cm', 350.00, true, '2022-05-10', t.id
FROM tecnicas t WHERE t.nombre = 'Óleo'
AND NOT EXISTS (SELECT 1 FROM obras WHERE titulo = 'Atardecer en el olivar') LIMIT 1;

INSERT INTO obras (titulo, descripcion, anio, tecnica, dimensiones, precio, disponible, fecha_creacion, tecnica_id)
SELECT 'Calle de Lucena', 'Rincón típico del centro histórico de Lucena.', 2023, 'Acrílico sobre lienzo', '50x70 cm', 280.00, true, '2023-02-15', t.id
FROM tecnicas t WHERE t.nombre = 'Acrílico'
AND NOT EXISTS (SELECT 1 FROM obras WHERE titulo = 'Calle de Lucena') LIMIT 1;

INSERT INTO obras (titulo, descripcion, anio, tecnica, dimensiones, precio, disponible, fecha_creacion, tecnica_id)
SELECT 'Bodegón con cítricos', 'Bodegón clásico con naranjas y limones.', 2021, 'Acuarela', '30x40 cm', 120.00, false, '2021-11-20', t.id
FROM tecnicas t WHERE t.nombre = 'Acuarela'
AND NOT EXISTS (SELECT 1 FROM obras WHERE titulo = 'Bodegón con cítricos') LIMIT 1;

-- Exposición de ejemplo
INSERT INTO exposiciones (titulo, lugar, fecha_inicio, fecha_fin, descripcion)
SELECT 'Exposición Colectiva de Primavera', 'Casa de la Cultura, Lucena', '2024-04-01', '2024-04-30', 'Muestra colectiva de artistas locales.'
WHERE NOT EXISTS (SELECT 1 FROM exposiciones WHERE titulo = 'Exposición Colectiva de Primavera');
