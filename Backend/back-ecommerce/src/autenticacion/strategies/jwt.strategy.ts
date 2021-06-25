import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constantes';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {

        if (payload.username == "jonathan" && payload.password == "clave123") {
            return { userId: payload.sub, username: payload.username };
        }
        return new UnauthorizedException({"flag":false, "msg":'credenciales erróneas'});

    }
}