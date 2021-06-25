import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogRepository } from './blog.repository';

@Module({
  imports:[TypeOrmModule.forFeature([BlogRepository])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
