
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Carrito} from 'src/app/states/carrito/Carrito.model';

@Component({
  selector: 'app-carrito-menu',
  templateUrl: './carrito-menu.component.html',
  styleUrls: ['./carrito-menu.component.scss']
})
export class CarritoMenuComponent implements OnInit {

  public carrito: Observable<Carrito[]>;
  public longitudCarrito:number = 0;

  constructor(private store:Store) {
    this.carrito = this.store.select(state => {
      const carrito = state.carrito.carrito;
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
