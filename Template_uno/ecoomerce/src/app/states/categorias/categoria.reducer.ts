import { Action } from '@ngrx/store';
import { CategoriaActions, CategoriasActionsTypes } from './categoria.actions';
import { Categoria } from './categoria.model';

const initialState:Categoria[] = [];

export function CategoriaReducer(state: Categoria[] = initialState, action: Action) {

  const accionCategoria = action as CategoriaActions;

  switch (accionCategoria.type) {
    case CategoriasActionsTypes.obtenerCategorias:
      return state;

    case CategoriasActionsTypes.agregarCategorias:
      return accionCategoria.categorias;

    default:
      return state;
  }
}
