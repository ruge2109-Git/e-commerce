import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ObtenerCategorias } from 'src/app/states/categorias/categoria.actions';
import { Categoria, Categorias } from 'src/app/states/categorias/categoria.model';
import { ObtenerProductos } from 'src/app/states/producto/Producto.actions';
import { Producto, Productos } from 'src/app/states/producto/Producto.model';


interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Producto[];
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public productos$: Observable<Producto[]>;
  public categorias$: Observable<Categoria[]>;

  public cantidadPaginas: Paginacion[] = [];
  public productosEnPantalla: Producto[] = [];
  public productosTotales: Producto[] = [];
  public productosTotalesCopy: Producto[] = [];

  constructor(
    private storeProductos: Store<Productos>,
    private storeCategorias: Store<Categorias>,
    private prodService: ProductoService,
    private categoriaService: CategoriaService
  ) {
    this.prodService.obtenerTodas();

    this.storeProductos.dispatch(new ObtenerProductos());
    this.productos$ = this.storeProductos.select(state => {
      return state.productos;
    });

    this.productos$.subscribe((data)=>{
      this.productosTotales = data;
      this.productosTotalesCopy = data;
      this.paginar();
    });

    this.categoriaService.obtenerTodas();
    storeCategorias.dispatch(new ObtenerCategorias());
    this.categorias$ = this.storeCategorias.select(state => {
      return state.categorias;
    });
  }

  ngOnInit() {
  }

  paginar() {

    this.cantidadPaginas = [];
    let contador = 1;
    let cantidadProductos = this.productosTotales.length;
    let prodInicio = 0;
    let prodFinal = 6;

    while (cantidadProductos > 0) {

      const prod: Paginacion = {
        pagina: contador,
        activa: false,
        productos: this.productosTotales.slice(prodInicio, prodFinal)
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

  filtrarPorCategoria(categoria: Categoria) {
    this.productosTotales = this.productosTotalesCopy.filter(m => m.codCategoria2.codCategoria == categoria.codCategoria);
    this.paginar();
  }

  quitarFiltros() {
    this.productosTotales = this.productosTotalesCopy;
    this.paginar();
  }


}
