"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_schema_1 = require("./hero.schema");
exports.heroesProviders = [
    {
        provide: 'HERO_MODEL',
        useFactory: (connection) => connection.model('Hero', hero_schema_1.HeroSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=hero.providers.js.map