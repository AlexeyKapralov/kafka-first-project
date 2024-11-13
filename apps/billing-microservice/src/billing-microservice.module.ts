import { Module } from '@nestjs/common';
import { BillingMicroserviceController } from './billing-microservice.controller';
import { BillingMicroserviceService } from './billing-microservice.service';

@Module({
  imports: [],
  controllers: [BillingMicroserviceController],
  providers: [BillingMicroserviceService],
})
export class BillingMicroserviceModule {}
