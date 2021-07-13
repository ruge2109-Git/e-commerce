
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Carrito, CarritoCompras} from 'src/app/states/carrito/Carrito.model';

@Component({
  selector: 'app-carrito-menu',
  templateUrl: './carrito-menu.component.html',
  styleUrls: ['./carrito-menu.component.scss']
})
export class CarritoMenuComponent implements OnInit {

  public carrito$: Observable<Carrito[]>;
  public longitudCarrito:number = 0;

  constructor(private store:Store<CarritoCompras>) {

    this.carrito$ = this.store.select(state => {

      const carrito = state.carrito;
      if (carrito==null) {
        return carrito;
      }

      this.longitudCarrito = carrito.length;

      if (this.longitudCarrito < 3) {
        return carrito;
      }
      return carrito.slice(0,3);
    });
  }

  ngOnInit(): void {
  }

}
