import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { RouterModule } from '@angular/router';
import { CarritoMenuComponent } from './carrito-menu/carrito-menu.component';
import { InfoAdicionalComponent } from './info-adicional/info-adicional.component';
import { InfoBlogComponent } from './info-blog/info-blog.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosHomeComponent } from './productos-home/productos-home.component';
import { TestimoniosHomeComponent } from './testimonios-home/testimonios-home.component';
import { BlogRecienteComponent } from './blog-reciente/blog-reciente.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppbarComponent,
    CarritoMenuComponent,
    InfoAdicionalComponent,
    InfoBlogComponent,
    CategoriasComponent,
    ProductosHomeComponent,
    TestimoniosHomeComponent,
    BlogRecienteComponent,
    FooterComponent,
    TarjetaProductoComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule

  ],
  exports:[
    AppbarComponent,
    CarritoMenuComponent,
    InfoAdicionalComponent,
    InfoBlogComponent,
    CategoriasComponent,
    ProductosHomeComponent,
    TestimoniosHomeComponent,
    BlogRecienteComponent,
    FooterComponent,
    CarouselModule,
    TarjetaProductoComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
