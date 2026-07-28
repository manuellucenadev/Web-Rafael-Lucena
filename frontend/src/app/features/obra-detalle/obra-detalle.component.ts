import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Obra } from '../../core/models/obra.model';
import { ObraService } from '../../core/services/obra.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-obra-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './obra-detalle.component.html',
  styleUrl: './obra-detalle.component.css'
})
export class ObraDetalleComponent implements OnInit {

  obra: Obra | null = null;
  imagenActiva: string | null = null;
  imagenLightbox: string | null = null;
  cargando = true;
  error = false;
  exposicionId: number | null = null;
  desdeInicio = false;

  constructor(
    private route: ActivatedRoute,
    private obraService: ObraService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const from = this.route.snapshot.queryParamMap.get('from');

    if (from === 'inicio') {
      this.desdeInicio = true;
    } else if (from) {
      this.exposicionId = Number(from) || null;
    }

    if (!id) {
      this.error = true;
      this.cargando = false;
      return;
    }

    this.obraService.getById(id).subscribe({
      next: (obra) => {
        this.obra = obra;
        this.imagenActiva = this.resolverUrl(
          obra.imagenes?.find(i => i.esPrincipal)?.url ?? obra.imagenes?.[0]?.url ?? null
        );
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  resolverUrl(url: string | null): string | null {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    const apiBase = environment.apiUrl.replace(/\/api$/, '');
    return `${apiBase}${url}`;
  }

  seleccionarImagen(url: string): void {
    this.imagenActiva = this.resolverUrl(url);
  }

  abrirLightbox(): void {
    this.imagenLightbox = this.imagenActiva;
  }

  cerrarLightbox(): void {
    this.imagenLightbox = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cerrarLightbox();
  }

}