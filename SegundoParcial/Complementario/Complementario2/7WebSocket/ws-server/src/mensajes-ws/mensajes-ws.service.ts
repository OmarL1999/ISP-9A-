import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Plato } from '../plato/entities/plato.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlatoService } from 'src/plato/plato.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       plato: Plato
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Plato)
     private readonly platoRepository: Repository<Plato>,
     private readonly platoService: PlatoService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.platoService.prueba());
        const plato =await  this.platoRepository.findOneBy({ nombreplato: name });
        if (!plato) throw new Error('Plato no encontrado');
        if (!plato.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, plato: plato};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].plato.nombreplato;
    }
}
