import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // private _carritoCompras: Carrito[] = [];

  constructor() { }

  // agregarAlCarrito(carrito:Carrito) {

  //   if (this._carritoCompras.length ===0) {
  //     this._carritoCompras.push(carrito);
  //     return;
  //   };

  //   this._carritoCompras.forEach(element => {
  //     if (carrito.producto?.cod_producto == element.producto?.cod_producto) {
  //       element.cantidad_comprar++;
  //       return;
  //     }
  //     else{
  //       this._carritoCompras.push(carrito);
  //     }
  //   });

  // }

  // limpiarCarrito(){
  //   this._carritoCompras = [];
  // }




}
