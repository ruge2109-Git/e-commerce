import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateFacturaDto {
    @IsNumber()
    @ApiProperty()
    codCliente: number;

    @IsString()
    @ApiProperty()
    observaciones: string | null;

    @IsNumber()
    @ApiProperty()
    precioTotal: number | null;
}
