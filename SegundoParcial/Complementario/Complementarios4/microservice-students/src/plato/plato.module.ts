import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { PlatoSchema } from './schema/plato.schema';
import { PLATO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatoController } from './plato.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PLATO.name,
        useFactory: () => PlatoSchema,
      },
    ]),
  ],
  controllers: [PlatoController],
  providers: [PlatoService],
})
export class PlatoModule {}
