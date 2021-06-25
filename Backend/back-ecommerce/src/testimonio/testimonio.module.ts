import { Module } from '@nestjs/common';
import { TestimonioService } from './testimonio.service';
import { TestimonioController } from './testimonio.controller';

@Module({
  controllers: [TestimonioController],
  providers: [TestimonioService]
})
export class TestimonioModule {}
