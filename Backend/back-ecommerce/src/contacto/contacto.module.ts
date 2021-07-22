import { Module } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';
import { ContactoRepository } from './contacto.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilidadModule } from 'src/utilidad/utilidad.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([ContactoRepository]),
    UtilidadModule
  ],
  controllers: [ContactoController],
  providers: [ContactoService]
})
export class ContactoModule {}
