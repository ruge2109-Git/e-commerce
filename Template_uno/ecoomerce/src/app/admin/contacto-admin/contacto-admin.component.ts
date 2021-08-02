import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Contacto[];
}
@Component({
  selector: 'app-contacto-admin',
  templateUrl: './contacto-admin.component.html',
  styleUrls: ['./contacto-admin.component.scss']
})
export class ContactoAdminComponent implements OnInit {

  public contactosTotales: Contacto[] = [];
  public contactosEnPantalla: Contacto[] = [];
  public cantidadPaginas: Paginacion[] = [];
  public cargaContactos: boolean = false;

  @ViewChild("inputFiltro", { static: true }) inputFiltro!: ElementRef;


  constructor(
    private _contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.obtenerContactos();
  }

  obtenerContactos() {
    this.cargaContactos = true;
    this._contactoService.obtenerTodos().then((data) => {
      this.cargaContactos = false;
      if (!data.flag) {
        return;
      }
      this.contactosTotales = data.data;
      this.paginar(this.contactosTotales);
    })
  }

  paginar(clientes: Contacto[]) {

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
      this.contactosEnPantalla = this.cantidadPaginas[0].productos;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.contactosEnPantalla = this.cantidadPaginas[i].productos;
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
        this.contactosEnPantalla = this.cantidadPaginas[i + 1].productos;

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
        this.contactosEnPantalla = this.cantidadPaginas[i - 1].productos;

      }
    }
  }

  filtrarCategoria() {
    const valor = this.inputFiltro.nativeElement.value;
    if (valor == "") {
      this.paginar(this.contactosTotales);
      return;
    }

    const productoFiltrado = this.contactosTotales.filter((e) =>
      (e.nombres.toLowerCase().includes(valor.toLowerCase())) ||
      (e.mensaje.toLowerCase().includes(valor.toLowerCase())) ||
      (e.email.toLowerCase().includes(valor.toLowerCase())) ||
      (e.asunto.toLowerCase().includes(valor.toLowerCase()))
    );

    if (productoFiltrado.length > 0) {
      this.paginar(productoFiltrado);
    }
    else {
      this.contactosEnPantalla = [];
    }


  }

}
