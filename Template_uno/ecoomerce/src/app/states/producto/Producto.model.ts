import { Categoria } from "../categorias/categoria.model";

export interface Productos{
  readonly productos: Producto[];
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

