"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
let ErrorResponseInterceptor = class ErrorResponseInterceptor {
    intercept(context, next) {
        return next
            .handle()
            .pipe((0, rxjs_1.catchError)(err => (0, rxjs_1.throwError)(() => {
            if (err instanceof common_1.BadRequestException) {
                const errorResponse = err.getResponse();
                const message = (0, class_validator_1.isObject)(errorResponse) ? err.getResponse().message.join('\n') : errorResponse;
                throw new common_1.HttpException(({
                    success: false,
                    message: message,
                    data: null,
                }), +err.getStatus() ? err.getStatus() : common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(({
                    success: false,
                    message: err,
                    data: null,
                }), +err.status ? err.status : common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        })));
    }
};
ErrorResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorResponseInterceptor);
exports.ErrorResponseInterceptor = ErrorResponseInterceptor;
//# sourceMappingURL=error-response.interceptor.js.map