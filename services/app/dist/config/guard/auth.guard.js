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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGuard = exports.USER_KEY = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const rxjs_1 = require("rxjs");
const role_decorator_1 = require("./role.decorator");
const axios_1 = require("@nestjs/axios");
exports.USER_KEY = 'user';
let AppGuard = class AppGuard {
    constructor(reflector, httpService) {
        this.reflector = reflector;
        this.httpService = httpService;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(role_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles)
            return true;
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.trim();
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.httpService.get('http://localhost:8000/check-permissions', {
                data: requiredRoles.map(role => role.toString()),
                headers: {
                    "Authorization": token
                },
            }));
            if (result.status >= 200 && result.status < 300) {
                request.headers[exports.USER_KEY] = result.data.id;
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            return false;
        }
    }
    extractToken(token, prefix = 'Bearer') {
        if (!token || token.length == 0) {
            return null;
        }
        else {
            token = token.replace(prefix, '').trim();
            if (!token || token.length == 0)
                return null;
            return token;
        }
    }
};
AppGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        axios_1.HttpService])
], AppGuard);
exports.AppGuard = AppGuard;
//# sourceMappingURL=auth.guard.js.map