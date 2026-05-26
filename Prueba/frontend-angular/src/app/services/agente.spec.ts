import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrada } from '../models/agente';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {
  // Ruta del servidor local de Java
  private apiUrl = 'http://localhost:8080/api/entradas';

  constructor(private http: HttpClient) { }

  // 1. Conseguir todas las entradas disponibles en la web
  getEntradasDisponibles(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(`${this.apiUrl}/disponibles`);
  }

  // 2. Conseguir las entradas que ha comprado un usuario concreto
  getMisEntradas(usuarioId: number): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

  // 3. Lógica para comprar una entrada
  comprarEntrada(entradaId: number, usuarioId: number): Observable<Entrada> {
    return this.http.post<Entrada>(`${this.apiUrl}/comprar`, { entradaId, usuarioId });
  }
}