import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Obra } from '../../../core/models/obra.model';
import { environment } from '../../../../environments/environment';
import { ScrollPositionService } from '../../../core/services/scroll-position.service';

@Component({
  selector: 'app-obra-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './obra-card.component.html',
  styleUrl: './obra-card.component.css'
})
export class ObraCardComponent {

  @Input({ required: true }) obra!: Obra;
  @Input() exposicionId?: number;
  @Input() desdeInicio = false;

  constructor(private scrollPositionService: ScrollPositionService) {}

  get imagenPrincipal(): string {
    const principal = this.obra.imagenes?.find(img => img.esPrincipal) ?? this.obra.imagenes?.[0];
    if (!principal) {
      return 'assets/images/placeholder-obra.jpg';
    }
    if (principal.url.startsWith('http')) {
      return principal.url;
    }
    const apiBase = environment.apiUrl.replace(/\/api$/, '');
    return `${apiBase}${principal.url}`;
  }

  get queryParams(): { from?: string | number } {
    if (this.exposicionId) return { from: this.exposicionId };
    if (this.desdeInicio) return { from: 'inicio' };
    return {};
  }

  guardarScroll(): void {
    this.scrollPositionService.save('galeria', window.scrollY);
  }

}