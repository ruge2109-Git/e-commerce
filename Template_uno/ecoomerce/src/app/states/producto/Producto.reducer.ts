import { Action } from '@ngrx/store';
import { ProductoActions, ProductosActionsTypes } from './Producto.actions';
import { Producto } from "./Producto.model";

const initialState:Producto[] = [];

export function ProductoReducer(state: Producto[] = initialState, action: Action) {

  const accionProducto = action as ProductoActions;

  switch (accionProducto.type) {
    case ProductosActionsTypes.obtenerProductos:
      return state;

    case ProductosActionsTypes.agregarProductos:
      return accionProducto.productos;

    default:
      return state;
  }
}
