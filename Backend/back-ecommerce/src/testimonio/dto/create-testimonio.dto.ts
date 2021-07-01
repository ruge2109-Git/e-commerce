import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from "class-validator";

export class CreateTestimonioDto {

    @IsString()
    @ApiProperty()
    nombre: string;

    @IsString()
    @ApiProperty()
    cargo: string;

    @IsString()
    @ApiProperty()
    urlImagen: string;

    @ApiProperty()
    @IsNumber()
    codProducto: number;

    @IsString()
    @ApiProperty()
    testimonio: string;

    @IsString()
    @ApiProperty()
    puntuacion: number;
}
