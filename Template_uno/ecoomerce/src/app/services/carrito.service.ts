import { AgregarAlCarrito } from 'src/app/states/carrito/Carrito.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Carrito, CarritoCompras } from '../states/carrito/Carrito.model';
import { Producto } from 'src/app/states/producto/Producto.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carrito$: Observable<Carrito[]>;


  constructor(private _store: Store<CarritoCompras>) {
    this.carrito$ = this._store.select(state => {
      return state.carrito;
    });
  }

  agregarAlCarrito(producto: Producto, cantidad: number) {
    const carrito: Carrito = {
      cantidad_comprar: cantidad,
      producto: producto
    };
    this._store.dispatch(new AgregarAlCarrito(carrito));
  }

  async obtenerTotalCarrito() {

    let totalCarrito = 0;
    await this.carrito$.subscribe((data)=>{
      totalCarrito = data.reduce(function (a, b) {
        return a + (b.cantidad_comprar * b.producto.precio);
      }, 0);
    });
    return totalCarrito;
  }

  async obtenerCarrito(){
    let carrito:Carrito[]=[];
    await this.carrito$.subscribe((data)=>{
      carrito = data;
    })
    return carrito;
  }
}
