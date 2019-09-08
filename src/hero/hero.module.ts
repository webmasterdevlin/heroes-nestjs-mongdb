import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { HeroesController } from './heroes.controller';
import { HeroService } from './hero.service';
import { heroesProviders } from './hero.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [HeroesController],
  providers: [HeroService, ...heroesProviders],
  exports: [HeroService],
})
export class HeroModule {}
