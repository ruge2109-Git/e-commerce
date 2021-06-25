import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autenticacion/guards/jwt-auth.guard';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }


  @Get()
  async findAll() {
    return await this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.blogService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return await this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.blogService.remove(+id);
  }
}
