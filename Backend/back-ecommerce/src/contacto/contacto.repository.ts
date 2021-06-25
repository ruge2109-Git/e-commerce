import { Repository, EntityRepository } from 'typeorm';
import { Contacto } from './entities/contacto.entity';

@EntityRepository(Contacto)
export class ContactoRepository extends Repository<Contacto> {}