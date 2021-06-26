import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { ObtenerProductos } from 'src/app/states/producto/Producto.actions';
import { Producto } from 'src/app/states/producto/Producto.model';

@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.scss']
})
export class ProductosHomeComponent implements OnInit {

  public productos: Observable<Producto[]>;

  constructor(private store:Store,private prodService:ProductoService) {

    this.prodService.obtenerTodas();

    this.store.dispatch(new ObtenerProductos());
    this.productos = this.store.select(state => {
      const productos = state.producto.productos;
      if (productos.length < 8) {
        return state.producto.productos;
      }
      const productosTarjetas = productos.slice(0,8);
      return productosTarjetas;
    });
  }

  ngOnInit() {
  }


}
