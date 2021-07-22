import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilidadService {

    constructor(private readonly mailerService: MailerService) {

    }

    enviarEmailContacto(emailContacto: string, asunto: string, mensaje: string,nombres:string,fecha:Date) {
        this.mailerService.sendMail({
            to:'jonathan.ruge.77@gmail.com',
            subject:asunto,
            template:'./contacto',
            context:{
                email:emailContacto,
                nombres:nombres,
                fecha:fecha,
                mensaje:mensaje,
            }
        })
        .then(()=>{
            console.log("Enviado correctamente");
            
        })
        .catch((e)=>{
            console.log("Error bro");
            console.log(e);
        });
    }
}
