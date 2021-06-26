import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ObtenerCategorias } from 'src/app/states/categorias/categoria.actions';
import { Categoria } from 'src/app/states/categorias/categoria.model';
import { ObtenerProductos } from 'src/app/states/producto/Producto.actions';
import { Producto } from 'src/app/states/producto/Producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public productos: Observable<Producto[]>;


  public categorias:Observable<Categoria[]>;
  public cantidadPaginas:number[] = [1];


  constructor(private store:Store,private prodService:ProductoService,private categoriaService:CategoriaService) {
    this.prodService.obtenerTodas();

    this.store.dispatch(new ObtenerProductos());
    this.productos = this.store.select(state => {
      return state.producto.productos;
    });



    this.categoriaService.obtenerTodas();
    store.dispatch(new ObtenerCategorias());
    this.categorias = this.store.select(state => {
      return state.categoria.categorias;
    });
  }

  ngOnInit() {
  }

  paginar(){

  }

}
