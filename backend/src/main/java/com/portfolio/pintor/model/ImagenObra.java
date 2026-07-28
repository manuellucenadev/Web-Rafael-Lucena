package com.portfolio.pintor.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "imagenes_obra")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImagenObra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String url;

    @Column(name = "es_principal", nullable = false)
    private Boolean esPrincipal = false;

    @Column(nullable = false)
    private Integer orden = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "obra_id", nullable = false)
    @JsonIgnoreProperties("imagenes")
    private Obra obra;

}
