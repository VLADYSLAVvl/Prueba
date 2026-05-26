import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrada } from '../models/agente';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {
  private apiUrl = 'http://localhost:8080/api/entradas';

  constructor(private http: HttpClient) { }

  getEntradasDisponibles(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(`${this.apiUrl}/disponibles`);
  }

  comprarEntrada(entradaId: number, usuarioId: number): Observable<Entrada> {
    return this.http.post<Entrada>(`${this.apiUrl}/comprar`, { entradaId, usuarioId });
  }
}