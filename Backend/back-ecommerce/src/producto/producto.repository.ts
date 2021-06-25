import { Repository, EntityRepository } from 'typeorm';
import { Producto } from './entities/producto.entity';

@EntityRepository(Producto)
export class ProductoRepository extends Repository<Producto> {}