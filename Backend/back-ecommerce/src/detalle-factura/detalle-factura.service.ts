import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleFacturaRepository } from './detalle-factura.repository';
import { CreateDetalleFacturaDto } from './dto/create-detalle-factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle-factura.dto';
import { ProductoService } from 'src/producto/producto.service';
import { Producto } from 'src/producto/entities/producto.entity';
@Injectable()
export class DetalleFacturaService {

  constructor(
    @InjectRepository(DetalleFacturaRepository) private detalleFacturaRepository: DetalleFacturaRepository,
    private readonly productoService: ProductoService) {

  }

  async create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    try {
      let dataNueva = this.detalleFacturaRepository.create({ ...createDetalleFacturaDto });
      const data = await this.detalleFacturaRepository.save(dataNueva);

      const productoBuscado = await this.productoService.findOne(createDetalleFacturaDto.codProducto);
      let productoInventario:Producto=null;
      if (productoBuscado.flag) {
        productoInventario = productoBuscado.data;
        productoInventario.cantidadInventario= productoInventario.cantidadInventario-createDetalleFacturaDto.cantidad;
        this.productoService.update(productoInventario.codProducto,productoInventario);
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
      const data = await this.detalleFacturaRepository.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.detalleFacturaRepository.findOne(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    try {
      const dataBuscada = await this.detalleFacturaRepository.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateDetalleFacturaDto);
      const data = await this.detalleFacturaRepository.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.detalleFacturaRepository.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
