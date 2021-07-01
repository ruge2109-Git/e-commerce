import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './../components/components.module';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    BlogComponent,
    ContactoComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ComponentsModule,
    NgxImageZoomModule,
    FormsModule
  ]
})
export class ClienteModule { }
