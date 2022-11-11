import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { classToPlain, plainToClass } from "class-transformer";
import { isArray, isObject } from "class-validator";
import { map, Observable } from "rxjs";
import { BaseResponse } from "src/config/dto/base.response";

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, BaseResponse<T>>{
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<BaseResponse<T>> | Promise<Observable<BaseResponse<T>>> {
        return next
            .handle()
            .pipe(
                map(
                    data => {
                        // if (isArray(data)) {
                        //     for (const index in ((data as unknown) as Array<any>)) {
                        //         const item = data[index]
                        //         for (const property in item) {
                        //             const value = item[property] as unknown
                        //             if (value instanceof Date) {
                        //                 data[index][property] = (value as Date).getTime()
                        //             }
                        //         }
                        //     }
                        // } else {
                        //     for (const property in data) {
                        //         const value = data[property] as unknown
                        //         if (value instanceof Date) {
                        //             (data as unknown)[property] = (value as Date).getTime()
                        //         }
                        //     }
                        // }



                        return (
                            {
                                success: true,
                                message: null,
                                data: data
                            }
                        )
                    }
                )
            );
    }
}