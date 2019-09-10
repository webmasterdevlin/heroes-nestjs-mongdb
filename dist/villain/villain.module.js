"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const villain_service_1 = require("./villain.service");
const villains_controller_1 = require("./villains.controller");
const database_module_1 = require("../database.module");
const villains_providers_1 = require("./villains.providers");
let VillainModule = class VillainModule {
};
VillainModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [villains_controller_1.VillainsController],
        providers: [villain_service_1.VillainService, ...villains_providers_1.villainsProviders],
    })
], VillainModule);
exports.VillainModule = VillainModule;
//# sourceMappingURL=villain.module.js.map