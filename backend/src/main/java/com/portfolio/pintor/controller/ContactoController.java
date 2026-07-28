package com.portfolio.pintor.controller;

import com.portfolio.pintor.dto.ContactoRequest;
import com.portfolio.pintor.service.ContactoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacto")
public class ContactoController {

    private final ContactoService contactoService;

    public ContactoController(ContactoService contactoService) {
        this.contactoService = contactoService;
    }

    @PostMapping
    public ResponseEntity<?> enviar(@Valid @RequestBody ContactoRequest request) {
        contactoService.enviarMensaje(request);
        return ResponseEntity.ok().build();
    }
}