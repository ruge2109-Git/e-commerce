import { Repository, EntityRepository } from 'typeorm';
import { DetalleFactura } from './entities/detalle-factura.entity';

@EntityRepository(DetalleFactura)
export class DetalleFacturaRepository extends Repository<DetalleFactura> {}