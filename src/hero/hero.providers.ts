import { Connection } from 'mongoose';
import { HeroSchema } from './hero.schema';

export const heroesProviders = [
  {
    provide: 'HERO_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Hero', HeroSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
