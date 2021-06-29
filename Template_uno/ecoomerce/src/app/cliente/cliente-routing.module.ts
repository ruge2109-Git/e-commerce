import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { depth: 1 } },
  { path: 'nosotros', component: NosotrosComponent, data: { depth: 2 } },
  { path: 'productos', component: ProductosComponent, data: { depth: 3 } },
  { path: 'blog', component: BlogComponent, data: { depth: 4 } },
  { path: 'contacto', component: ContactoComponent, data: { depth: 5 } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
