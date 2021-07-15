import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {

    @IsString()
    @ApiProperty()   
    primerNombre: string;
    
    @IsString()
    @ApiProperty()
    segundoNombre: string;
    
    @IsString()
    @ApiProperty()
    primerApellido: string;
    
    @IsString()
    @ApiProperty()
    segundoApellido: string;
    
    @IsNumber()
    @ApiProperty()
    codCiudad: number;
    
    @IsString()
    @ApiProperty()
    direccion: string;
    
    @IsNumber()
    @ApiProperty()
    codigoPostal: number;
    
    @IsString()
    @ApiProperty()
    email: string;
    
    @IsString()
    @ApiProperty()
    telefono: string;
}
