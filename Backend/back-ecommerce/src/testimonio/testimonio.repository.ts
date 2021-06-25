import { Repository, EntityRepository } from 'typeorm';
import { Testimonio } from './entities/testimonio.entity';

@EntityRepository(Testimonio)
export class TestimonioRepository extends Repository<Testimonio> {}