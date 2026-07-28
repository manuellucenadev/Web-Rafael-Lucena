import { Obra } from './obra.model';

export interface Exposicion {
  id: number;
  titulo: string;
  lugar?: string;
  fechaInicio?: string;
  fechaFin?: string;
  descripcion?: string;
  imagenCartel?: string;
  obras?: Obra[];
}
