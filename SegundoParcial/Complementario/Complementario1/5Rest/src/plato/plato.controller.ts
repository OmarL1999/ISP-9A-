import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { Plato } from './entities/plato.entity';


@Controller('plato')
export class PlatoController {
  constructor(private readonly platoService: PlatoService) {}

  @Post()
  create(@Body() createPlatoDto: CreatePlatoDto) {
    return this.platoService.create(createPlatoDto);
  }

  @Get()
  findAll() : Plato[] {
    return this.platoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.platoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlatoDto: UpdatePlatoDto) {
    return this.platoService.update(+id, updatePlatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platoService.remove(+id);
  }
}
