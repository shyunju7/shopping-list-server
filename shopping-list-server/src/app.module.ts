import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodesController } from './codes/codes.controller';
import { CodesService } from './codes/codes.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, CodesController, UserController],
  providers: [AppService, CodesService, UserService],
})
export class AppModule {}
