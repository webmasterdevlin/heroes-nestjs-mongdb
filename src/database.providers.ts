import * as mongoose from 'mongoose';
/*
  username: nestjsdemo
  password: pass1234
  These needs to be in your .env file.
  You also have to create a user of your mongo database in MLAB
 */
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://nestjsdemo:pass1234@ds149606.mlab.com:49606/nestjs_db',
      ),
  },
];
