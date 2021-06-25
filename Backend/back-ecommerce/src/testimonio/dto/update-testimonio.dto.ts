import { PartialType } from '@nestjs/swagger';
import { CreateTestimonioDto } from './create-testimonio.dto';

export class UpdateTestimonioDto extends PartialType(CreateTestimonioDto) {}
