import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodesController } from './codes/codes.controller';
import { CodesService } from './codes/codes.service';

@Module({
  imports: [],
  controllers: [AppController, CodesController],
  providers: [AppService, CodesService],
})
export class AppModule {}
