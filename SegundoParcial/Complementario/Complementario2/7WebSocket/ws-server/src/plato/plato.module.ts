import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { PlatoController } from './plato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plato } from './entities/plato.entity';



@Module({
  controllers: [PlatoController],
  providers: [PlatoService],
  imports:[ TypeOrmModule.forFeature([
  Plato
  ]) ],
  exports:[PlatoService, TypeOrmModule]
})

export class PlatoModule {}
