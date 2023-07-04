import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PlatoMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { CreatePlatoDTO } from './dto/create-plato.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IPlato } from 'src/common/interfaces/plato.interface';
//import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('platos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/plato')
export class PlatoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyPlato = this.clientProxy.clientProxyPlatos();

  @Post()
  create(@Body() createPlatoDTO: CreatePlatoDTO): Observable<IPlato> {
    return this._clientProxyPlato.send(PlatoMSG.CREATE, createPlatoDTO);
  }

  @Get()
  findAll(): Observable<IPlato[]> {
    return this._clientProxyPlato.send(PlatoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPlato> {
    return this._clientProxyPlato.send(PlatoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createPlatoDTO: CreatePlatoDTO): Observable<IPlato> {
    return this._clientProxyPlato.send(PlatoMSG.UPDATE, { id, createPlatoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPlato.send(PlatoMSG.DELETE, id);
  }
}
