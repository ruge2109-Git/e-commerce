import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Categoria } from '../categorias/categoria.model';
import { AgregarProductos, ObtenerProductos } from './Producto.actions';
import { Producto, Productos } from './Producto.model';

@State({
  name: 'producto',
  defaults: {
    productos: []
  }
})
export class ProductoState {

  public productos:Producto[] = [];
  public categorias:Categoria[] = [];



  @Selector()
  static productos(state: Productos) { return state.productos; }

  @Action(ObtenerProductos)
  obtenerProductos({ getState, patchState }: StateContext<Productos>, { }: ObtenerProductos) {
    patchState({
      productos: [...this.productos]
    });
  }


  @Action(AgregarProductos)
  agregarCategoria({ getState, patchState }: StateContext<Productos>, { productos }: AgregarProductos) {

    patchState({
      productos: productos
    });
  }
}
