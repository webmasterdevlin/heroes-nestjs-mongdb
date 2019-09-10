"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://nestjsdemo:pass1234@ds149606.mlab.com:49606/nestjs_db'),
    },
];
//# sourceMappingURL=database.providers.js.map