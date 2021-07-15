import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateDetalleFacturaDto {
    @IsNumber()
    @ApiProperty()
    codFactura: number;
    
    @IsNumber()
    @ApiProperty()
    codProducto: number;
    
    @IsNumber()
    @ApiProperty()
    cantidad: number;
    
}
