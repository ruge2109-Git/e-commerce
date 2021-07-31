import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Cliente[];
}

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.scss']
})
export class ClientesAdminComponent implements OnInit {


  public clientesTotales: Cliente[] = [];
  public clientesEnPantalla: Cliente[] = [];
  public cantidadPaginas: Paginacion[] = [];
  public cargaClientes: boolean = false;

  @ViewChild("inputFiltro", { static: true }) inputFiltro!: ElementRef;


  constructor(
    private _clienteService:ClienteService
  ) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.cargaClientes = true;
    this._clienteService.obtenerClientes().then((data) => {
      this.cargaClientes = false;
      if (!data.flag) {
        return;
      }
      this.clientesTotales = data.data;
      this.paginar(this.clientesTotales);
    })
  }

  paginar(clientes: Cliente[]) {

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
      this.clientesEnPantalla = this.cantidadPaginas[0].productos;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.clientesEnPantalla = this.cantidadPaginas[i].productos;
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
        this.clientesEnPantalla = this.cantidadPaginas[i + 1].productos;

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
        this.clientesEnPantalla = this.cantidadPaginas[i - 1].productos;

      }
    }
  }

  filtrarCategoria() {
    const valor = this.inputFiltro.nativeElement.value;
    if (valor == "") {
      this.paginar(this.clientesTotales);
      return;
    }

    const productoFiltrado = this.clientesTotales.filter((e) =>
      (e.primerNombre.toLowerCase().includes(valor.toLowerCase())) ||
      (e.segundoNombre.toLowerCase().includes(valor.toLowerCase())) ||
      (e.primerApellido.toLowerCase().includes(valor.toLowerCase())) ||
      (e.segundoApellido.toLowerCase().includes(valor.toLowerCase())) ||
      (e.email.toLowerCase().includes(valor.toLowerCase())) ||
      (e.direccion.toLowerCase().includes(valor.toLowerCase()))
    );

    if (productoFiltrado.length > 0) {
      this.paginar(productoFiltrado);
    }
    else {
      this.clientesEnPantalla = [];
    }


  }


}
