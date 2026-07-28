package com.portfolio.pintor.repository;

import com.portfolio.pintor.model.Exposicion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ExposicionRepository extends JpaRepository<Exposicion, Long> {

    List<Exposicion> findByFechaFinGreaterThanEqualOrderByFechaInicioAsc(LocalDate fecha);

    List<Exposicion> findByFechaFinLessThanOrderByFechaInicioDesc(LocalDate fecha);

}
