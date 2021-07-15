import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/states/producto/Producto.model';
import { CarritoService } from 'src/app/services/carrito.service';
@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto!: Producto;

  constructor(private _carritoService:CarritoService) {
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(){
    this._carritoService.agregarAlCarrito(this.producto,1);
  }


}
