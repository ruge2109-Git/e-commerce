import {Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-total-carrito',
  templateUrl: './total-carrito.component.html',
  styleUrls: ['./total-carrito.component.scss']
})
export class TotalCarritoComponent implements OnInit {

  @Input() totalCarrito:number=0;
  @Input() entrega:number=0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
