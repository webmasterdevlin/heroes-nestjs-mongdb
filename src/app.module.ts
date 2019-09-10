// tslint:disable-next-line:no-var-requires
require('newrelic');

import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { VillainModule } from './villain/villain.module';

@Module({
  imports: [HeroModule, VillainModule],
})
export class AppModule {}
