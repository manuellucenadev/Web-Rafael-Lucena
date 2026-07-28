package com.portfolio.pintor.service;

import com.portfolio.pintor.model.Tecnica;
import com.portfolio.pintor.repository.TecnicaRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TecnicaService {

    private final TecnicaRepository tecnicaRepository;

    @Transactional(readOnly = true)
    public List<Tecnica> findAll() {
        return tecnicaRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Tecnica findById(Long id) {
        return tecnicaRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Técnica no encontrada con id " + id));
    }

    @Transactional
    public Tecnica save(Tecnica tecnica) {
        return tecnicaRepository.save(tecnica);
    }

    @Transactional
    public Tecnica update(Long id, Tecnica datos) {
        Tecnica tecnica = findById(id);
        tecnica.setNombre(datos.getNombre());
        tecnica.setDescripcion(datos.getDescripcion());
        return tecnicaRepository.save(tecnica);
    }

    @Transactional
    public void deleteById(Long id) {
        if (!tecnicaRepository.existsById(id)) {
            throw new EntityNotFoundException("Técnica no encontrada con id " + id);
        }
        tecnicaRepository.deleteById(id);
    }

}
