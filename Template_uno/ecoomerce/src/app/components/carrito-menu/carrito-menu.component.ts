
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
      this.longitudCarrito = state.carrito.carrito.length;
      return state.carrito.carrito;
    });
  }

  ngOnInit(): void {
  }

}
