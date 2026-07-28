import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Exposicion } from '../../core/models/exposicion.model';
import { ExposicionService } from '../../core/services/exposicion.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-exposiciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exposiciones.component.html',
  styleUrl: './exposiciones.component.css'
})

export class ExposicionesComponent implements OnInit {

  proximas: Exposicion[] = [];
  pasadas: Exposicion[] = [];
  cargando = true;
  error = false;

  constructor(private exposicionService: ExposicionService) {}

  ngOnInit(): void {
    this.exposicionService.getAll('proximas').subscribe({
      next: (data) => {
        this.proximas = data;
        this.cargarPasadas();
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  cargarPasadas(): void {
    this.exposicionService.getAll('pasadas').subscribe({
      next: (data) => {
        this.pasadas = data;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  resolverImagen(url?: string): string | null {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    const apiBase = environment.apiUrl.replace(/\/api$/, '');
    return `${apiBase}${url}`;
  }

}