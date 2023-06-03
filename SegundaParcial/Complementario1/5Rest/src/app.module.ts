import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { PlatoModule } from './plato/plato.module';

@Module({
  imports: [EstudianteModule, PlatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
