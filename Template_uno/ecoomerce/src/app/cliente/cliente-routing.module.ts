import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
