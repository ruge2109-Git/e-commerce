import { Producto } from "../producto/Producto.model";

export interface CarritoCompras{
  readonly carrito:Carrito[];
}

export interface Carrito{
  producto: Producto;
  cantidad_comprar: number;
}

