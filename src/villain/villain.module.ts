import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { VillainService } from './villain.service';
import { VillainsController } from './villains.controller';
import { DatabaseModule } from '../database.module';
import { villainsProviders } from './villains.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VillainsController],
  providers: [VillainService, ...villainsProviders],
})
export class VillainModule {}
