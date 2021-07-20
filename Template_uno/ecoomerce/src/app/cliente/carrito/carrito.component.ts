import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito, CarritoCompras } from 'src/app/states/carrito/Carrito.model';
import { ActualizarCarrito, RemoverDelCarrito } from 'src/app/states/carrito/Carrito.actions';
import { CarritoService } from 'src/app/services/carrito.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public carrito: Observable<Carrito[]>;
  public totalCarrito: number = 0;
  public cantidadEnvio: number = 0;

  constructor(private _carritoService: CarritoService, private store: Store<CarritoCompras>, private toastr: ToastrService) {
    this.carrito = this.store.select(state => {
      this._carritoService.obtenerTotalCarrito().then((data) => {
        this.totalCarrito = data;
        if (data > 0) {
          this.cantidadEnvio = 7000;
        }
      });
      return state.carrito;
    });
  }

  ngOnInit(): void {
  }

  quitarDelCarrito(carrito: Carrito) {
    this.store.dispatch(new RemoverDelCarrito(carrito));
    this.toastr.info("Se ha eliminado el producto "+carrito.producto.nombre+" del carrito de compras",'Info');
  }

  actualizarCarrito(carrito: Carrito, cantidadNueva: string) {
    carrito.cantidad_comprar = parseInt(cantidadNueva);
    this.store.dispatch(new ActualizarCarrito(carrito));
  }






}
