import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
