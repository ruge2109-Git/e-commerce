import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import { CreateDetalleFacturaDto } from './dto/create-detalle-factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle-factura.dto';

@Controller('detalle-factura')
export class DetalleFacturaController {
  constructor(private readonly detalleFacturaService: DetalleFacturaService) {}

  @Post()
  create(@Body() createDetalleFacturaDto: CreateDetalleFacturaDto) {
    return this.detalleFacturaService.create(createDetalleFacturaDto);
  }

  @Get()
  findAll() {
    return this.detalleFacturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleFacturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    return this.detalleFacturaService.update(+id, updateDetalleFacturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleFacturaService.remove(+id);
  }
}
