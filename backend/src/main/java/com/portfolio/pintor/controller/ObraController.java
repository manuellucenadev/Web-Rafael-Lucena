package com.portfolio.pintor.controller;

import com.portfolio.pintor.model.Obra;
import com.portfolio.pintor.service.ObraService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/obras")
@RequiredArgsConstructor
public class ObraController {

    private final ObraService obraService;

    @GetMapping
    public List<Obra> getAll(
        @RequestParam(required = false) String titulo,
        @RequestParam(required = false) Boolean disponible,
        @RequestParam(required = false) Long tematicaId,
        @RequestParam(required = false) Long tecnicaId,
        @RequestParam(required = false) Boolean destacada
    ) {
        return obraService.findConFiltros(titulo, disponible, tematicaId, tecnicaId, destacada);
    }

    @GetMapping("/{id}")
    public Obra getById(@PathVariable Long id) {
        return obraService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Obra create(@RequestBody Obra obra) {
        return obraService.save(obra);
    }

    @PutMapping("/{id}")
    public Obra update(@PathVariable Long id, @RequestBody Obra obra) {
        return obraService.update(id, obra);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        obraService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}