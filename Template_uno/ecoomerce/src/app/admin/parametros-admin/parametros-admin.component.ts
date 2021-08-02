import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Parametro } from 'src/app/models/admin/Parametro.model';
import { ParametrosService } from 'src/app/services/parametros.service';
interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Parametro[];
}
@Component({
  selector: 'app-parametros-admin',
  templateUrl: './parametros-admin.component.html',
  styleUrls: ['./parametros-admin.component.scss']
})
export class ParametrosAdminComponent implements OnInit {

  public parametrosTotales: Parametro[] = [];
  public parametrosEnPantalla: Parametro[] = [];
  public cantidadPaginas: Paginacion[] = [];
  public cargaParametros: boolean = false;

  @ViewChild("inputFiltro", { static: true }) inputFiltro!: ElementRef;


  constructor(
    private _parametroService: ParametrosService
  ) { }

  ngOnInit(): void {
    this.obtenerParametros();
  }

  obtenerParametros() {
    this.cargaParametros = true;
    this._parametroService.obtenerTodos().then((data) => {
      this.cargaParametros = false;
      if (!data.flag) {
        return;
      }
      this.parametrosTotales = data.data;
      this.paginar(this.parametrosTotales);
    })
  }

  paginar(clientes: Parametro[]) {

    this.cantidadPaginas = [];
    let contador = 1;
    let cantidadProductos = clientes.length;
    let prodInicio = 0;
    let prodFinal = 6;

    while (cantidadProductos > 0) {

      const prod: Paginacion = {
        pagina: contador,
        activa: false,
        productos: clientes.slice(prodInicio, prodFinal)
      }
      this.cantidadPaginas.push(prod);
      cantidadProductos -= 6;
      contador++;
      prodInicio = prodFinal;
      prodFinal += 6;
    }

    if (this.cantidadPaginas.length > 0) {
      this.cantidadPaginas[0].activa = true;
      this.parametrosEnPantalla = this.cantidadPaginas[0].productos;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.parametrosEnPantalla = this.cantidadPaginas[i].productos;
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
        this.parametrosEnPantalla = this.cantidadPaginas[i + 1].productos;

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
        this.parametrosEnPantalla = this.cantidadPaginas[i - 1].productos;

      }
    }
  }

  filtrarCategoria() {
    const valor = this.inputFiltro.nativeElement.value;
    if (valor == "") {
      this.paginar(this.parametrosTotales);
      return;
    }

    const productoFiltrado = this.parametrosTotales.filter((e) =>
      (e.descripcion.toLowerCase().includes(valor.toLowerCase())) ||
      (e.nomBusqueda.toLowerCase().includes(valor.toLowerCase())) ||
      (e.valor.toLowerCase().includes(valor.toLowerCase()))
    );

    if (productoFiltrado.length > 0) {
      this.paginar(productoFiltrado);
    }
    else {
      this.parametrosEnPantalla = [];
    }


  }

}
