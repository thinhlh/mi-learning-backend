"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let CustomExceptionFilter = class CustomExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = "Internal Server Error!";
        switch (exception.constructor) {
            case common_1.NotFoundException:
                const response = exception.getResponse();
                if ((0, class_validator_1.isObject)(response)) {
                    message = response.message;
                    status = response.statusCode;
                }
                else {
                    message = response.toString();
                    status = exception.getStatus();
                }
                break;
            case common_1.BadRequestException:
                status = exception.getStatus();
                var exceptionResponse = exception.getResponse();
                if ((0, class_validator_1.isObject)(exceptionResponse)) {
                    const rawMessage = exceptionResponse.message;
                    if ((0, class_validator_1.isArray)(rawMessage)) {
                        message = rawMessage.join("\n");
                    }
                    else {
                        message = rawMessage;
                    }
                }
                else {
                    message = exceptionResponse;
                }
                break;
            case common_1.HttpException:
                status = exception.getStatus() ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                message = exception.message;
                console.log(message);
                break;
            case typeorm_1.TypeORMError:
                status = common_1.HttpStatus.BAD_REQUEST;
                message = exception.message;
                break;
            case typeorm_1.QueryFailedError:
                message = exception.message;
                status = common_1.HttpStatus.BAD_REQUEST;
                break;
            case String:
                status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                message = exception;
                break;
            default:
                message = exception.toString();
                break;
        }
        const body = {
            success: false,
            message: message,
            data: null,
        };
        response
            .status(status)
            .json(body);
    }
    getExceptionMessage(exception) {
        const exceptionResponse = exception.getResponse();
        if (exceptionResponse) {
            if ((0, class_validator_1.isObject)(exceptionResponse)) {
                return (0, class_transformer_1.classToPlain)(exceptionResponse).message;
            }
            else {
                return exceptionResponse;
            }
        }
        else {
            return exception.message;
        }
    }
};
CustomExceptionFilter = __decorate([
    (0, common_1.Catch)()
], CustomExceptionFilter);
exports.CustomExceptionFilter = CustomExceptionFilter;
//# sourceMappingURL=custom-exception.filter.js.map