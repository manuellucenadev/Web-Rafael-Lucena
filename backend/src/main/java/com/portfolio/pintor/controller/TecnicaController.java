package com.portfolio.pintor.controller;

import com.portfolio.pintor.model.Tecnica;
import com.portfolio.pintor.service.TecnicaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tecnicas")
@RequiredArgsConstructor
public class TecnicaController {

    private final TecnicaService tecnicaService;

    @GetMapping
    public List<Tecnica> getAll() {
        return tecnicaService.findAll();
    }

    @GetMapping("/{id}")
    public Tecnica getById(@PathVariable Long id) {
        return tecnicaService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Tecnica create(@RequestBody Tecnica tecnica) {
        return tecnicaService.save(tecnica);
    }

    @PutMapping("/{id}")
    public Tecnica update(@PathVariable Long id, @RequestBody Tecnica tecnica) {
        return tecnicaService.update(id, tecnica);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        tecnicaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
