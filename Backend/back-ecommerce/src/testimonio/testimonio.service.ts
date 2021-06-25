import { Injectable } from '@nestjs/common';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';

@Injectable()
export class TestimonioService {
  create(createTestimonioDto: CreateTestimonioDto) {
    return 'This action adds a new testimonio';
  }

  findAll() {
    return `This action returns all testimonio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testimonio`;
  }

  update(id: number, updateTestimonioDto: UpdateTestimonioDto) {
    return `This action updates a #${id} testimonio`;
  }

  remove(id: number) {
    return `This action removes a #${id} testimonio`;
  }
}
