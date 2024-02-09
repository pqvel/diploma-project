import { Controller, Get, Req, Res, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(@Req() req: Request, @Res() res: Response): string {
    return res;
  }
}
