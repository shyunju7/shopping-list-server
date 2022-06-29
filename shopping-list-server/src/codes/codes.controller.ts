import { Body, Controller, Get, Post } from '@nestjs/common';
import { CodesService } from './codes.service';

@Controller('codes')
export class CodesController {
  constructor(private readonly codesService: CodesService) {}
  @Post()
  createCode(@Body() data) {
    return this.codesService.createCode(data);
  }
}
