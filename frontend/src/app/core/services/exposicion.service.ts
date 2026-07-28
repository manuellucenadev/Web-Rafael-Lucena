import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Exposicion } from '../models/exposicion.model';

@Injectable({ providedIn: 'root' })
export class ExposicionService {

  private readonly baseUrl = `${environment.apiUrl}/exposiciones`;

  constructor(private http: HttpClient) {}

  getAll(estado?: 'proximas' | 'pasadas'): Observable<Exposicion[]> {
    let params = new HttpParams();
    if (estado) {
      params = params.set('estado', estado);
    }
    return this.http.get<Exposicion[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Exposicion> {
    return this.http.get<Exposicion>(`${this.baseUrl}/${id}`);
  }

  create(exposicion: Partial<Exposicion>): Observable<Exposicion> {
    return this.http.post<Exposicion>(this.baseUrl, exposicion);
  }

  update(id: number, exposicion: Partial<Exposicion>): Observable<Exposicion> {
    return this.http.put<Exposicion>(`${this.baseUrl}/${id}`, exposicion);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
