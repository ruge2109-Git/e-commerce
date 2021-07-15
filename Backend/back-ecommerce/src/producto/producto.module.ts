import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoRepository } from './producto.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ProductoRepository])],
  controllers: [ProductoController],
  providers: [ProductoService],
  exports:[
    ProductoService
  ]
})
export class ProductoModule {}
