const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const UPLOADS = process.env.UPLOADS_DIR || '/uploads';
const THUMBS = path.join(UPLOADS, 'thumbs');
const ANCHO = 1000;
const CALIDAD = 75;

fs.mkdirSync(THUMBS, { recursive: true });

const originales = fs.readdirSync(UPLOADS).filter(f => /\.(jpe?g|png)$/i.test(f));

(async () => {
  let creadas = 0, omitidas = 0, fallos = 0;
  for (const f of originales) {
    const origen = path.join(UPLOADS, f);
    const destino = path.join(THUMBS, path.parse(f).name + '.webp');

    if (fs.existsSync(destino) && fs.statSync(destino).mtimeMs >= fs.statSync(origen).mtimeMs) {
      omitidas++;
      continue;
    }
    try {
      await sharp(origen)
        .rotate()
        .resize({ width: ANCHO, withoutEnlargement: true })
        .webp({ quality: CALIDAD })
        .toFile(destino);
      creadas++;
    } catch (e) {
      fallos++;
      console.error(`Error con ${f}: ${e.message}`);
    }
  }
  console.log(`Miniaturas creadas: ${creadas} · ya existentes: ${omitidas} · con error: ${fallos}`);
})();