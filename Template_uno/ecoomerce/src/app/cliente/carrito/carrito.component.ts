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
  public totalCarrito:number = 0;
  public entrega:number = 0;

  constructor(private store:Store<CarritoCompras>) {
    this.carrito = this.store.select(state => {
      this.sumarCarrito(state.carrito);
      if (state.carrito.length>0) {
        this.entrega = 7000;
      }
      return state.carrito;
    });
  }

  ngOnInit(): void {
  }

  sumarCarrito(carrito:Carrito[]){
    this.totalCarrito= carrito.reduce(function(a, b){
      return a + (b.cantidad_comprar * b.producto.precio);
    },0);
  }

  quitarDelCarrito(carrito:Carrito){
    this.store.dispatch(new RemoverDelCarrito(carrito));
  }

  actualizarCarrito(carrito:Carrito,cantidadNueva:string){
    carrito.cantidad_comprar = parseInt(cantidadNueva);
    this.store.dispatch(new ActualizarCarrito(carrito));
  }






}
