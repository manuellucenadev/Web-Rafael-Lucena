import { Injectable } from '@angular/core';

export interface FiltrosGaleria {
  titulo: string;
  disponibleFiltro: boolean | null;
  tematicaSeleccionada: number | null;
}

@Injectable({ providedIn: 'root' })
export class ScrollPositionService {
  private positions = new Map<string, number>();
  private filtros: FiltrosGaleria | null = null;
  private visibles = 0;

  save(key: string, position: number): void {
    this.positions.set(key, position);
  }

  get(key: string): number | undefined {
    return this.positions.get(key);
  }

  clear(key: string): void {
    this.positions.delete(key);
  }

  saveFiltros(filtros: FiltrosGaleria): void {
    this.filtros = filtros;
  }

  getFiltros(): FiltrosGaleria | null {
    return this.filtros;
  }

  saveVisibles(n: number): void {
    this.visibles = n;
  }

  getVisibles(): number {
    return this.visibles;
  }
}