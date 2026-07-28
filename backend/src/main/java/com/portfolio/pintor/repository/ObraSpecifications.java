package com.portfolio.pintor.repository;

import com.portfolio.pintor.model.Obra;
import org.springframework.data.jpa.domain.Specification;

public class ObraSpecifications {

    public static Specification<Obra> tituloContiene(String titulo) {
        return (root, query, cb) -> (titulo == null || titulo.isBlank())
                ? cb.conjunction()
                : cb.like(cb.lower(root.get("titulo")), "%" + titulo.toLowerCase() + "%");
    }

    public static Specification<Obra> disponible(Boolean disponible) {
        return (root, query, cb) -> disponible == null
                ? cb.conjunction()
                : cb.equal(root.get("disponible"), disponible);
    }

    public static Specification<Obra> tematicaId(Long tematicaId) {
        return (root, query, cb) -> tematicaId == null
                ? cb.conjunction()
                : cb.equal(root.get("tematica").get("id"), tematicaId);
    }

    public static Specification<Obra> tecnicaId(Long tecnicaId) {
        return (root, query, cb) -> tecnicaId == null
                ? cb.conjunction()
                : cb.equal(root.get("tecnica").get("id"), tecnicaId);
    }

    public static Specification<Obra> destacada(Boolean destacada) {
        return (root, query, cb) -> (destacada == null || !destacada)
                ? cb.conjunction()
                : cb.equal(root.get("destacada"), true);
    }

}