import { Injectable } from '@nestjs/common';
import { Code } from './entities/code.entity';

@Injectable()
export class CodesService {
  private codes: Code[] = [];

  createCode(data) {
    this.codes.push({ id: this.codes.length + 1, ...data });
  }
}
