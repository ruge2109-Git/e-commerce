import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CarritoCompras } from './Carrito.model';
import { AgregarAlCarrito, LimpiarCarrito, RemoverDelCarrito } from './Carrito.actions';

@State({
  name: 'carrito',
  defaults: {
    carrito: []
  }
})
export class CarritoState {

  @Selector()
  static obtenerCarritoCompras(state: CarritoCompras) { return state.carrito; }

  @Action(AgregarAlCarrito)
  agregar({ getState, patchState }: StateContext<CarritoCompras>, { payload }: AgregarAlCarrito) {
    const state = getState();
    patchState({
      carrito: [...state.carrito, payload]
    });
  }

  @Action(LimpiarCarrito)
  limpiar({ getState, patchState }: StateContext<CarritoCompras>, { }: LimpiarCarrito){
    patchState({
      carrito: []
    });
  }

  @Action(RemoverDelCarrito)
  remover({ getState, patchState }: StateContext<CarritoCompras>, { payload }: RemoverDelCarrito){
    const state = getState();

    let carritoNuevo = state.carrito.filter(m => m.cod_carrito != payload.cod_carrito);

    patchState({
      carrito: carritoNuevo
    });
  }
}
