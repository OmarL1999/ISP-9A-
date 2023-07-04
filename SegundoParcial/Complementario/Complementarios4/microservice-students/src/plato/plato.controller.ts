import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlatoService } from './plato.service';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { PlatoMsg } from 'src/common/constants';
@Controller()
export class PlatoController {
  constructor(private readonly platoService: PlatoService) {}

  @MessagePattern(PlatoMsg.CREATE)
  create(@Payload() createPlatoDto: CreatePlatoDto) {
    return this.platoService.create(createPlatoDto);
  }

  @MessagePattern(PlatoMsg.FIND_ALL)
  findAll() {
    return this.platoService.findAll();
  }

  @MessagePattern(PlatoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.platoService.findOne(id);
  }
  @MessagePattern(PlatoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.platoService.update(payload.id, payload.createPlatoDto);
  }

  @MessagePattern(PlatoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.platoService.delete(id);
  }
}
