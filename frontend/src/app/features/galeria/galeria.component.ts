import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ObraService } from '../../core/services/obra.service';
import { TematicaService } from '../../core/services/tematica.service';
import { Obra } from '../../core/models/obra.model';
import { Tematica } from '../../core/models/tematica.model';
import { ObraCardComponent } from './obra-card/obra-card.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [ObraCardComponent, FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit {

  obras: Obra[] = [];
  tematicas: Tematica[] = [];

  titulo = '';
  disponibleFiltro: boolean | null = null;
  tematicaSeleccionada: number | null = null;

  cargando = true;
  error = false;

  private tituloSubject = new Subject<string>();

  constructor(
    private obraService: ObraService,
    private tematicaService: TematicaService
  ) {
    this.tituloSubject.pipe(debounceTime(400)).subscribe(() => this.cargarObras());
  }

  ngOnInit(): void {
    this.cargarTematicas();
    this.cargarObras();
  }

  cargarTematicas(): void {
    this.tematicaService.getAll().subscribe({
      next: (tematicas) => this.tematicas = tematicas,
      error: () => { /* las temáticas son opcionales para el filtro */ }
    });
  }

  onTituloChange(valor: string): void {
    this.titulo = valor;
    this.tituloSubject.next(valor);
  }

  filtrarPorDisponibilidad(valor: boolean | null): void {
    this.disponibleFiltro = valor;
    this.cargarObras();
  }

  filtrarPorTematica(tematicaId: number | null): void {
    this.tematicaSeleccionada = tematicaId;
    this.cargarObras();
  }

  cargarObras(): void {
    this.cargando = true;
    this.error = false;

    const filtros: {
      titulo?: string;
      tematicaId?: number;
      disponible?: boolean;
    } = {};

    if (this.titulo.trim()) {
      filtros.titulo = this.titulo.trim();
    }
    if (this.tematicaSeleccionada !== null) {
      filtros.tematicaId = this.tematicaSeleccionada;
    }
    if (this.disponibleFiltro !== null) {
      filtros.disponible = this.disponibleFiltro;
    }

    this.obraService.getAll(Object.keys(filtros).length ? filtros : undefined).subscribe({
      next: (obras) => {
        this.obras = obras;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

}