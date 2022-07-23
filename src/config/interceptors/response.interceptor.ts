import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { BaseResponse } from "src/config/dto/base.response";

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, BaseResponse<T>>{
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<BaseResponse<T>> | Promise<Observable<BaseResponse<T>>> {
        return next
            .handle()
            .pipe(
                map(data => (
                    {
                        success: true,
                        message: null,
                        data: data
                    }
                )));
    }

}