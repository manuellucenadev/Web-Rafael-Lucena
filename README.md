## Modelo de datos

- **Tecnica**: técnica artística (óleo, acrílico, mixta/lienzo...)
- **Tematica**: temática de la obra (Tauromaquia, Figura, Paisaje, Bodegón)
- **Obra**: cuadro individual (título, descripción, año, técnica, temática, dimensiones, precio, disponibilidad, premio/mención, si es destacada)
- **ImagenObra**: imágenes asociadas a una obra
- **Exposicion**: muestras/eventos, relacionadas con varias obras (N:M)

## Seguridad

- La API protege con autenticación HTTP Basic (usuario administrador único) todas las operaciones de escritura (`POST`, `PUT`, `DELETE`) sobre obras, exposiciones, técnicas, temáticas e imágenes. Las rutas de lectura (`GET`) son públicas, así como el envío del formulario de contacto (`POST /api/contacto`).
- En producción, MySQL y el backend no están expuestos directamente a internet: solo el frontend recibe tráfico externo, gestionado por Nginx como reverse proxy con certificado SSL (Let's Encrypt).
- CORS configurado para restringir los orígenes permitidos al dominio de producción.

## Puesta en marcha con Docker (entorno local)

1. Copia el archivo de variables de entorno:

```bash
   cp .env.example .env
```

2. Completa en `.env` las credenciales de MySQL, del correo de contacto (SMTP) y del usuario administrador (`ADMIN_USERNAME` / `ADMIN_PASSWORD`).

3. Levanta todos los servicios:

```bash
   docker compose up --build
```

4. Accede a:
   - Frontend: http://localhost:4200
   - API: http://localhost:8080/api
   - MySQL: localhost:3307

## Desarrollo local (sin Docker)

### Backend

```bash
cd backend
mvn spring-boot:run
```

Requiere una instancia de MySQL local con las credenciales definidas en `src/main/resources/application.yml`.

### Frontend

```bash
cd frontend
npm install
npm start
```

La app estará disponible en http://localhost:4200 y consumirá la API en http://localhost:8080/api (configurado en `src/environments/environment.ts`).

## Endpoints principales de la API

| Método | Endpoint                          | Descripción                              | Auth |
|--------|-------------------------------------|-------------------------------------------|------|
| GET    | `/api/obras`                       | Lista de obras (filtros: `titulo`, `tecnicaId`, `tematicaId`, `disponible`, `destacada`) | No |
| GET    | `/api/obras/{id}`                  | Detalle de una obra                       | No |
| POST   | `/api/obras`                       | Crear obra                                | Sí |
| PUT    | `/api/obras/{id}`                  | Actualizar obra                           | Sí |
| DELETE | `/api/obras/{id}`                  | Eliminar obra                             | Sí |
| GET    | `/api/tecnicas`                    | Lista de técnicas                         | No |
| GET    | `/api/tematicas`                   | Lista de temáticas                        | No |
| GET    | `/api/exposiciones?estado=...`     | Exposiciones (`proximas` / `pasadas`)     | No |
| POST   | `/api/imagenes/upload`             | Subida de imágenes                        | Sí |
| GET    | `/api/imagenes/{filename}`         | Servir una imagen                         | No |
| POST   | `/api/contacto`                    | Envío del formulario de contacto          | No |

## Despliegue en producción

La aplicación está desplegada en un VPS con Docker Compose, con Nginx como reverse proxy gestionando HTTPS (Let's Encrypt). El flujo de despliegue:

```bash
git pull
docker compose up -d --build
```

## Pendiente / posibles mejoras

- Panel de administración para gestionar obras y exposiciones sin tocar código
- Optimización de imágenes (miniaturas, conversión a WebP...)
- Tests unitarios e integración (backend y frontend)
- Pipeline de CI/CD con GitHub Actions (build + tests + despliegue automático)

## Autor

Desarrollado por [Manuel Lucena Marín](https://www.linkedin.com/in/manuel-lucena-marin/) como proyecto personal para mostrar habilidades full-stack (Angular + Spring Boot + Docker), para la web de artista de su padre, el pintor Rafael Lucena.