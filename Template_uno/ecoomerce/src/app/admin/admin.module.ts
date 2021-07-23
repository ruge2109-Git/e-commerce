import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriasAdminComponent } from './categorias-admin/categorias-admin.component';
import { ProductosAdminComponent } from './productos-admin/productos-admin.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { ContactoAdminComponent } from './contacto-admin/contacto-admin.component';
import { ParametrosAdminComponent } from './parametros-admin/parametros-admin.component';
import { ConfiguracionAdminComponent } from './configuracion-admin/configuracion-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginAdminComponent,
    DashboardComponent,
    CategoriasAdminComponent,
    ProductosAdminComponent,
    InicioAdminComponent,
    BlogAdminComponent,
    ClientesAdminComponent,
    ContactoAdminComponent,
    ParametrosAdminComponent,
    ConfiguracionAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
