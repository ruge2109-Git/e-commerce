import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateContactoDto {
    @IsString()
    @ApiProperty()
    nombres: string;

    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    asunto: string;

    @IsString()
    @ApiProperty()
    mensaje: string;

}
