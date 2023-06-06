import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { Plato } from './entities/plato.entity';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class PlatoService {
  private readonly logger = new Logger('PlatoService');

  constructor( 
    @InjectRepository(Plato) 
    private readonly platoRepository: Repository<Plato>,

    ){}

  
  async create(createPlatoDto: CreatePlatoDto) {
    try {
      const plato =  this.platoRepository.create(createPlatoDto);
      await this.platoRepository.save(plato);
      return plato;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.platoRepository.find({});
  }

  async findOne(id: string) {
    const plato= await  this.platoRepository.findOneBy ({ id });
    if (!plato)
      throw new NotFoundException(`plato ${id} no encontrado`);
    return plato;

  }

  async update(id: string, updatePlatoDto: UpdatePlatoDto) {
    const plato = await this.platoRepository.preload({
      id: id,
      ...updatePlatoDto
    });
    if (!plato) throw new NotFoundException(`plato ${id} no encontrado`)

    try {
      await  this.platoRepository.save(plato)
      return plato;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const plato = await this.findOne(id);
    await this.platoRepository.remove(plato);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }

}
