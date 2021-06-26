import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Carrito, CarritoCompras } from './Carrito.model';
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

    if (state.carrito.length === 0) {
      patchState({
        carrito: [...state.carrito, payload]
      });
    };

    let carritoNuevo = state.carrito;
    let yaExiste = false;

    carritoNuevo.forEach(element => {
      if (payload.producto?.codProducto == element.producto?.codProducto) {

        const cantidad = element.cantidad_comprar + 1;
        const carritoModificado: Carrito = {
          cantidad_comprar: cantidad,
          producto: element.producto
        };

        const carritoModificado_dos = carritoNuevo.filter(m => m.producto.codProducto != carritoModificado.producto.codProducto);

        patchState({
          carrito: [...carritoModificado_dos, carritoModificado]
        });
        yaExiste = true;
      }
    });

    if (!yaExiste) patchState({ carrito: [...carritoNuevo, payload] });


  }

  @Action(LimpiarCarrito)
  limpiar({ getState, patchState }: StateContext<CarritoCompras>, { }: LimpiarCarrito) {
    patchState({
      carrito: []
    });
  }

  @Action(RemoverDelCarrito)
  remover({ getState, patchState }: StateContext<CarritoCompras>, { payload }: RemoverDelCarrito) {
    const state = getState();

    let carritoNuevo = state.carrito.filter(m => m.producto.codProducto != payload.producto.codProducto);

    patchState({
      carrito: carritoNuevo
    });
  }
}
