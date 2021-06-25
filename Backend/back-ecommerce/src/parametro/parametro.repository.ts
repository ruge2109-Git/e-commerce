import { Repository, EntityRepository } from 'typeorm';
import { Parametros } from './entities/parametro.entity';

@EntityRepository(Parametros)
export class ParametroRepository extends Repository<Parametros> {}