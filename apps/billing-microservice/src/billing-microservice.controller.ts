import { Controller, Get } from '@nestjs/common';
import { BillingMicroserviceService } from './billing-microservice.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class BillingMicroserviceController {
  constructor(
    private readonly billingMicroserviceService: BillingMicroserviceService,
  ) {}

  @Get()
  getHello(): string {
    return this.billingMicroserviceService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    console.warn('data from billing app with using kafka', data);
  }
}
