import { Injectable } from '@nestjs/common';
import { CreateDetalleFacturaDto } from './dto/create-detalle-factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle-factura.dto';

@Injectable()
export class DetalleFacturaService {
  create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    return 'This action adds a new detalleFactura';
  }

  findAll() {
    return `This action returns all detalleFactura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleFactura`;
  }

  update(id: number, updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    return `This action updates a #${id} detalleFactura`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleFactura`;
  }
}
