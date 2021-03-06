import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { VillainModule } from './villain/villain.module';

@Module({
  imports: [HeroModule, VillainModule],
})
export class AppModule {}
