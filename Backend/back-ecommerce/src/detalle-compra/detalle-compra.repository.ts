import { Repository, EntityRepository } from 'typeorm';
import { DetalleCompra } from './entities/detalle-compra.entity';

@EntityRepository(DetalleCompra)
export class DetalleCompraRepository extends Repository<DetalleCompra> {}