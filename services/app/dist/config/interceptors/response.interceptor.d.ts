import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { BaseResponse } from "../dto/base.response";
export declare class ResponseTransformInterceptor<T> implements NestInterceptor<T, BaseResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<BaseResponse<T>> | Promise<Observable<BaseResponse<T>>>;
}
