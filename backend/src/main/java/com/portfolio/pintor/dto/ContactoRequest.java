package com.portfolio.pintor.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContactoRequest {

    @NotBlank(message = "Introduce tu nombre (mínimo 2 caracteres).")
    @Size(min = 2)
    private String nombre;

    @NotBlank(message = "Introduce un email válido.")
    @Email(message = "Introduce un email válido.")
    private String email;

    @NotBlank(message = "El mensaje debe tener al menos 10 caracteres.")
    @Size(min = 10, message = "El mensaje debe tener al menos 10 caracteres.")
    private String mensaje;
}