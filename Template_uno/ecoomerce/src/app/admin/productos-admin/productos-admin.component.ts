import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto, Productos } from 'src/app/states/producto/Producto.model';
interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Producto[];
}
@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.scss']
})
export class ProductosAdminComponent implements OnInit {

  public productosTotales: Producto[] = [];
  public productosEnPantalla: Producto[] = [];
  public cantidadPaginas: Paginacion[] = [];
  public cargaProductos: boolean = false;
  public productoActual?:Producto;
  public frmProducto:FormGroup;

  @ViewChild("inputFiltro", { static: true }) inputFiltro!: ElementRef;
  @ViewChild("modalEditarProducto", { static: false }) modalEditarProducto!: ElementRef;



  constructor(
    private _productoService: ProductoService
  ) {
    this.frmProducto = this.newFormGroup();
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.cargaProductos = true;
    this._productoService.obtenerTodosLosProductos().then((data) => {
      this.cargaProductos = false;
      if (!data.flag) {
        return;
      }
      this.productosTotales = data.data;
      this.paginar(this.productosTotales);
    })
  }


  paginar(productos: Producto[]) {

    this.cantidadPaginas = [];
    let contador = 1;
    let cantidadProductos = productos.length;
    let prodInicio = 0;
    let prodFinal = 6;

    while (cantidadProductos > 0) {

      const prod: Paginacion = {
        pagina: contador,
        activa: false,
        productos: productos.slice(prodInicio, prodFinal)
      }
      this.cantidadPaginas.push(prod);
      cantidadProductos -= 6;
      contador++;
      prodInicio = prodFinal;
      prodFinal += 6;
    }

    if (this.cantidadPaginas.length > 0) {
      this.cantidadPaginas[0].activa = true;
      this.productosEnPantalla = this.cantidadPaginas[0].productos;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.productosEnPantalla = this.cantidadPaginas[i].productos;
      }
    }
  }

  siguiente() {
    const itemActivo = this.cantidadPaginas.filter(can => can.activa);
    if (itemActivo[0].pagina == this.cantidadPaginas[this.cantidadPaginas.length - 1].pagina) {
      return;
    }

    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      if (element == itemActivo[0]) {
        element.activa = false;
        this.cantidadPaginas[i + 1].activa = true;
        this.productosEnPantalla = this.cantidadPaginas[i + 1].productos;

      }
    }

  }

  anterior() {
    const itemActivo = this.cantidadPaginas.filter(can => can.activa);
    if (itemActivo[0].pagina == 1) {
      return;
    }

    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      if (element == itemActivo[0]) {
        element.activa = false;
        this.cantidadPaginas[i - 1].activa = true;
        this.productosEnPantalla = this.cantidadPaginas[i - 1].productos;

      }
    }
  }

  filtrarProducto() {
    const valor = this.inputFiltro.nativeElement.value;
    if (valor == "") {
      this.paginar(this.productosTotales);
      return;
    }

    const productoFiltrado = this.productosTotales.filter((e) =>
      (e.nombre.toLowerCase().includes(valor.toLowerCase())) ||
      (e.codCategoria2.nombre.toLowerCase().includes(valor.toLowerCase())) ||
      (e.descripcion.toLowerCase().includes(valor.toLowerCase())) ||
      (e.precio.toString().toLowerCase().includes(valor.toLowerCase())) ||
      (e.cantidadInventario.toString().toLowerCase().includes(valor.toLowerCase()))

    );

    if (productoFiltrado.length > 0) {
      this.paginar(productoFiltrado);
    }
    else {
      this.productosEnPantalla = [];
    }


  }

  abrirModalEditar(producto:Producto) {
    this.productoActual = producto;
    this.frmProducto = this.newFormGroup();
    this.modalEditarProducto.nativeElement.style.opacity = 1;
    this.modalEditarProducto.nativeElement.style.zIndex = 1;
  }

  cerrarModal(){
    this.modalEditarProducto.nativeElement.style.opacity = 0;
    this.modalEditarProducto.nativeElement.style.zIndex = -1;
  }

  newFormGroup() {

    if (this.productoActual==null) {
      return new FormGroup({
        nombre: new FormControl("", [Validators.required]),
        codCategoria: new FormControl("", [Validators.required]),
        descripcion: new FormControl("", [Validators.required]),
        precio: new FormControl("", [Validators.required]),
        cantidadInventario: new FormControl("", [Validators.required]),
        urlImagen: new FormControl("", [Validators.required])
      });
    }
    return new FormGroup({
      nombre: new FormControl(this.productoActual.nombre, [Validators.required]),
      codCategoria: new FormControl(this.productoActual.codCategoria, [Validators.required]),
      descripcion: new FormControl(this.productoActual.descripcion, [Validators.required]),
      precio: new FormControl(this.productoActual.precio, [Validators.required]),
      cantidadInventario: new FormControl(this.productoActual.cantidadInventario, [Validators.required]),
      urlImagen: new FormControl(this.productoActual.urlImagen, [Validators.required])
    });

  }

  obtenerPropiedadFormGroup(xPropiedad: string) {
    return this.frmProducto.get(xPropiedad);
  }

  cambiarImagen(files: any){
    console.log(files.target.files);
  }

}
