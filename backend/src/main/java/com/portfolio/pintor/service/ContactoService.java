package com.portfolio.pintor.service;

import com.portfolio.pintor.dto.ContactoRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactoService {

    private final JavaMailSender mailSender;

    @Value("${contacto.destino}")
    private String destino;

    public ContactoService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void enviarMensaje(ContactoRequest request) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
        mensaje.setTo(destino);
        mensaje.setReplyTo(request.getEmail());
        mensaje.setSubject("Nuevo mensaje de contacto de " + request.getNombre());
        mensaje.setText(
            "Nombre: " + request.getNombre() + "\n" +
            "Email: " + request.getEmail() + "\n\n" +
            "Mensaje:\n" + request.getMensaje()
        );
        mailSender.send(mensaje);
    }
}