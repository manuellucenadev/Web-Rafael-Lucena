package com.portfolio.pintor.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/imagenes")
public class ImagenController {

    private static final List<String> EXTENSIONES_PERMITIDAS = List.of(".jpg", ".jpeg", ".png", ".webp", ".gif");
    private static final CacheControl CACHE = CacheControl.maxAge(Duration.ofDays(1)).cachePublic();

    private final Path uploadDir = Paths.get("uploads").toAbsolutePath().normalize();
    private final Path thumbsDir = uploadDir.resolve("thumbs").normalize();

    public ImagenController() throws IOException {
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> upload(@RequestParam("file") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "El archivo está vacío"));
        }

        String originalName = file.getOriginalFilename();
        String extension = "";
        if (originalName != null && originalName.contains(".")) {
            extension = originalName.substring(originalName.lastIndexOf(".")).toLowerCase();
        }

        if (!EXTENSIONES_PERMITIDAS.contains(extension)) {
            return ResponseEntity.badRequest().body(Map.of("error", "Tipo de archivo no permitido"));
        }

        String nombreArchivo = UUID.randomUUID() + extension;
        Path destino = uploadDir.resolve(nombreArchivo);
        file.transferTo(destino);

        String url = "/api/imagenes/" + nombreArchivo;
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("url", url));
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImagen(@PathVariable String filename) throws IOException {
        Path filePath = uploadDir.resolve(filename).normalize();

        if (!filePath.startsWith(uploadDir)) {
            return ResponseEntity.badRequest().build();
        }

        Resource resource = new UrlResource(filePath.toUri());

        if (!resource.exists() || !resource.isReadable() || Files.isDirectory(filePath)) {
            return ResponseEntity.notFound().build();
        }

        String contentType = Files.probeContentType(filePath);
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .cacheControl(CACHE)
                .lastModified(Files.getLastModifiedTime(filePath).toInstant())
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }

    @GetMapping("/{filename}/thumb")
    public ResponseEntity<Resource> getMiniatura(@PathVariable String filename) throws IOException {
        int punto = filename.lastIndexOf('.');
        String base = punto > 0 ? filename.substring(0, punto) : filename;
        Path miniatura = thumbsDir.resolve(base + ".webp").normalize();

        if (miniatura.startsWith(thumbsDir) && Files.isReadable(miniatura)) {
            return ResponseEntity.ok()
                    .cacheControl(CACHE)
                    .lastModified(Files.getLastModifiedTime(miniatura).toInstant())
                    .contentType(MediaType.parseMediaType("image/webp"))
                    .body(new UrlResource(miniatura.toUri()));
        }

        return getImagen(filename);
    }

}