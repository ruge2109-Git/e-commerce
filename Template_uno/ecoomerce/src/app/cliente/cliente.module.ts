import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './../components/components.module';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    BlogComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ComponentsModule
  ]
})
export class ClienteModule { }
