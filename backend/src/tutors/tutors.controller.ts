import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TutorsService } from './tutors.service';
import type { CreateTutorDto, UpdateTutorDto } from './tutor.interface';

@Controller('tutors')
export class TutorsController {
  constructor(private readonly tutorsService: TutorsService) {}

  @Post()
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorsService.create(createTutorDto);
  }

  @Get()
  findAll() {
    return this.tutorsService.findAll();
  }

  @Get('search')
  search(
    @Query('specialty') specialty?: string,
    @Query('minRating') minRating?: string,
    @Query('maxRate') maxRate?: string,
  ) {
    return this.tutorsService.search(
      specialty,
      minRating ? parseFloat(minRating) : undefined,
      maxRate ? parseFloat(maxRate) : undefined,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutorDto: UpdateTutorDto) {
    return this.tutorsService.update(+id, updateTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorsService.remove(+id);
  }
}
