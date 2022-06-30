import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  getUserInfo(userCode: String): User {
    const user = this.users.find((user) => user.code === userCode);
    if (!user) {
      throw new NotFoundException(`This code is invalid code(#${userCode})`);
    }
    return user;
  }
}
