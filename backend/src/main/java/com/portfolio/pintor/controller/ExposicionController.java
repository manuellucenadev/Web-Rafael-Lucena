package com.portfolio.pintor.controller;

import com.portfolio.pintor.model.Exposicion;
import com.portfolio.pintor.service.ExposicionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exposiciones")
@RequiredArgsConstructor
public class ExposicionController {

    private final ExposicionService exposicionService;

    @GetMapping
    public List<Exposicion> getAll(@RequestParam(required = false) String estado) {
        if ("proximas".equalsIgnoreCase(estado)) {
            return exposicionService.findProximasYActuales();
        }
        if ("pasadas".equalsIgnoreCase(estado)) {
            return exposicionService.findPasadas();
        }
        return exposicionService.findAll();
    }

    @GetMapping("/{id}")
    public Exposicion getById(@PathVariable Long id) {
        return exposicionService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Exposicion create(@RequestBody Exposicion exposicion) {
        return exposicionService.save(exposicion);
    }

    @PutMapping("/{id}")
    public Exposicion update(@PathVariable Long id, @RequestBody Exposicion exposicion) {
        return exposicionService.update(id, exposicion);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        exposicionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
