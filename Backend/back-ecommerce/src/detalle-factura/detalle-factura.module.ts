import { Module } from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import { DetalleFacturaController } from './detalle-factura.controller';

@Module({
  controllers: [DetalleFacturaController],
  providers: [DetalleFacturaService]
})
export class DetalleFacturaModule {}
