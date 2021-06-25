import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/states/categorias/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categorias:Categoria[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categorias.push({
      cod_categoria: 1,
      nombre:'Brandy',
      url_img:'assets/images/kind-1.jpg'
    });
    this.categorias.push({
      cod_categoria: 2,
      nombre:'Gin',
      url_img:'assets/images/kind-2.jpg'
    });
    this.categorias.push({
      cod_categoria: 3,
      nombre:'Rum',
      url_img:'assets/images/kind-3.jpg'
    });
    this.categorias.push({
      cod_categoria: 4,
      nombre:'Tequila',
      url_img:'assets/images/kind-4.jpg'
    });
    this.categorias.push({
      cod_categoria: 5,
      nombre:'Vodka',
      url_img:'assets/images/kind-5.jpg'
    });
    this.categorias.push({
      cod_categoria: 6,
      nombre:'Whiskey',
      url_img:'assets/images/kind-6.jpg'
    });
  }

}
