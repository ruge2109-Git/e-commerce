import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCiudadDto {

    @IsNumber()
    @ApiProperty()    
    codDepartamento: number
    
    @IsString()
    @ApiProperty()
    nomCiudad: string | null;
}
