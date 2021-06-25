import { Producto } from "../producto/Producto.model";

export class CarritoCompras{
  carrito: Carrito[] = [];
}

export interface Carrito{
  cod_carrito:number;
  producto: Producto;
  cantidad_comprar: number;
}

