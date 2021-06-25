import { Repository, EntityRepository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';

@EntityRepository(Departamento)
export class DepartamentoRepository extends Repository<Departamento> {}