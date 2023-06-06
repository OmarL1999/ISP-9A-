import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { PlatoModule } from '../plato/plato.module';
//  'src/estudiante/estudiante.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[PlatoModule]
})
export class MensajesWsModule {}
