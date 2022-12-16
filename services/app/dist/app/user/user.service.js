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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const axios_2 = require("axios");
let UserService = class UserService {
    constructor(userRepository, httpService) {
        this.userRepository = userRepository;
        this.httpService = httpService;
    }
    async createUser(createUserDto) {
        const createdUser = this.userRepository.create(Object.assign(Object.assign({}, createUserDto), { birthday: new Date(createUserDto.birthday).getTime() }));
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.httpService.post('http://localhost:8000/register', createdUser));
            if (result.status >= 200 && result.status < 400) {
                return result.data;
            }
            else {
            }
        }
        catch (e) {
            if (e instanceof axios_2.AxiosError) {
                console.log(e.message);
                return;
            }
        }
    }
    async findAll() {
        return this.userRepository.find({});
    }
    async findOne(id) {
        return this.userRepository.findOneBy({ id: id });
    }
    async updateUser(id, updateUserDto) {
        return;
    }
    async removeUser(id) {
        await this.userRepository.softDelete({ id: id });
        return true;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        axios_1.HttpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map