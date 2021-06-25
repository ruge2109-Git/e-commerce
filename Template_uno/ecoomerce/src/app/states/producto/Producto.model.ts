import { Categoria } from "../categorias/categoria.model";

export class Productos{
  productos: Producto[] = [];
}

export interface Producto{
  cod_producto: number;
  cod_tipo_producto: Categoria;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad_inventario: number;
  url_imagen: string;
}

