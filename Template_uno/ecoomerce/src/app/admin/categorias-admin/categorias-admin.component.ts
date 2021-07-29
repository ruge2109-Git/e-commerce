import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria, Categorias } from 'src/app/states/categorias/categoria.model';
interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Categoria[];
}
@Component({
  selector: 'app-categorias-admin',
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.scss']
})
export class CategoriasAdminComponent implements OnInit {

  public categoriasTotales: Categoria[] = [];
  public categoriasEnPantalla: Categoria[] = [];
  public cantidadPaginas: Paginacion[] = [];
  public cargaCategorias: boolean = false;
  public categoriaActual?: Categoria;
  public imagenActual?: any;

  public frmCategoria: FormGroup;
  public previewImagenBoolean: boolean = false;


  @ViewChild("inputFiltro", { static: true }) inputFiltro!: ElementRef;
  @ViewChild("modalEditarCategoria", { static: false }) modalEditarCategoria!: ElementRef;
  @ViewChild("previewImagen", { static: false }) previewImagen!: ElementRef;

  constructor(
    private _categoriaService: CategoriaService
  ) {
    this.frmCategoria = this.newFormGroup();

  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.cargaCategorias = true;
    this._categoriaService.obtenerTodasLasCategorias().then((data) => {
      this.cargaCategorias = false;
      if (!data.flag) {
        return;
      }
      this.categoriasTotales = data.data;
      this.paginar(this.categoriasTotales);
    })
  }

  paginar(productos: Categoria[]) {

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
      this.categoriasEnPantalla = this.cantidadPaginas[0].productos;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.categoriasEnPantalla = this.cantidadPaginas[i].productos;
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
        this.categoriasEnPantalla = this.cantidadPaginas[i + 1].productos;

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
        this.categoriasEnPantalla = this.cantidadPaginas[i - 1].productos;

      }
    }
  }

  filtrarCategoria() {
    const valor = this.inputFiltro.nativeElement.value;
    if (valor == "") {
      this.paginar(this.categoriasTotales);
      return;
    }

    const productoFiltrado = this.categoriasTotales.filter((e) =>
      (e.nombre.toLowerCase().includes(valor.toLowerCase()))
    );

    if (productoFiltrado.length > 0) {
      this.paginar(productoFiltrado);
    }
    else {
      this.categoriasEnPantalla = [];
    }


  }

  abrirModalEditar(categoria?: Categoria) {
    if (categoria) {
      this.categoriaActual = categoria;
    }
    else{
      this.categoriaActual = undefined;
    }

    this.frmCategoria = this.newFormGroup();
    this.modalEditarCategoria.nativeElement.style.opacity = 1;
    this.modalEditarCategoria.nativeElement.style.zIndex = 1;
  }

  cerrarModal() {
    this.modalEditarCategoria.nativeElement.style.opacity = 0;
    this.modalEditarCategoria.nativeElement.style.zIndex = -1;
  }

  newFormGroup() {

    if (this.categoriaActual == null) {
      return new FormGroup({
        nombre: new FormControl("", [Validators.required]),
        urlImagen: new FormControl("http://anokha.world/images/not-found.png", [Validators.required])
      });
    }
    return new FormGroup({
      nombre: new FormControl(this.categoriaActual.nombre, [Validators.required]),
      urlImagen: new FormControl(this.categoriaActual.urlImagen, [Validators.required])
    });
  }

  obtenerPropiedadFormGroup(xPropiedad: string) {
    return this.frmCategoria.get(xPropiedad);
  }

  async guardarImagen() {
    let urlImagen = "";
    await this._categoriaService.subirImagenProducto(this.imagenActual, this.categoriaActual?.codCategoria.toString()).then((data) => {
      if (!data.flag) {
        return;
      }
      urlImagen = data.msg;
    });
    return urlImagen;
  }

  cambiarImagen(files: any) {
    this.imagenActual = files.target.files[0];
    if (this.imagenActual == null) {
      return;
    }
    this.previewImagenBoolean = true;
    setTimeout(() => {
      this.previewImagen.nativeElement.src = URL.createObjectURL(this.imagenActual);
    }, 100);
  }

  async guardarCategoria() {

    if (this.categoriaActual) {
      this.guardarEditarProducto();
      return;
    }
    this.guardarNuevoProducto();
  }

  async guardarEditarProducto() {
    if (this.imagenActual != null) {
      const guardarImagen = await this.guardarImagen();
      this.frmCategoria.get('urlImagen')?.setValue(guardarImagen);
    }
    const guardarImagen = await this._categoriaService.editarCategoria(this.categoriaActual!.codCategoria, this.frmCategoria.value);
    if (!guardarImagen.data) {
      return;
    }

    this.cerrarModal();
    this.obtenerCategorias();
  }

  async guardarNuevoProducto() {
    if (this.imagenActual != null) {
      const guardarImagen = await this.guardarImagen();
      this.frmCategoria.get('urlImagen')?.setValue(guardarImagen);
    }
    const guardarImagen = await this._categoriaService.crearCategoria(this.frmCategoria.value);
    if (!guardarImagen.data) {
      return;
    }

    this.cerrarModal();
    this.obtenerCategorias();
  }

}
