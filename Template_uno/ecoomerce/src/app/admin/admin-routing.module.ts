import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CategoriasAdminComponent } from './categorias-admin/categorias-admin.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { ConfiguracionAdminComponent } from './configuracion-admin/configuracion-admin.component';
import { ContactoAdminComponent } from './contacto-admin/contacto-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ParametrosAdminComponent } from './parametros-admin/parametros-admin.component';
import { ProductosAdminComponent } from './productos-admin/productos-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'inicio', component: InicioAdminComponent, data:{animation:'inicioAdmin'} },
      { path: 'productos', component: ProductosAdminComponent, data:{animation:'productosAdmin'} },
      { path: 'categorias', component: CategoriasAdminComponent , data:{animation:'categoriasAdmin'}},
      { path: 'blogs', component: BlogAdminComponent , data:{animation:'blogsAdmin'}},
      { path: 'clientes', component: ClientesAdminComponent , data:{animation:'clientesAdmin'}},
      { path: 'contactos', component: ContactoAdminComponent , data:{animation:'contactosAdmin'}},
      { path: 'parametros', component: ParametrosAdminComponent , data:{animation:'parametrosAdmin'}},
      { path: 'configuracion', component: ConfiguracionAdminComponent , data:{animation:'configuracionAdmin'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
