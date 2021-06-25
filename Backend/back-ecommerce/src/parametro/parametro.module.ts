import { Module } from '@nestjs/common';
import { ParametroService } from './parametro.service';
import { ParametroController } from './parametro.controller';

@Module({
  controllers: [ParametroController],
  providers: [ParametroService]
})
export class ParametroModule {}
