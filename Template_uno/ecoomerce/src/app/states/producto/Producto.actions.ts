import { Producto } from "./Producto.model";
import { Action } from "@ngrx/store";


export enum ProductosActionsTypes {
  obtenerProductos = '[PRODUCTO] obtener todos',
  agregarProductos = '[PRODUCTO] Agregar productos',
};
export class ObtenerProductos implements Action {
  readonly type = ProductosActionsTypes.obtenerProductos;
  constructor() { }
}

export class AgregarProductos implements Action {
  readonly type = ProductosActionsTypes.agregarProductos;
  constructor(public productos: Producto[]) { }
}

export type ProductoActions =
  ObtenerProductos |
  AgregarProductos;
