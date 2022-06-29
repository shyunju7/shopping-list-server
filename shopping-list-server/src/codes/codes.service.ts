import { Injectable } from '@nestjs/common';
import { Code } from './entities/code.entity';

@Injectable()
export class CodesService {
  private codes: Code[] = [];
}
