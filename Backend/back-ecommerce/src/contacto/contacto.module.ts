import { Module } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';

@Module({
  controllers: [ContactoController],
  providers: [ContactoService]
})
export class ContactoModule {}
