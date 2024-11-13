import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from '@app/kafka';
import { TestConsumer } from './consumer';

@Module({
  imports: [
    KafkaModule,
    ClientsModule.register([
      {
        name: 'BILLING_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'billing-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService, TestConsumer],
})
export class ApiGatewayModule {}
