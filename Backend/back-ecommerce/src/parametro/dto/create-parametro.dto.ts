import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateParametroDto {
    @IsString()
    @ApiProperty()
    nomBusqueda: string | null;
    
    @IsString()
    @ApiProperty()
    descripcion: string | null;
    
    @IsString()
    @ApiProperty()
    valor: string | null;
}

