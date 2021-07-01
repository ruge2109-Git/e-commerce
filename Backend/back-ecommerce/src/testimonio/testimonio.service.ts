import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';
import { TestimonioRepository } from './testimonio.repository';

@Injectable()
export class TestimonioService {

  constructor(@InjectRepository(TestimonioRepository) private testimonioRepo: TestimonioRepository) {

  }

  async create(createTestimonioDto: CreateTestimonioDto) {
    try {
      let dataNueva = this.testimonioRepo.create({ ...createTestimonioDto });
      dataNueva.fecha = new Date();
      const data = await this.testimonioRepo.save(dataNueva);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findAll() {
    try {
      const data = await this.testimonioRepo.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.testimonioRepo.findOne(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findByProducto(id: number) {
    try {
      const data = await this.testimonioRepo.find({
        codProducto:id
      });
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (e) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateTestimonioDto: UpdateTestimonioDto) {
    try {
      const dataBuscada = await this.testimonioRepo.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateTestimonioDto);
      const data = await this.testimonioRepo.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.testimonioRepo.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
