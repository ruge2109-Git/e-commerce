export class Categorias{
  categorias:Categoria[] = [];
}

export interface Categoria{
  codCategoria:number;
  nombre:string;
  urlImagen:string;
}
