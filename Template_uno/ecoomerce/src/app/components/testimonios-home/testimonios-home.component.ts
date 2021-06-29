import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Testimonio } from 'src/app/states/testimonio/Testimonio.model';

@Component({
  selector: 'app-testimonios-home',
  templateUrl: './testimonios-home.component.html',
  styleUrls: ['./testimonios-home.component.scss']
})
export class TestimoniosHomeComponent implements OnInit {

  customOptions: OwlOptions = {
    center: true,
    loop: true,
    autoplay: true,
    autoplaySpeed:2000,
    items:1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  }

  public testimonios:Testimonio[] = [];


  constructor() { }

  ngOnInit(): void {
    this.testimonios = [
      {
        cod_testimonio:1,
        nombre:'Jonathan Ruge',
        cargo:'Marketing manager',
        testimonio:'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        url_imagen:'assets/images/person_1.jpg'
      },
      {
        cod_testimonio:2,
        nombre:'Jonathan Ruge',
        cargo:'Marketing manager',
        testimonio:'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        url_imagen:'assets/images/person_2.jpg'
      },
      {
        cod_testimonio:3,
        nombre:'Jonathan Ruge',
        cargo:'Marketing manager',
        testimonio:'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        url_imagen:'assets/images/person_3.jpg'
      },
      {
        cod_testimonio:4,
        nombre:'Jonathan Ruge',
        cargo:'Marketing manager',
        testimonio:'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        url_imagen:'assets/images/person_4.jpg'
      },
      {
        cod_testimonio:5,
        nombre:'Jonathan Ruge',
        cargo:'Marketing manager',
        testimonio:'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        url_imagen:'assets/images/person_1.jpg'
      },
      {
        cod_testimonio:6,
        nombre:'Jonathan Ruge',
        cargo:'Marketing manager',
        testimonio:'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        url_imagen:'assets/images/person_2.jpg'
      },
    ];
  }

}
