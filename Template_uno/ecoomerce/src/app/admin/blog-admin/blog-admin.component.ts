import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/states/blog/Blog.model';
interface Paginacion {
  pagina: number;
  activa: boolean;
  productos: Blog[];
}
@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {

  public blogsTotales: Blog[] = [];
  public blogsEnPantalla: Blog[] = [];
  public cantidadPaginas: Paginacion[] = [];
  public cargablogs: boolean = false;
  public blogActual?: Blog;
  public imagenActual?: any;

  public frmBlog: FormGroup;
  public previewImagenBoolean: boolean = false;


  @ViewChild("inputFiltro", { static: true }) inputFiltro!: ElementRef;
  @ViewChild("modalEditarBlog", { static: false }) modalEditarCategoria!: ElementRef;
  @ViewChild("previewImagen", { static: false }) previewImagen!: ElementRef;

  constructor(
    private _blogService:BlogService
  ) {
    this.frmBlog = this.newFormGroup();
  }

  ngOnInit(): void {
    this.obtenerBlogs();
  }

  obtenerBlogs() {
    this.cargablogs = true;
    this._blogService.obtenerTodosLosBlogs().then((data) => {
      this.cargablogs = false;
      if (!data.flag) {
        return;
      }
      this.blogsTotales = data.data;
      this.paginar(this.blogsTotales);
    })
  }

  paginar(blogs: Blog[]) {

    this.cantidadPaginas = [];
    let contador = 1;
    let cantidadProductos = blogs.length;
    let prodInicio = 0;
    let prodFinal = 6;

    while (cantidadProductos > 0) {

      const prod: Paginacion = {
        pagina: contador,
        activa: false,
        productos: blogs.slice(prodInicio, prodFinal)
      }
      this.cantidadPaginas.push(prod);
      cantidadProductos -= 6;
      contador++;
      prodInicio = prodFinal;
      prodFinal += 6;
    }

    if (this.cantidadPaginas.length > 0) {
      this.cantidadPaginas[0].activa = true;
      this.blogsEnPantalla = this.cantidadPaginas[0].productos;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.blogsEnPantalla = this.cantidadPaginas[i].productos;
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
        this.blogsEnPantalla = this.cantidadPaginas[i + 1].productos;

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
        this.blogsEnPantalla = this.cantidadPaginas[i - 1].productos;

      }
    }
  }

  filtrarBlog() {
    const valor = this.inputFiltro.nativeElement.value;
    if (valor == "") {
      this.paginar(this.blogsEnPantalla);
      return;
    }

    const productoFiltrado = this.blogsTotales.filter((e) =>
      (e.titulo.toLowerCase().includes(valor.toLowerCase())) ||
      (e.descripcion.toLowerCase().includes(valor.toLowerCase())) ||
      (e.fecha.toLowerCase().includes(valor.toLowerCase()))
    );

    if (productoFiltrado.length > 0) {
      this.paginar(productoFiltrado);
    }
    else {
      this.blogsEnPantalla = [];
    }


  }

  abrirModalEditar(blog?: Blog) {
    if (blog) {
      this.blogActual = blog;
    }
    else{
      this.blogActual = undefined;
    }

    this.frmBlog = this.newFormGroup();
    this.modalEditarCategoria.nativeElement.style.opacity = 1;
    this.modalEditarCategoria.nativeElement.style.zIndex = 1;
  }

  cerrarModal() {
    this.modalEditarCategoria.nativeElement.style.opacity = 0;
    this.modalEditarCategoria.nativeElement.style.zIndex = -1;
  }

  newFormGroup() {

    if (this.blogActual == null) {
      return new FormGroup({
        titulo: new FormControl("", [Validators.required]),
        descripcion: new FormControl("", [Validators.required]),
        urlImagen: new FormControl("http://anokha.world/images/not-found.png", [Validators.required])
      });
    }
    return new FormGroup({
      titulo: new FormControl(this.blogActual.titulo, [Validators.required]),
      descripcion: new FormControl(this.blogActual.descripcion, [Validators.required]),
      urlImagen: new FormControl(this.blogActual.urlImagen, [Validators.required])
    });
  }

  obtenerPropiedadFormGroup(xPropiedad: string) {
    return this.frmBlog.get(xPropiedad);
  }

  async guardarImagen() {
    let urlImagen = "";
    await this._blogService.subirImagenBlog(this.imagenActual, this.blogActual?.codBlog.toString()).then((data) => {
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

  async guardarBlog() {

    if (this.blogActual) {
      this.guardarEditarBlog();
      return;
    }
    this.guardarNuevoBlog();
  }

  async guardarEditarBlog() {
    if (this.imagenActual != null) {
      const guardarImagen = await this.guardarImagen();
      this.frmBlog.get('urlImagen')?.setValue(guardarImagen);
    }
    const guardarImagen = await this._blogService.editarBlog(this.blogActual!.codBlog, this.frmBlog.value);
    if (!guardarImagen.data) {
      return;
    }

    this.cerrarModal();
    this.obtenerBlogs();
  }

  async guardarNuevoBlog() {
    if (this.imagenActual != null) {
      const guardarImagen = await this.guardarImagen();
      this.frmBlog.get('urlImagen')?.setValue(guardarImagen);
    }
    const guardarImagen = await this._blogService.crearBlog(this.frmBlog.value);
    if (!guardarImagen.data) {
      return;
    }

    this.cerrarModal();
    this.obtenerBlogs();
  }



}
