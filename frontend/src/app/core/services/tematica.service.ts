import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Tematica } from '../models/tematica.model';

@Injectable({ providedIn: 'root' })
export class TematicaService {

  private readonly baseUrl = `${environment.apiUrl}/tematicas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tematica[]> {
    return this.http.get<Tematica[]>(this.baseUrl);
  }

  getById(id: number): Observable<Tematica> {
    return this.http.get<Tematica>(`${this.baseUrl}/${id}`);
  }

}