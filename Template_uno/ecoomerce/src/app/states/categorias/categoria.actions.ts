import { Categoria } from "./categoria.model";

export class ObtenerCategorias {
  static readonly type = '[CATEGORIA] Obtener todos';
  constructor() { }
}

export class AgregarCategorias {
  static readonly type = '[CATEGORIA] agregar categorias';
  constructor(public categorias:Categoria[]) {}
}
