import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  //Configuracion validators
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  //Configuracion swagger
  const options = new DocumentBuilder()
    .setTitle('Api rest Ecommerce básico')
    .setDescription('')
    .setVersion('1.0')
    .addTag('ecommerce')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
