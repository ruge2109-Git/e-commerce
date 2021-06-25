import { Repository, EntityRepository } from 'typeorm';
import { Factura } from './entities/factura.entity';

@EntityRepository(Factura)
export class FacturaRepository extends Repository<Factura> {}