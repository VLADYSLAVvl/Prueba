import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interfaces solicitadas y sincronizadas con tu backend
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  entradas?: Entrada[];
}

export interface Entrada {
  id: number;
  evento: string;
  fecha: string;
  precio: number;
  estado: string; // 'Disponible' o 'Comprada'
  usuarioId?: number;
}

@Component({
  selector: 'app-agente-frontend',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agente-frontend.html',
  styleUrls: ['./agente-frontend.css']
})
export class AgenteFrontendComponent implements OnInit { // Aseguramos que se llame AgenteFrontendComponent
  exitoMensaje: string | null = null;
  errorMensaje: string | null = null;

  // Lista base de entradas del catálogo
  listaEntradas: Entrada[] = [
    { id: 1, evento: 'Concierto de Rock: Los Pixeles', fecha: '2026-06-15', precio: 45, estado: 'Disponible' },
    { id: 2, evento: 'Festival de Electrónica BeatDrop', fecha: '2026-07-22', precio: 80, estado: 'Disponible' },
    { id: 3, evento: 'Obra de Teatro: Código Infinito', fecha: '2026-08-05', precio: 25, estado: 'Comprada' },
    { id: 4, evento: 'Stand-up Comedy: Risas Sintácticas', fecha: '2026-05-30', precio: 15, estado: 'Disponible' }
  ];

  // Elementos filtrados que se muestran en la cuadrícula
  entradasFiltradas: Entrada[] = [];

  // Modelos de los filtros del navegador
  textoBusqueda: string = '';
  filtroEstado: string = 'todos';

  // Propiedad para la vista detallada de la entrada seleccionada
  entradaSeleccionada: Entrada | null = null;

  ngOnInit(): void {
    this.entradasFiltradas = [...this.listaEntradas];
  }

  // Método requerido por tu navegador de filtros en el HTML
  filtrarEntradas(): void {
    this.entradasFiltradas = this.listaEntradas.filter(item => {
      const coincideTexto = item.evento.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      const coincideEstado = this.filtroEstado === 'todos' || item.estado.toLowerCase() === this.filtroEstado.toLowerCase();
      return coincideTexto && coincideEstado;
    });
  }

  // Método requerido por los botones del carrusel y tarjetas para ver el detalle extendido
  verDetalle(item: Entrada): void {
    this.entradaSeleccionada = item;
    
    // Scroll automático suave hacia el contenedor detallado inferior
    setTimeout(() => {
      document.getElementById('vista-detalle')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  // Método requerido por el botón de cerrar (✕) de la vista de detalle
  cerrarDetalle(): void {
    this.entradaSeleccionada = null;
  }

  // Método para procesar la pasarela de compra de entradas
  ejecutarCompra(id: number): void {
    this.exitoMensaje = `¡Compra procesada con éxito para la entrada #${id}!`;
    
    const index = this.listaEntradas.findIndex(e => e.id === id);
    if (index !== -1) {
      this.listaEntradas[index].estado = 'Comprada';
      this.filtrarEntradas(); // Refrescar la cuadrícula en caliente
      
      if (this.entradaSeleccionada?.id === id) {
        this.entradaSeleccionada.estado = 'Comprada';
      }
    }

    setTimeout(() => this.exitoMensaje = null, 4000);
  }
}