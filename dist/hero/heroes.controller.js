"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const hero_service_1 = require("./hero.service");
const create_hero_dto_1 = require("./create-hero.dto");
const swagger_1 = require("@nestjs/swagger");
let HeroesController = class HeroesController {
    constructor(heroService) {
        this.heroService = heroService;
    }
    retrieveHeroes(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const heroes = yield this.heroService.getAllFromDb();
            return res.status(common_1.HttpStatus.OK).json(heroes);
        });
    }
    retrieveHero(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hero = yield this.heroService.getById(id);
            if (hero) {
                return hero;
            }
            else {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: 'Item Not Found',
                }, 404);
            }
        });
    }
    saveHero(res, heroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdHero = yield this.heroService.add(heroDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Hero has been created successfully',
                createdHero,
            });
        });
    }
    updateHero(id, heroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.heroService.update(id, heroDto);
        });
    }
    removeHero(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.heroService.remove(id);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'The hero has been successfully deleted.',
            });
        });
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Get all heroes' }),
    swagger_1.ApiResponse({ status: 200, description: 'Return all heroes.' }),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "retrieveHeroes", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Get a hero by id' }),
    swagger_1.ApiResponse({ status: 200, description: 'Return a hero by id.' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "retrieveHero", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Create hero' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The hero has been successfully created.',
    }),
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_hero_dto_1.CreateHeroDto]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "saveHero", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Update hero' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The hero has been successfully updated.',
    }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_hero_dto_1.CreateHeroDto]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "updateHero", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Delete hero' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The hero has been successfully deleted.',
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "removeHero", null);
HeroesController = __decorate([
    swagger_1.ApiUseTags('heroes'),
    common_1.Controller('heroes'),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesController);
exports.HeroesController = HeroesController;
//# sourceMappingURL=heroes.controller.js.map