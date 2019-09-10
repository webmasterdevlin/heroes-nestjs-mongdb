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
const villain_service_1 = require("./villain.service");
const create_villain_dto_1 = require("./create-villain.dto");
const swagger_1 = require("@nestjs/swagger");
let VillainsController = class VillainsController {
    constructor(villainService) {
        this.villainService = villainService;
    }
    retrieveVillains(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const villains = yield this.villainService.getAllFromDb();
            return res.status(common_1.HttpStatus.OK).json(villains);
        });
    }
    retrieveVillain(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const villain = yield this.villainService.getById(id);
            if (villain) {
                return villain;
            }
            else {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: 'Item Not Found',
                }, 404);
            }
        });
    }
    saveVillain(res, villainDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdVillain = yield this.villainService.add(villainDto);
            return res.status(common_1.HttpStatus.OK).json(createdVillain);
        });
    }
    updateVillain(id, villainDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.villainService.update(id, villainDto);
        });
    }
    removeVillain(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.villainService.remove(id);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'The villain has been successfully deleted.',
            });
        });
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Get all villains' }),
    swagger_1.ApiResponse({ status: 200, description: 'Return all villain.' }),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VillainsController.prototype, "retrieveVillains", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Get a villain by id' }),
    swagger_1.ApiResponse({ status: 200, description: 'Return a villain by id.' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VillainsController.prototype, "retrieveVillain", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Create villain' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The villain has been successfully created.',
    }),
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_villain_dto_1.CreateVillainDto]),
    __metadata("design:returntype", Promise)
], VillainsController.prototype, "saveVillain", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_villain_dto_1.CreateVillainDto]),
    __metadata("design:returntype", Promise)
], VillainsController.prototype, "updateVillain", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Delete villain' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The villain has been successfully deleted.',
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], VillainsController.prototype, "removeVillain", null);
VillainsController = __decorate([
    swagger_1.ApiUseTags('villains'),
    common_1.Controller('villains'),
    __metadata("design:paramtypes", [villain_service_1.VillainService])
], VillainsController);
exports.VillainsController = VillainsController;
//# sourceMappingURL=villains.controller.js.map