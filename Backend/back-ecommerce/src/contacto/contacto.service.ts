import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilidadService } from 'src/utilidad/utilidad.service';
import { ContactoRepository } from './contacto.repository';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';

@Injectable()
export class ContactoService {

  constructor(
    @InjectRepository(ContactoRepository) private contactoRepository: ContactoRepository,
    private _util:UtilidadService
    ) {}
  
  async create(createContactoDto: CreateContactoDto) {
    try {
      const dataNueva = this.contactoRepository.create({ ...createContactoDto });
      dataNueva.fecha = new Date();
      this._util.enviarEmailContacto(createContactoDto.email,createContactoDto.asunto,createContactoDto.mensaje,createContactoDto.nombres,dataNueva.fecha);
      const data = await this.contactoRepository.save(dataNueva);
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
      const data = await this.contactoRepository.find();
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.contactoRepository.findOne(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async update(id: number, updateContactoDto: UpdateContactoDto) {
    try {
      const dataBuscada = await this.contactoRepository.findOne(id);
      const dataEditada = Object.assign(dataBuscada, updateContactoDto);
      const data = await this.contactoRepository.save(dataEditada);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.contactoRepository.delete(id);
      if (data == null) return { "flag": false, "msg": "No hay información" };
      return { "flag": true, "msg": "Correcto", "data": data };
    }
    catch (error) {
      return { "flag": false, "msg": "Error" };
    }
  }
}
