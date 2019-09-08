"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database.module");
const heroes_controller_1 = require("./heroes.controller");
const hero_service_1 = require("./hero.service");
const hero_providers_1 = require("./hero.providers");
let HeroModule = class HeroModule {
};
HeroModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [heroes_controller_1.HeroesController],
        providers: [hero_service_1.HeroService, ...hero_providers_1.heroesProviders],
        exports: [hero_service_1.HeroService],
    })
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map