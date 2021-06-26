import { ApiProperty } from '@nestjs/swagger';
import { IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsString()
    @ApiProperty()
    nombre: string | null;

    @IsString()
    @ApiProperty()
    urlImagen: string | null;
}
