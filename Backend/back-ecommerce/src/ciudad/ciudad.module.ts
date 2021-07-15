import { Module } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { CiudadRepository } from './ciudad.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([CiudadRepository])],
  controllers: [CiudadController],
  providers: [CiudadService]
})
export class CiudadModule {}
