import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactoRequest } from '../models/contacto.model';

@Injectable({ providedIn: 'root' })
export class ContactoService {

  private readonly baseUrl = `${environment.apiUrl}/contacto`;

  constructor(private http: HttpClient) {}

  enviar(datos: ContactoRequest): Observable<void> {
    return this.http.post<void>(this.baseUrl, datos);
  }

}