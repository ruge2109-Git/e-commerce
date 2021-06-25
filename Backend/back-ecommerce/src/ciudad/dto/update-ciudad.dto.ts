import { PartialType } from '@nestjs/swagger';
import { CreateCiudadDto } from './create-ciudad.dto';

export class UpdateCiudadDto extends PartialType(CreateCiudadDto) {}
