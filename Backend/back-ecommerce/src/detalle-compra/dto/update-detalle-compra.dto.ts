import { PartialType } from '@nestjs/swagger';
import { CreateDetalleCompraDto } from './create-detalle-compra.dto';

export class UpdateDetalleCompraDto extends PartialType(CreateDetalleCompraDto) {}
