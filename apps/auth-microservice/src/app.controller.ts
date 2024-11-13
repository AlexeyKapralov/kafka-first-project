import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  createUser(data: any): void {
    console.log('im send message to auth microservice throw KAFKA', data);
  }
}
