import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasService } from 'src/categorias/categorias.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoRepository } from './producto.repository';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoRepository) private productoRepository: ProductoRepository,
    private _categoriaService: CategoriasService
  ) {

  }

  async create(createProductoDto: CreateProductoDto) {
    try {
      let dataNueva = this.productoRepository.create({ ...createProductoDto });
      const data = await this.productoRepository.save(dataNueva);
      const codCategoria = await this._categoriaService.findOne(dataNueva.codCategoria);
      if (codCategoria.flag) {
        data.codCategoria2 = codCategoria.data;
      }
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findAll() {
    try {
      const data = await this.productoRepository.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.productoRepository.findOne(id);

      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    try {
      const dataBuscada = await this.productoRepository.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateProductoDto);
      const codCategoria = await this._categoriaService.findOne(dataBuscada.codCategoria);
      if (codCategoria.flag) {
        dataEditada.codCategoria2 = codCategoria.data;
      }

      const data = await this.productoRepository.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.productoRepository.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
