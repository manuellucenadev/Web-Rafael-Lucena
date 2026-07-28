package com.portfolio.pintor.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "exposiciones")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exposicion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String titulo;

    @Column(length = 150)
    private String lugar;

    @Column(name = "fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "imagen_cartel", length = 255)
    private String imagenCartel;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "exposicion_obra",
            joinColumns = @JoinColumn(name = "exposicion_id"),
            inverseJoinColumns = @JoinColumn(name = "obra_id")
    )
    @JsonIgnoreProperties("exposiciones")
    @OrderBy("titulo ASC")
    private List<Obra> obras;

}
