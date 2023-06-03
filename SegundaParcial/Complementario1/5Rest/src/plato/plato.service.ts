import { Injectable,  NotFoundException} from '@nestjs/common';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { Plato } from './entities/plato.entity';

@Injectable()
export class PlatoService {
  private platos: Plato[]=[
    {id:1, nombreplato:'Encebollado', estado:true},
    {id:2,  nombreplato:'Pollo Frito',  estado:true},
  ]

  create(createPlatoDto: CreatePlatoDto) {
    const plato = new Plato();
    plato.id=  Math.max( ... this.platos.map(elemento => elemento.id),0 )+1 ;
    plato.nombreplato= createPlatoDto.nombreplato;
    this.platos.push(plato);
    return plato;
  }

  findAll() : Plato[] {
    return this.platos;
  }

  findOne(id: number) {
    const plato =  this.platos.find(plato=> plato.id===id);
    if (!plato) throw new NotFoundException(`ID ${id} not found`)
    return plato;
  }

  update(id: number, updatePlatoDto: UpdatePlatoDto) {
    const { nombreplato, estado   } = updatePlatoDto;
    const plato = this.findOne(id);
    if (nombreplato) plato.nombreplato= nombreplato;
    if (estado!= undefined) plato.estado= estado;

    this.platos =  this.platos.map( elemento=> {
      if (elemento.id===id) return plato;
      return elemento;
    } )

    return plato;

  }

  remove(id: number) {
    this.findOne(id);
    this.platos =  this.platos.filter(elemento=> elemento.id!== id);
  }
}
