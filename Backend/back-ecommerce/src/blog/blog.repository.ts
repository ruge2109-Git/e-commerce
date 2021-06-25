import { Repository, EntityRepository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {}