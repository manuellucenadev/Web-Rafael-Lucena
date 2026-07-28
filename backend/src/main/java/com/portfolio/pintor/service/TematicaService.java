package com.portfolio.pintor.service;

import com.portfolio.pintor.model.Tematica;
import com.portfolio.pintor.repository.TematicaRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TematicaService {

    private final TematicaRepository tematicaRepository;

    @Transactional(readOnly = true)
    public List<Tematica> findAll() {
        return tematicaRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Tematica findById(Long id) {
        return tematicaRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Temática no encontrada con id " + id));
    }

    @Transactional
    public Tematica save(Tematica tematica) {
        return tematicaRepository.save(tematica);
    }

    @Transactional
    public Tematica update(Long id, Tematica datos) {
        Tematica tematica = findById(id);
        tematica.setNombre(datos.getNombre());
        return tematicaRepository.save(tematica);
    }

    @Transactional
    public void deleteById(Long id) {
        if (!tematicaRepository.existsById(id)) {
            throw new EntityNotFoundException("Temática no encontrada con id " + id);
        }
        tematicaRepository.deleteById(id);
    }

}