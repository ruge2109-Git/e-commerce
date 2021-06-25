import { Repository, EntityRepository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@EntityRepository(Ciudad)
export class CiudadRepository extends Repository<Ciudad> {}