package com.portfolio.pintor.service;

import com.portfolio.pintor.model.Obra;
import com.portfolio.pintor.repository.ObraRepository;
import com.portfolio.pintor.repository.ObraSpecifications;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ObraService {

    private final ObraRepository obraRepository;

    @Transactional(readOnly = true)
    public List<Obra> findAll() {
        return obraRepository.findAllByOrderByAnioDescIdDesc();
    }

    @Transactional(readOnly = true)
    public Obra findById(Long id) {
        return obraRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Obra no encontrada con id " + id));
    }

    @Transactional(readOnly = true)
    public List<Obra> findByTecnica(Long tecnicaId) {
        return obraRepository.findByTecnicaIdOrderByAnioDescIdDesc(tecnicaId);
    }

    @Transactional(readOnly = true)
    public List<Obra> findDisponibles(Boolean disponible) {
        return obraRepository.findByDisponibleOrderByAnioDescIdDesc(disponible);
    }

    @Transactional
    public Obra save(Obra obra) {
        return obraRepository.save(obra);
    }

    @Transactional
    public Obra update(Long id, Obra datosObra) {
        Obra obra = findById(id);
        obra.setTitulo(datosObra.getTitulo());
        obra.setDescripcion(datosObra.getDescripcion());
        obra.setAnio(datosObra.getAnio());
        obra.setDescripcionTecnica(datosObra.getDescripcionTecnica());
        obra.setDimensiones(datosObra.getDimensiones());
        obra.setPrecio(datosObra.getPrecio());
        obra.setDisponible(datosObra.getDisponible());
        obra.setPremio(datosObra.getPremio());
        obra.setDestacada(datosObra.getDestacada());
        obra.setFechaCreacion(datosObra.getFechaCreacion());
        obra.setTecnica(datosObra.getTecnica());
        obra.setTematica(datosObra.getTematica());
        return obraRepository.save(obra);
    }

    @Transactional
    public void deleteById(Long id) {
        if (!obraRepository.existsById(id)) {
            throw new EntityNotFoundException("Obra no encontrada con id " + id);
        }
        obraRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<Obra> findDestacadas() {
        return obraRepository.findByDestacadaOrderByAnioDescIdDesc(true);
    }

    @Transactional(readOnly = true)
    public List<Obra> findConFiltros(String titulo, Boolean disponible, Long tematicaId, Long tecnicaId, Boolean destacada) {
        Specification<Obra> spec = Specification
                .where(ObraSpecifications.tituloContiene(titulo))
                .and(ObraSpecifications.disponible(disponible))
                .and(ObraSpecifications.tematicaId(tematicaId))
                .and(ObraSpecifications.tecnicaId(tecnicaId))
                .and(ObraSpecifications.destacada(destacada));

        return obraRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "anio").and(Sort.by(Sort.Direction.DESC, "id")));
    }

}