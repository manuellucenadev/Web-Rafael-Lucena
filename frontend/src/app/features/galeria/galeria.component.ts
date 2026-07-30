import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ObraService } from '../../core/services/obra.service';
import { TematicaService } from '../../core/services/tematica.service';
import { Obra } from '../../core/models/obra.model';
import { Tematica } from '../../core/models/tematica.model';
import { ObraCardComponent } from './obra-card/obra-card.component';
import { ScrollPositionService } from '../../core/services/scroll-position.service';

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
  private readonly scrollKey = 'galeria';

  constructor(
    private obraService: ObraService,
    private tematicaService: TematicaService,
    private scrollPositionService: ScrollPositionService
  ) {
    this.tituloSubject.pipe(debounceTime(400)).subscribe(() => this.cargarObras());
  }

  ngOnInit(): void {
    this.cargarTematicas();
    this.cargarObras();
  }

  @HostListener('window:beforeunload')
  guardarScrollAntesDeSalir(): void {
    this.scrollPositionService.save(this.scrollKey, window.scrollY);
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
        this.restaurarScrollSiExiste();
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  private restaurarScrollSiExiste(): void {
    const posicion = this.scrollPositionService.get(this.scrollKey);
    if (posicion !== undefined) {
      setTimeout(() => window.scrollTo({ top: posicion, behavior: 'auto' }), 50);
    }
  }

}