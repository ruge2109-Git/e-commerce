import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { TestimonioService } from 'src/app/services/testimonio.service';
import { Producto } from 'src/app/states/producto/Producto.model';
import { Testimonio } from 'src/app/states/testimonio/Testimonio.model';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {


  public spinner:boolean = false;
  public producto!: Producto;
  public testimonios: Testimonio[] = [];
  public cantidadCarrito:number=1;

  constructor(
    private _route: ActivatedRoute,
    private _productoService:ProductoService,
    private _testimonioService:TestimonioService,
    private _carritoService:CarritoService) {
  }

  async ngOnInit() {
    await this.obtenerProducto(this._route.snapshot.paramMap.get('id'));
    this.obtenerTestimonios(this.producto.codProducto+"");
  }

  async obtenerProducto(id:string|null){
    this.spinner = true;
    await this._productoService.obtenerProducto(id).then(
      (data)=>{
        this.spinner = false;
        if (data.flag) {
          this.producto = data.data;
        }
      }
    )
  }

  obtenerTestimonios(id:string| null){
    this._testimonioService.obtenerTestimonioPorProducto(id).then(
      (data)=>{
        if (data.flag) {
          this.testimonios = data.data;
        }
      }
    )
  }

  modificarCantidadCarrito(accion:string){
    if (accion=="sumar") {
      this.cantidadCarrito++;
      return;
    }

    if (this.cantidadCarrito==1) return;
    this.cantidadCarrito--;

  }


  agregarAlCarrito(){
    if (this.cantidadCarrito < 1)  return;

    this._carritoService.agregarAlCarrito(this.producto,this.cantidadCarrito);

  }

  cargarTestimonioEnviado(rta:boolean){
    if (!rta) return;
    this.obtenerTestimonios(this.producto.codProducto+"");
  }



}
