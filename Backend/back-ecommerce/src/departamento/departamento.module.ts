import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { DepartamentoRepository } from './departamento.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([DepartamentoRepository])],
  controllers: [DepartamentoController],
  providers: [DepartamentoService]
})
export class DepartamentoModule {}
