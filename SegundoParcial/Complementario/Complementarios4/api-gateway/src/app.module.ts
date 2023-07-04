import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentModule } from './student/student.module';
import { PlatoModule } from './plato/plato.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),

   
    StudentModule,
    PlatoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
