import { Module } from '@nestjs/common';

import { PlatoController } from './plato.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [PlatoController],
 
})
export class PlatoModule {}
