import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/app/states/carrito/Carrito.model';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public carrito: Observable<Carrito[]>;

  constructor(private store:Store) {
    this.carrito = this.store.select(state => {
      const carrito = state.carrito.carrito;
      return carrito;
    });
  }

  ngOnInit(): void {
  }

}
