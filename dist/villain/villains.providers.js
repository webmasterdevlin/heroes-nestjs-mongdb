"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const villain_schema_1 = require("./villain.schema");
exports.villainsProviders = [
    {
        provide: 'VILLAIN_MODEL',
        useFactory: (connection) => connection.model('Villain', villain_schema_1.VillainSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=villains.providers.js.map