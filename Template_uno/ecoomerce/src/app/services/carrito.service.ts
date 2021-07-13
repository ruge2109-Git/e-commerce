import { AgregarAlCarrito } from 'src/app/states/carrito/Carrito.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Carrito, CarritoCompras } from '../states/carrito/Carrito.model';
import { Producto } from 'src/app/states/producto/Producto.model';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private _store:Store<CarritoCompras>) { }

  agregarAlCarrito(producto:Producto, cantidad:number){
    const carrito:Carrito = {
      cantidad_comprar:cantidad,
      producto: producto
    };
    this._store.dispatch(new AgregarAlCarrito(carrito));
  }
}
