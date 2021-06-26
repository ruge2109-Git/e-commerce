import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Categoria, Categorias } from '../categorias/categoria.model';
import {  AgregarCategorias, ObtenerCategorias } from './categoria.actions';


@State({
  name: 'categoria',
  defaults: {
    categorias: []
  }
})
export class CategoriaState {

  public categorias:Categoria[] = [];

  @Selector()
  static productos(state: Categorias) { return state.categorias; }

  @Action(ObtenerCategorias)
  obtenerCategorias({ getState, patchState }: StateContext<Categorias>, { }: ObtenerCategorias) {
    patchState({
      categorias: [...this.categorias]
    });
  }

  @Action(AgregarCategorias)
  agregarCategoria({ getState, patchState }: StateContext<Categorias>, { categorias }: AgregarCategorias) {

    patchState({
      categorias: categorias
    });
  }


}
