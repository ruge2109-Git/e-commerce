import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestimonioService } from './testimonio.service';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';

@Controller('testimonio')
export class TestimonioController {
  constructor(private readonly testimonioService: TestimonioService) {}

  @Post()
  create(@Body() createTestimonioDto: CreateTestimonioDto) {
    return this.testimonioService.create(createTestimonioDto);
  }

  @Get()
  findAll() {
    return this.testimonioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testimonioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestimonioDto: UpdateTestimonioDto) {
    return this.testimonioService.update(+id, updateTestimonioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testimonioService.remove(+id);
  }
}
