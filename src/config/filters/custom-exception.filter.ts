import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { classToPlain } from "class-transformer";
import { isObject } from "class-validator";
import { Request, Response } from "express";
import { BaseResponse } from "../dto/base.response";

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        if (exception instanceof HttpException) {
            const status = exception.getStatus() ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

            const body: BaseResponse<any> = {
                success: false,
                message: this.getExceptionMessage(exception),
                data: null,
            }


            response
                .status(status)
                .json(body);
        } else {
            const body: BaseResponse<any> = {
                success: false,
                message: "Internal server error.",
                data: null,
            }
            response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(body);
        }

    }

    private getExceptionMessage(exception: HttpException): string {
        const exceptionResponse = exception.getResponse();

        if (exceptionResponse) {
            if (isObject(exceptionResponse)) {
                return classToPlain(exceptionResponse).message;
            } else {
                return exceptionResponse as string;
            }
        } else {
            return exception.message
        }
    }
}