import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { CreateOrderDto } from './app-gateway.dto';
import { KafkaProducerService } from '@app/kafka/kafka.producer.service';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly producerService: KafkaProducerService,
    private readonly apiGatewayService: ApiGatewayService,
  ) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post()
  createOrderEvent(@Body() payload: CreateOrderDto) {
    this.apiGatewayService.createOrderEvent(payload);
  }

  @Post('/kafka')
  kafkaTest(@Body() payload: CreateOrderDto) {
    return this.producerService.produce(JSON.stringify(payload));
  }
}
