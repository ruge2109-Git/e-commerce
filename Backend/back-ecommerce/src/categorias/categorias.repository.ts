import { Repository, EntityRepository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria> {}