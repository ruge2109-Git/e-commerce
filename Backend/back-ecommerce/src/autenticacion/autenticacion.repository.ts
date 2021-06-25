import { Repository, EntityRepository } from 'typeorm';
import { Autenticacion } from './entities/autenticacion.entity';

@EntityRepository(Autenticacion)
export class AutenticacionRepository extends Repository<Autenticacion> {}