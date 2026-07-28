# Rafael Lucena — Web de Artista

Portfolio web para mostrar las obras, técnicas, temáticas y exposiciones del pintor Rafael Lucena. Proyecto full-stack desarrollado como parte de mi portfolio personal (CV / GitHub).

## Stack tecnológico

- **Frontend**: Angular 17 (standalone components), TypeScript, CSS
- **Backend**: Spring Boot 3 (Java 17), Spring Data JPA, Spring Security
- **Base de datos**: MySQL 8
- **Infraestructura**: Docker, Docker Compose, Nginx (servir frontend + proxy a la API)
- **CI/CD**: GitHub Actions (pendiente de configurar)

## Estructura del proyecto

```
webrafaellucena/
├── backend/      # API REST en Spring Boot
├── frontend/     # Aplicación Angular
├── docker-compose.yml
└── .env.example
```

## Modelo de datos

- **Tecnica**: técnica artística (óleo, acrílico, técnica mixta sobre lienzo...)
- **Tematica**: temática de la obra (Tauromaquia, Figura, Paisaje, Bodegón)
- **Obra**: cuadro individual (título, descripción, año, técnica, temática, dimensiones, precio, disponibilidad, premio/mención, si es destacada)
- **ImagenObra**: imágenes asociadas a una obra
- **Exposicion**: muestras/eventos, relacionadas con varias obras (N:M)

## Seguridad

La API protege con autenticación HTTP Basic (usuario administrador único) todas las operaciones de escritura (`POST`, `PUT`, `DELETE`) sobre obras, exposiciones, técnicas, temáticas e imágenes. Las rutas de lectura (`GET`) son públicas, así como el envío del formulario de contacto (`POST /api/contacto`).

## Puesta en marcha con Docker

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

## Pendiente / posibles mejoras

- Panel de administración para gestionar obras y exposiciones sin tocar código
- Optimización de imágenes (conversión a WebP, distintos tamaños)
- Tests unitarios e integración (backend y frontend)
- Pipeline de CI/CD con GitHub Actions (build + tests + despliegue)
- Despliegue en producción con dominio propio y HTTPS

## Autor

Desarrollado por Manuel Lucena Marín como proyecto personal para mostrar habilidades full-stack (Angular + Spring Boot + Docker), para la web de artista de su padre, el pintor Rafael Lucena.