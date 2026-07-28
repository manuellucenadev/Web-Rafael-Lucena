import { Component, OnInit } from '@angular/core';
import { ObraService } from '../../core/services/obra.service';
import { Obra } from '../../core/models/obra.model';
import { ObraCardComponent } from '../galeria/obra-card/obra-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ObraCardComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  destacadas: Obra[] = [];
  cargando = true;

  constructor(private obraService: ObraService) {}

  ngOnInit(): void {
    this.obraService.getAll({ destacada: true }).subscribe({
      next: (obras) => {
        this.destacadas = obras;
        this.cargando = false;
      },
    error: () => this.cargando = false
    });
  }

}
