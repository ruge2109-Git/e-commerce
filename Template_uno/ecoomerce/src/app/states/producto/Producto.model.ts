import { Categoria } from "../categorias/categoria.model";

export class Productos{
  productos: Producto[] = [];
}

export interface Producto{
  codProducto: number;
  codCategoria: number;
  codCategoria2: Categoria;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidadInventario: number;
  urlImagen: string;
}

