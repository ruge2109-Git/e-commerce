import { Module } from '@nestjs/common';
import { UtilidadService } from './utilidad.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'jonathan.ruge.02@gmail.com',
          pass: 'rucyeyvkuyvuqqkw',
        },
      },
      defaults: {
        from: '"No Reply" <jonathan.ruge.02@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    })
  ],
  providers: [
    UtilidadService
  ],
  exports: [
    UtilidadService
  ]
})
export class UtilidadModule { }
