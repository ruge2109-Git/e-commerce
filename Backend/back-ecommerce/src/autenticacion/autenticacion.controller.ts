import { Controller, Post, Body, UseGuards} from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { CreateAutenticacionDto } from './dto/create-autenticacion.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) { }

  @UseGuards(LocalAuthGuard)
  @Post()
  async loginAuth(@Body() createAutenticacionDto: CreateAutenticacionDto) {
    return this.autenticacionService.login(createAutenticacionDto);
  }

}
