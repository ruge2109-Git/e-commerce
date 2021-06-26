import { Producto } from "./Producto.model";

export class ObtenerProductos {
  static readonly type = '[PRODUCTOS] Obtener todos';
  constructor() { }
}

export class AgregarProductos {
  static readonly type = '[PRODUCTOS] agregar productos';
  constructor(public productos:Producto[]) {}
}
