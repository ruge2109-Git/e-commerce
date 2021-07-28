import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { BlogModule } from './blog/blog.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { ClienteModule } from './cliente/cliente.module';
import { ContactoModule } from './contacto/contacto.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';
import { FacturaModule } from './factura/factura.module';
import { ParametroModule } from './parametro/parametro.module';
import { ProductoModule } from './producto/producto.module';
import { TestimonioModule } from './testimonio/testimonio.module';
import { UtilidadModule } from './utilidad/utilidad.module';
import { CargaArchivosModule } from './carga-archivos/carga-archivos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'RugePass2020*',
      database: 'ecommerce',
      entities: ["dist/**/entities/*.entity{.ts,.js}"],
      synchronize: false,
    }),
    AutenticacionModule,
    BlogModule,
    CategoriasModule,
    CiudadModule,
    ClienteModule,
    ContactoModule,
    DepartamentoModule,
    DetalleFacturaModule,
    FacturaModule,
    ParametroModule,
    ProductoModule,
    TestimonioModule,
    UtilidadModule,
    CargaArchivosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
