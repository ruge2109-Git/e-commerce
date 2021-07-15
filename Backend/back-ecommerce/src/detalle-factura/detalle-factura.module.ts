import { Module } from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import { DetalleFacturaController } from './detalle-factura.controller';
import { DetalleFacturaRepository } from './detalle-factura.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from 'src/producto/producto.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([DetalleFacturaRepository]),
    ProductoModule
  ],
  controllers: [DetalleFacturaController],
  providers: [DetalleFacturaService]
})
export class DetalleFacturaModule {}
