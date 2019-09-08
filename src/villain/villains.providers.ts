import { Connection } from 'mongoose';
import { VillainSchema } from './villain.schema';

export const villainsProviders = [
  {
    provide: 'villain',
    useFactory: (connection: Connection) =>
      connection.model('Villain', VillainSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
