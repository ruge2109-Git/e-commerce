import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ObtenerProductos } from 'src/app/states/producto/Producto.actions';
import { Producto } from 'src/app/states/producto/Producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public productos: Observable<Producto[]>;

  constructor(private store:Store) {

    this.store.dispatch(new ObtenerProductos());
    this.productos = this.store.select(state => {
      return state.producto.productos;
    });
  }

  ngOnInit() {
  }

}
