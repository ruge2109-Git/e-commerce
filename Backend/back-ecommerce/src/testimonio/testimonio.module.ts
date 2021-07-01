import { Module } from '@nestjs/common';
import { TestimonioService } from './testimonio.service';
import { TestimonioController } from './testimonio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestimonioRepository } from './testimonio.repository';

@Module({
  imports:[TypeOrmModule.forFeature([TestimonioRepository])],
  controllers: [TestimonioController],
  providers: [TestimonioService]
})
export class TestimonioModule {}
