import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { AgregarAlCarrito } from 'src/app/states/carrito/Carrito.actions';
// import { Carrito, Producto, TipoProducto } from 'src/app/states/carrito/Carrito.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor(private store:Store) { }
  constructor() { }

  ngOnInit(): void {
  }

  // agregarAlCarrito(){
  //   let aleatorio = Math.random();
  //   let tipoProducto: TipoProducto ={
  //     cod_tipo_producto:1,
  //     nombre:'Bacardí'
  //   };

  //   let producto:Producto = {
  //     cod_producto:aleatorio,
  //     nombre:'Bacardi '+aleatorio,
  //     cantidad_inventario:80,
  //     cod_tipo_producto: tipoProducto,
  //     precio: 44.99,
  //     descripcion:'Fugiat voluptates quasi nemo, ipsa perferendis',
  //     url_imagen:'assets/images/prod-1.jpg'
  //   };

  //   let carritoNuevo:Carrito = {
  //     cod_carrito:1,
  //     cantidad_comprar:1,
  //     producto: producto
  //   };

  //   this.store.dispatch(new AgregarAlCarrito(carritoNuevo));

  // }

}
