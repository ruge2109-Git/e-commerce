import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  
  constructor(@InjectRepository(ClienteRepository) private clienteRepository: ClienteRepository) {}
  
  async create(createClienteDto: CreateClienteDto) {
    try {

      const dataBuscada = await this.findByEmail(createClienteDto.email);
      if (dataBuscada.flag) {
        return this.update(dataBuscada.data[0].codCliente,createClienteDto);
      }

      const dataNueva = this.clienteRepository.create({ ...createClienteDto });
      const data = await this.clienteRepository.save(dataNueva);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      console.log(error);
      return { "flag": false, "msg": "Error" };
    }
  }

  async findAll() {
    try {
      const data = await this.clienteRepository.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.clienteRepository.findOne(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findByEmail(email:string){
    try {
      const data = await this.clienteRepository.find({
        email:email
      });
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    try {
      const dataBuscada = await this.clienteRepository.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateClienteDto);
      const data = await this.clienteRepository.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.clienteRepository.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
