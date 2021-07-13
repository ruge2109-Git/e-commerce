import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { ObtenerProductos } from 'src/app/states/producto/Producto.actions';
import { Producto, Productos } from 'src/app/states/producto/Producto.model';

@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.scss']
})
export class ProductosHomeComponent implements OnInit {

  public productos: Observable<Producto[]>;

  constructor(private store:Store<Productos>,private prodService:ProductoService) {

    this.prodService.obtenerTodas();

    this.store.dispatch(new ObtenerProductos());
    this.productos = this.store.select(state => {
      const productos = state.productos;
      if (productos.length < 8) {
        return state.productos;
      }
      const productosTarjetas = productos.slice(0,8);
      return productosTarjetas;
    });
  }

  ngOnInit() {
  }


}
