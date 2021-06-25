import { Module } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { AutenticacionController } from './autenticacion.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacionRepository } from './autenticacion.repository';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constantes';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([AutenticacionRepository]),
    PassportModule.register({
      defaultStrategy:'jwt'
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600000s' },
    }),
  ],
  controllers: [AutenticacionController],
  providers: [AutenticacionService, LocalStrategy, JwtStrategy],
  exports:[PassportModule]
})
export class AutenticacionModule {}
