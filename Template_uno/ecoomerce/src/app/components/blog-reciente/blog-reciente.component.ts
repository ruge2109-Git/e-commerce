import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/states/blog/Blog.model';

@Component({
  selector: 'app-blog-reciente',
  templateUrl: './blog-reciente.component.html',
  styleUrls: ['./blog-reciente.component.scss']
})
export class BlogRecienteComponent implements OnInit {

  public blogs:Blog[] = [];

  constructor() { }

  ngOnInit(): void {
    this.blogs = [
      {
        codBlog:1,
        titulo:'La receta del restaurante',
        descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        fecha:'23 de abril de 2020',
        urlImagen:'assets/images/image_1.jpg'
      },
      {
        codBlog:2,
        titulo:'La receta del restaurante',
        descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        fecha:'23 de abril de 2020',
        urlImagen:'assets/images/image_2.jpg'
      },
      {
        codBlog:3,
        titulo:'La receta del restaurante',
        descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        fecha:'23 de abril de 2020',
        urlImagen:'assets/images/image_3.jpg'
      },
      {
        codBlog:4,
        titulo:'La receta del restaurante',
        descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        fecha:'23 de abril de 2020',
        urlImagen:'assets/images/image_4.jpg'
      },
    ];
  }

}
