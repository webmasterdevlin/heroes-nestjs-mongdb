import { Connection } from 'mongoose';
import { VillainSchema } from './villain.schema';

export const villainsProviders = [
  {
    provide: 'VILLAIN_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Villain', VillainSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
