package com.portfolio.pintor.service;

import com.portfolio.pintor.model.Exposicion;
import com.portfolio.pintor.repository.ExposicionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExposicionService {

    private final ExposicionRepository exposicionRepository;

    @Transactional(readOnly = true)
    public List<Exposicion> findAll() {
        return exposicionRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Exposicion findById(Long id) {
        return exposicionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Exposición no encontrada con id " + id));
    }

    @Transactional(readOnly = true)
    public List<Exposicion> findProximasYActuales() {
        return exposicionRepository.findByFechaFinGreaterThanEqualOrderByFechaInicioAsc(LocalDate.now());
    }

    @Transactional(readOnly = true)
    public List<Exposicion> findPasadas() {
        return exposicionRepository.findByFechaFinLessThanOrderByFechaInicioDesc(LocalDate.now());
    }

    @Transactional
    public Exposicion save(Exposicion exposicion) {
        return exposicionRepository.save(exposicion);
    }

    @Transactional
    public Exposicion update(Long id, Exposicion datos) {
        Exposicion exposicion = findById(id);
        exposicion.setTitulo(datos.getTitulo());
        exposicion.setLugar(datos.getLugar());
        exposicion.setFechaInicio(datos.getFechaInicio());
        exposicion.setFechaFin(datos.getFechaFin());
        exposicion.setDescripcion(datos.getDescripcion());
        exposicion.setImagenCartel(datos.getImagenCartel());
        if (datos.getObras() != null) {
            exposicion.setObras(datos.getObras());
        }
        return exposicionRepository.save(exposicion);
    }

    @Transactional
    public void deleteById(Long id) {
        if (!exposicionRepository.existsById(id)) {
            throw new EntityNotFoundException("Exposición no encontrada con id " + id);
        }
        exposicionRepository.deleteById(id);
    }

}
