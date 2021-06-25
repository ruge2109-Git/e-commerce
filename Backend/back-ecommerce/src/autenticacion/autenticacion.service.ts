import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AutenticacionRepository } from './autenticacion.repository';
import { CreateAutenticacionDto } from './dto/create-autenticacion.dto';

@Injectable()
export class AutenticacionService {

  constructor(
    @InjectRepository(AutenticacionRepository) private autenticacionRepository: AutenticacionRepository,
    private readonly jwtService: JwtService) {

  }

  async validarUsuario(usuarioBd: string, pass: string) {
    const usuario = await this.autenticacionRepository.findOne(
      {
        username: usuarioBd,
        password: pass
      }
    );

    if (!usuario) {
      return null;
    }
    const { password, ...result } = usuario;
    return result;
  }

  async login(usuario: CreateAutenticacionDto) {
    return {
      flag:true,
      token: this.jwtService.sign(usuario),
    };
  }

}
