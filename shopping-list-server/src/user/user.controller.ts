import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':code')
  getUserInfo(@Param('code') userCode: string) {
    return this.userService.getUserInfo(userCode);
  }
}
