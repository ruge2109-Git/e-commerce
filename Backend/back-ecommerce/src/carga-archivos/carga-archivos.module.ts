import { Module } from '@nestjs/common';
import { CargaArchivosController } from './carga-archivos.controller';
import { CargaArchivosService } from './carga-archivos.service';

@Module({
  imports: [

  ],
  controllers: [CargaArchivosController],
  providers: [CargaArchivosService]
})
export class CargaArchivosModule { }
