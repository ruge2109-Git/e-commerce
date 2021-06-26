import { Carrito } from 'src/app/states/carrito/Carrito.model';
import { AgregarAlCarrito } from 'src/app/states/carrito/Carrito.actions';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Producto } from 'src/app/states/producto/Producto.model';
@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto!: Producto;

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(){
    const carrito:Carrito = {
      cantidad_comprar:1,
      producto: this.producto
    };
    this.store.dispatch(new AgregarAlCarrito(carrito));
  }


}
