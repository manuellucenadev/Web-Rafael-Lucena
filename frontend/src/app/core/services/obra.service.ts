import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Obra } from '../models/obra.model';

@Injectable({ providedIn: 'root' })
export class ObraService {

  private readonly baseUrl = `${environment.apiUrl}/obras`;

  constructor(private http: HttpClient) {}

  getAll(filtros?: {
    titulo?: string;
    tecnicaId?: number;
    tematicaId?: number;
    disponible?: boolean;
    destacada?: boolean;
  }): Observable<Obra[]> {
    let params = new HttpParams();
    if (filtros?.titulo) {
      params = params.set('titulo', filtros.titulo);
    }
    if (filtros?.tecnicaId !== undefined) {
      params = params.set('tecnicaId', filtros.tecnicaId);
    }
    if (filtros?.tematicaId !== undefined) {
      params = params.set('tematicaId', filtros.tematicaId);
    }
    if (filtros?.disponible !== undefined) {
      params = params.set('disponible', filtros.disponible);
    }
    if (filtros?.destacada !== undefined) {
      params = params.set('destacada', filtros.destacada);
    }
    return this.http.get<Obra[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Obra> {
    return this.http.get<Obra>(`${this.baseUrl}/${id}`);
  }

  create(obra: Partial<Obra>): Observable<Obra> {
    return this.http.post<Obra>(this.baseUrl, obra);
  }

  update(id: number, obra: Partial<Obra>): Observable<Obra> {
    return this.http.put<Obra>(`${this.baseUrl}/${id}`, obra);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}