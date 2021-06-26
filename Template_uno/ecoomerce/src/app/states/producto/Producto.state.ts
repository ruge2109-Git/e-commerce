import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Categoria } from '../categorias/categoria.model';
import { ObtenerProductos } from './Producto.actions';
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
    this.llenarInformacion();
    patchState({
      productos: [...this.productos]
    });
  }


  llenarInformacion(){
    this.categorias.push({
      codCategoria: 1,
      nombre:'Brandy',
      urlImagen:'assets/images/kind-1.jpg'
    });
    this.categorias.push({
      codCategoria: 2,
      nombre:'Gin',
      urlImagen:'assets/images/kind-2.jpg'
    });
    this.categorias.push({
      codCategoria: 3,
      nombre:'Rum',
      urlImagen:'assets/images/kind-3.jpg'
    });
    this.categorias.push({
      codCategoria: 4,
      nombre:'Tequila',
      urlImagen:'assets/images/kind-4.jpg'
    });
    this.categorias.push({
      codCategoria: 5,
      nombre:'Vodka',
      urlImagen:'assets/images/kind-5.jpg'
    });
    this.categorias.push({
      codCategoria: 6,
      nombre:'Whiskey',
      urlImagen:'assets/images/kind-6.jpg'
    });

    this.productos = [
      {
        cod_producto:1,
        nombre:'Bacardi 151',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[0],
        precio:49.00,
        descripcion:'',
        url_imagen:'assets/images/prod-1.jpg'
      },
      {
        cod_producto:2,
        nombre:'Jim Beam Kentucky Straight',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[1],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-2.jpg'
      },
      {
        cod_producto:3,
        nombre:'Citadelle',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[2],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-3.jpg'
      },
      {
        cod_producto:1,
        nombre:'The Glenlivet',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[2],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-4.jpg'
      },
      {
        cod_producto:1,
        nombre:'Black Label',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[0],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-5.jpg'
      },
      {
        cod_producto:1,
        nombre:'Macallan',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[3],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-6.jpg'
      },
      {
        cod_producto:1,
        nombre:'Old Monk',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[4],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-7.jpg'
      },
      {
        cod_producto:1,
        nombre:'Jameson Irish Whiskey',
        cantidad_inventario:90,
        cod_tipo_producto: this.categorias[0],
        precio:69.00,
        descripcion:'',
        url_imagen:'assets/images/prod-8.jpg'
      }
    ];
  }
}
