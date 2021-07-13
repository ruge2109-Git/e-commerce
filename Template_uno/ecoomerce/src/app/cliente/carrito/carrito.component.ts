import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito, CarritoCompras } from 'src/app/states/carrito/Carrito.model';
import { ActualizarCarrito, RemoverDelCarrito } from 'src/app/states/carrito/Carrito.actions';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public carrito: Observable<Carrito[]>;

  constructor(private store:Store<CarritoCompras>) {
    this.carrito = this.store.select(state => {
      return state.carrito;
    });
  }

  ngOnInit(): void {
  }

  quitarDelCarrito(carrito:Carrito){
    this.store.dispatch(new RemoverDelCarrito(carrito));
  }

  actualizarCarrito(carrito:Carrito,cantidadNueva:string){
    carrito.cantidad_comprar = parseInt(cantidadNueva);
    this.store.dispatch(new ActualizarCarrito(carrito));
  }






}
