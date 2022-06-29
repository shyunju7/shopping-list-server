import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':code')
  getUserInfo(code: string) {
    return 'user all info';
  }
}
