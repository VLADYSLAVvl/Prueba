import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenteService } from '../../services/agente';
import { Entrada } from '../../models/agente';

@Component({
  selector: 'app-agente-frontend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agente-frontend.html',
  styleUrl: './agente-frontend.css'
})
export class AgenteFrontendComponent implements OnInit {
  listaEntradas: Entrada[] = [];
  usuarioLogueadoId = 1; 
  errorMensaje = '';
  exitoMensaje = '';

  constructor(private agenteService: AgenteService) {}

  ngOnInit(): void {
    this.obtenerEntradas();
  }

  obtenerEntradas(): void {
    this.agenteService.getEntradasDisponibles().subscribe({
      next: (datos) => this.listaEntradas = datos,
      error: (err) => {
        // Datos simulados por si el Java de tus compis está apagado
        this.listaEntradas = [
          { id: 101, evento: 'Concierto de Rock Estival', fecha: '2026-07-15', precio: 45, estado: 'Disponible' },
          { id: 102, evento: 'Ópera Magna en el Teatro', fecha: '2026-08-22', precio: 80, estado: 'Disponible' },
          { id: 103, evento: 'Festival Electrónico Nocturno', fecha: '2026-09-05', precio: 35, estado: 'Disponible' }
        ];
      }
    });
  }

  ejecutarCompra(entradaId: number): void {
    this.agenteService.comprarEntrada(entradaId, this.usuarioLogueadoId).subscribe({
      next: (resultado) => {
        this.exitoMensaje = `¡Compra realizada para: ${resultado.evento}!`;
        this.obtenerEntradas();
      },
      error: (err) => this.errorMensaje = 'No se pudo conectar al servidor Java.'
    });
  }
}