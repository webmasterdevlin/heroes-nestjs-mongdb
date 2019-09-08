import { Connection } from 'mongoose';
import { HeroSchema } from './hero.schema';

export const heroesProviders = [
  {
    provide: 'hero',
    useFactory: (connection: Connection) =>
      connection.model('Hero', HeroSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
