import { Carrito } from "./Carrito.model";

export class AgregarAlCarrito{
  static readonly type = '[CARRITO] Agregar';
  constructor(public payload: Carrito) {}
}

export class LimpiarCarrito{
  static readonly type = '[CARRITO] Limpiar';
  constructor() {}
}

export class RemoverDelCarrito {
  static readonly type = '[CARRITO] Remover';
  constructor(public payload: Carrito) {}
}
