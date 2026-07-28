import { Tecnica } from './tecnica.model';

export interface ImagenObra {
  id: number;
  url: string;
  esPrincipal: boolean;
  orden: number;
}

export interface Obra {
  id: number;
  titulo: string;
  descripcion?: string;
  anio?: number;
  dimensiones?: string;
  precio?: number;
  disponible: boolean;
  premio?: string;
  destacada: boolean;
  fechaCreacion?: string;
  tecnica?: Tecnica;
  imagenes?: ImagenObra[];
}
