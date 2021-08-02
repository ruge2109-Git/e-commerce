import { Module } from '@nestjs/common';
import { ParametroService } from './parametro.service';
import { ParametroController } from './parametro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametroRepository } from './parametro.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ParametroRepository])],
  controllers: [ParametroController],
  providers: [ParametroService]
})
export class ParametroModule {}
