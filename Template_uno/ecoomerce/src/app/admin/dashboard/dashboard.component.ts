import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

interface MenuDashboard {
  nombre: string;
  navegacion: string;
  icono: string;
  active:boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations:[slideInAnimation]
})
export class DashboardComponent implements OnInit {

  public listaMenu: MenuDashboard[] = [];
  @ViewChild("listaMenuResponsive", { static: false }) listaMenuResponsive!:ElementRef;


  constructor(private _route:Router) {
  }

  ngOnInit(): void {
    this.listaMenu = [
      { nombre: 'Inicio', navegacion: '/admin/inicio', icono: 'fas fa-home', active:false },
      { nombre: 'Productos', navegacion: '/admin/productos', icono: 'fas fa-shopping-cart', active:false },
      { nombre: 'Categorías', navegacion: '/admin/categorias', icono: 'fas fa-vector-square', active:false },
      { nombre: 'Blogs', navegacion: '/admin/blogs', icono: 'fas fa-blog', active:false },
      { nombre: 'Clientes', navegacion: '/admin/clientes', icono: 'fas fa-user' , active:false},
      { nombre: 'Contacto', navegacion: '/admin/contactos', icono: 'fas fa-users' , active:false},
      { nombre: 'Párametros', navegacion: '/admin/parametros', icono: 'fas fa-cubes', active:false },
      { nombre: 'Configuración', navegacion: '/admin/configuracion', icono: 'fas fa-cogs', active:false },
    ];
    this.rutaActiva();
  }

  rutaActiva(){
    this.listaMenu.forEach(element => {
      if (element.navegacion === this._route.url) {
        element.active = true;
      }
    });
  }


  cambiarActivo(menu:MenuDashboard){
    this.listaMenu.forEach((element)=>{
      element.active = false;
    });
    menu.active = true;
    this._route.navigate([menu.navegacion]);
  }

  prepareRoute(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }

  abrirMenu(){
    if (this.listaMenuResponsive.nativeElement.style.opacity == 1) {
      this.listaMenuResponsive.nativeElement.style.opacity = 0;
    }
    else{
      this.listaMenuResponsive.nativeElement.style.opacity=1;
    }
  }
}
