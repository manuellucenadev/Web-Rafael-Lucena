import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Tecnica } from '../models/tecnica.model';

@Injectable({ providedIn: 'root' })
export class TecnicaService {

  private readonly baseUrl = `${environment.apiUrl}/tecnicas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tecnica[]> {
    return this.http.get<Tecnica[]>(this.baseUrl);
  }

  getById(id: number): Observable<Tecnica> {
    return this.http.get<Tecnica>(`${this.baseUrl}/${id}`);
  }

}
