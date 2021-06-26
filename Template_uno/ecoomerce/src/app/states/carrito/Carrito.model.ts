import { Producto } from "../producto/Producto.model";

export class CarritoCompras{
  carrito: Carrito[] = [];
}

export interface Carrito{
  producto: Producto;
  cantidad_comprar: number;
}

