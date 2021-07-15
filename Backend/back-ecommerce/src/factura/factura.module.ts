import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaRepository } from './factura.repository';

@Module({
  imports:[TypeOrmModule.forFeature([FacturaRepository])],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
