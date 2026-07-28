package com.portfolio.pintor.repository;

import com.portfolio.pintor.model.Obra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ObraRepository extends JpaRepository<Obra, Long>, JpaSpecificationExecutor<Obra> {

    List<Obra> findByTecnicaIdOrderByAnioDescIdDesc(Long tecnicaId);

    List<Obra> findByDisponibleOrderByAnioDescIdDesc(Boolean disponible);

    List<Obra> findAllByOrderByAnioDescIdDesc();

    List<Obra> findByDestacadaOrderByAnioDescIdDesc(Boolean destacada);

}