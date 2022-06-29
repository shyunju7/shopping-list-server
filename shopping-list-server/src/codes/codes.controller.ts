import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('codes')
export class CodesController {
  @Post()
  createCode(@Body() data) {
    return data.code;
  }
}
