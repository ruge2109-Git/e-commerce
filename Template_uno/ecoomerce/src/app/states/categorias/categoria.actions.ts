import { Categoria } from "./categoria.model";
import { Action } from "@ngrx/store";

export enum CategoriasActionsTypes {
  obtenerCategorias = '[CATEGORIA] Obtener todos',
  agregarCategorias = '[CATEGORIA] agregar categorias',
};
export class ObtenerCategorias implements Action {
  readonly type = CategoriasActionsTypes.obtenerCategorias;
  constructor() { }
}

export class AgregarCategorias implements Action {
  readonly type = CategoriasActionsTypes.agregarCategorias;
  constructor(public categorias: Categoria[]) { }
}

export type CategoriaActions =
  ObtenerCategorias |
  AgregarCategorias;
