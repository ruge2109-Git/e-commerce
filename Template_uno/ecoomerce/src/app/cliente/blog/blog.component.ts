import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/states/blog/Blog.model';

interface Paginacion {
  pagina: number;
  activa: boolean;
  blogs: Blog[];
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public listaBlog:Blog[] = [];
  public listaBlogMostrar:Blog[] = [];
  public cantidadPaginas: Paginacion[] = [];


  constructor(private _blogService:BlogService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(){
    this._blogService.obtenerTodosLosBlogs().then((data)=>{
      if (!data.flag) {
        return;
      }
      this.listaBlog = data.data;
      this.paginar();
    });
  }


  paginar() {

    this.cantidadPaginas = [];
    let contador = 1;
    let cantidadProductos = this.listaBlog.length;
    let prodInicio = 0;
    let prodFinal = 4;

    while (cantidadProductos > 0) {

      const prod: Paginacion = {
        pagina: contador,
        activa: false,
        blogs: this.listaBlog.slice(prodInicio, prodFinal)
      }
      this.cantidadPaginas.push(prod);
      cantidadProductos -= 4;
      contador++;
      prodInicio = prodFinal;
      prodFinal += 4;
    }

    if (this.cantidadPaginas.length > 0) {
      this.cantidadPaginas[0].activa = true;
      this.listaBlogMostrar = this.cantidadPaginas[0].blogs;
    }

  }

  onPaginar(pagina: Paginacion) {
    for (let i = 0; i < this.cantidadPaginas.length; i++) {
      const element = this.cantidadPaginas[i];
      element.activa = false;
      if (element == pagina) {
        this.cantidadPaginas[i].activa = true;
        this.listaBlogMostrar = this.cantidadPaginas[i].blogs;
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
        this.listaBlogMostrar = this.cantidadPaginas[i + 1].blogs;

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
        this.listaBlogMostrar = this.cantidadPaginas[i - 1].blogs;

      }
    }
  }



}
