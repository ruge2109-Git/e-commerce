import { Action } from '@ngrx/store';
import { Carrito } from "./Carrito.model";

export enum CarritoActionsTypes {
  agregarAlCarrito = '[CARRITO] Agregar al carrito',
  limpiarCarrito = '[CARRITO] Limpiar el carrito',
  removerDelCarrito = '[CARRITO] Remover del carrito',
  actualizarCarrito = '[CARRITO] Actualizar el carrito',
};

export class AgregarAlCarrito implements Action{
  readonly type = CarritoActionsTypes.agregarAlCarrito;
  constructor(public carritoNuevo: Carrito) {}
}

export class LimpiarCarrito implements Action{
  readonly type = CarritoActionsTypes.limpiarCarrito;
  constructor() {}
}

export class RemoverDelCarrito implements Action{
  readonly type = CarritoActionsTypes.removerDelCarrito;
  constructor(public payload: Carrito) {}
}

export class ActualizarCarrito implements Action {
  readonly type = CarritoActionsTypes.actualizarCarrito;
  constructor(public payload:Carrito) {}
}

export type CarritoActions=
  AgregarAlCarrito |
  LimpiarCarrito |
  RemoverDelCarrito |
  ActualizarCarrito;

