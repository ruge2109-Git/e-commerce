import { Controller, Post, UploadedFile, UseGuards, UseInterceptors, Param, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autenticacion/guards/jwt-auth.guard';
import { CargaArchivosService } from './carga-archivos.service';

@Controller('carga-archivos')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CargaArchivosController {
  constructor(private readonly cargaArchivosService: CargaArchivosService) {}


  @Post("/subirImgProducto")
  @UseInterceptors(
    FileInterceptor("imgProd",{
      dest:"./carga-archivos"
    })
  )
  async subirImgProducto(@UploadedFile() file,@Body() body:any){
    return await this.cargaArchivosService.subirImagen(file.path,`Prod-${body.idProducto}`, file.mimetype.toString().split("/")[1]);
  }
}
