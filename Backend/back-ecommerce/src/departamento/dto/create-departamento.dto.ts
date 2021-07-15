import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { IsString } from 'class-validator';
export class CreateDepartamentoDto {

    @IsNumber()
    @ApiProperty()
    codDepartamento: number;

    @IsString()
    @ApiProperty()
    nombre: string ;
}
