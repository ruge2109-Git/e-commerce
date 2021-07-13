import { Action } from '@ngrx/store';
import { CarritoActions, CarritoActionsTypes } from './Carrito.actions';
import { Carrito } from './Carrito.model';

const initialState: Carrito[] = [];

export function CarritoReducer(state: Carrito[] = initialState, action: Action) {

  const accionCarrito = action as CarritoActions;

  switch (accionCarrito.type) {

    case CarritoActionsTypes.obtenerCarrito:
      return state;

    case CarritoActionsTypes.agregarAlCarrito:
      return agregarAlCarrito(state, accionCarrito.carritoNuevo);

    case CarritoActionsTypes.limpiarCarrito:
      return [];

    case CarritoActionsTypes.removerDelCarrito:
      return state.filter(m => m.producto.codProducto != accionCarrito.payload.producto.codProducto);

    case CarritoActionsTypes.actualizarCarrito:
      return actualizarCarrito(state, accionCarrito.payload);

    default:
      return state;
  }
}


function agregarAlCarrito(state: Carrito[], carrito: Carrito) {
  if (state.length === 0) {
    return [carrito];
  }

  let yaExiste = false;
  state.forEach(element => {
    if (element.producto.codProducto === carrito.producto.codProducto) {
      element.cantidad_comprar += carrito.cantidad_comprar;
      yaExiste = true;
    }
  });
  if (yaExiste) {
    return [...state];
  }

  return [...state, carrito];
}

function actualizarCarrito(state:Carrito[],carrito:Carrito) {
  state.forEach(element => {
    if (element.producto.codProducto === carrito.producto.codProducto) {
      element.cantidad_comprar = carrito.cantidad_comprar;
    }
  });
  return [...state];
}
