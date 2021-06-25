import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogRepository } from './blog.repository';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {

  constructor(@InjectRepository(BlogRepository) private blogRepository: BlogRepository) {

  }

  async create(createBlogDto: CreateBlogDto) {
    try {
      let dataNueva = this.blogRepository.create({ ...createBlogDto });
      dataNueva.fecha = new Date();
      const data = await this.blogRepository.save(dataNueva);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findAll() {
    try {
      const data = await this.blogRepository.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.blogRepository.findOne(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    try {
      const dataBuscada = await this.blogRepository.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateBlogDto);
      const data = await this.blogRepository.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.blogRepository.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
