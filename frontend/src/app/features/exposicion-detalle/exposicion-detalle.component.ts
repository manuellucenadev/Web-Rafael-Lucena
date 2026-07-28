import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Exposicion } from '../../core/models/exposicion.model';
import { ExposicionService } from '../../core/services/exposicion.service';
import { ObraCardComponent } from '../galeria/obra-card/obra-card.component';

@Component({
  selector: 'app-exposicion-detalle',
  standalone: true,
  imports: [RouterLink, ObraCardComponent],
  templateUrl: './exposicion-detalle.component.html',
  styleUrl: './exposicion-detalle.component.css'
})
export class ExposicionDetalleComponent implements OnInit {

  exposicion: Exposicion | null = null;
  cargando = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private exposicionService: ExposicionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = true;
      this.cargando = false;
      return;
    }

    this.exposicionService.getById(id).subscribe({
      next: (exposicion) => {
        this.exposicion = exposicion;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  private sinTextoPrensa: string[] = [
    'Galería José Pedraza 2006',
    'El ansia de vivir'
  ];

  private anclasTextos: Record<string, string> = {
    'Emperrado': 'texto-1',
    'El Juego de la Vida': 'texto-3',
    'Taurus II': 'texto-9',
    'Taurus': 'texto-18',
    'Galería José Pedraza 2001': 'texto-22',
    'Exposición Castillo del Moral': 'texto-25'
  };

  get anclaTexto(): string | null {
    if (!this.exposicion) return null;
    if (this.sinTextoPrensa.includes(this.exposicion.titulo)) return null;
    return this.anclasTextos[this.exposicion.titulo] ?? 'sin-asignar';
  }
}