import { PartialType } from '@nestjs/swagger';
import { CreateDetalleFacturaDto } from './create-detalle-factura.dto';

export class UpdateDetalleFacturaDto extends PartialType(CreateDetalleFacturaDto) {}
