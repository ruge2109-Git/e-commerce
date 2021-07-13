import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Carrito, CarritoCompras } from 'src/app/states/carrito/Carrito.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-total-carrito',
  templateUrl: './total-carrito.component.html',
  styleUrls: ['./total-carrito.component.scss']
})
export class TotalCarritoComponent implements OnInit {

  public totalCarrito:number=0;
  public entrega:number=0;
  public carrito$: Observable<Carrito[]>;

  constructor(private store:Store<CarritoCompras>) {

    this.carrito$ = this.store.select(state => {
      return state.carrito;
    });

    this.carrito$.subscribe((data)=>{
      this.sumarCarrito(data);
      if (data.length>0) {
        this.entrega = 7000;
      }
    })



  }

  ngOnInit(): void {
  }

  sumarCarrito(carrito:Carrito[]){
    this.totalCarrito= carrito.reduce(function(a, b){
      return a + (b.cantidad_comprar * b.producto.precio);
    },0);
  }

}
