import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateBlogDto {

    @IsString()
    @ApiProperty()
    titulo: string | null;
    @IsString()
    @ApiProperty()
    descripcion: string | null;
    @IsString()
    @ApiProperty()
    urlImagen: string | null;
}
