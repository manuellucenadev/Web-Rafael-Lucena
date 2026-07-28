package com.portfolio.pintor.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "obras")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Obra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "anio")
    private Integer anio;

    @Column(name = "tecnica", length = 80)
    @JsonIgnore
    private String descripcionTecnica;

    @Column(length = 60)
    private String dimensiones;

    @Column(precision = 10, scale = 2)
    private BigDecimal precio;

    @Column(nullable = false)
    private Boolean disponible = true;

    @Column(length = 150)
    private String premio;

    @Column(nullable = false)
    private Boolean destacada = false;

    @Column(name = "fecha_creacion")
    private LocalDate fechaCreacion;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tecnica_id")
    @JsonIgnoreProperties("obras")
    private Tecnica tecnica;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tematica_id")
    @JsonIgnoreProperties("obras")
    private Tematica tematica;

    @OneToMany(mappedBy = "obra", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonIgnoreProperties("obra")
    private List<ImagenObra> imagenes;

    @ManyToMany(mappedBy = "obras", fetch = FetchType.EAGER)
    @JsonIgnoreProperties("obras")
    private List<Exposicion> exposiciones;

}