import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://nestjsdemo:pass1234@ds149606.mlab.com:49606/nestjs_db',
      ),
  },
];

//
// MongooseModule.forRoot(
//   'mongodb://nestjsdemo:pass1234@ds149606.mlab.com:49606/nestjs_db',
//   { useNewUrlParser: true },
// ),
