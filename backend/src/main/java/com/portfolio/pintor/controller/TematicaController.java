package com.portfolio.pintor.controller;

import com.portfolio.pintor.model.Tematica;
import com.portfolio.pintor.service.TematicaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tematicas")
@RequiredArgsConstructor
public class TematicaController {

    private final TematicaService tematicaService;

    @GetMapping
    public List<Tematica> getAll() {
        return tematicaService.findAll();
    }

    @GetMapping("/{id}")
    public Tematica getById(@PathVariable Long id) {
        return tematicaService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Tematica create(@RequestBody Tematica tematica) {
        return tematicaService.save(tematica);
    }

    @PutMapping("/{id}")
    public Tematica update(@PathVariable Long id, @RequestBody Tematica tematica) {
        return tematicaService.update(id, tematica);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        tematicaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}