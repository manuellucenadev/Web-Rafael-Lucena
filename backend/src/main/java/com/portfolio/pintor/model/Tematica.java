package com.portfolio.pintor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name = "tematicas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tematica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 60)
    private String nombre;

    @OneToMany(mappedBy = "tematica")
    @JsonIgnore
    private List<Obra> obras;
}