import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { FacturaRepository } from './factura.repository';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class FacturaService {
  constructor(@InjectRepository(FacturaRepository) private facturaRepository: FacturaRepository) {

  }

  async create(createFacturaDto: CreateFacturaDto) {
    try {
      let dataNueva = this.facturaRepository.create({ ...createFacturaDto });
      dataNueva.referencia = uuidv4();
      const data = await this.facturaRepository.save(dataNueva);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findAll() {
    try {
      const data = await this.facturaRepository.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.facturaRepository.findOne(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateFacturaDto: UpdateFacturaDto) {
    try {
      const dataBuscada = await this.facturaRepository.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateFacturaDto);
      const data = await this.facturaRepository.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.facturaRepository.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
