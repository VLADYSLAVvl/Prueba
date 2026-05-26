export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

export interface Entrada {
  id: number;
  evento: string;
  fecha: string;
  precio: number;
  estado: string; // 'Disponible' o 'Comprada'
  usuarioId?: number;
}