import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    @ApiProperty()
    nombre: string;

    @IsNumber()
    @ApiProperty()
    codCategoria: number;


    @IsString()
    @ApiProperty()
    descripcion: string;

    @IsString()
    @ApiProperty()
    precio: string;

    @IsNumber()
    @ApiProperty()
    cantidadInventario: number;

    @IsString()
    @ApiProperty()
    urlImagen: string;

}
