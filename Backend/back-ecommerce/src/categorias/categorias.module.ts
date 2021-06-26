import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from './categorias.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CategoriaRepository])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
