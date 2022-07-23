import { BadGatewayException, CallHandler, ExecutionContext, HttpCode, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, map, Observable, throwError } from "rxjs";
import { BaseResponse } from "../dto/base.response";

@Injectable()
export class ErrorResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError(
                    err => throwError(
                        () => {
                            console.log(err.status);
                            throw new HttpException(({
                                success: false,
                                message: err.message,
                                data: null,
                            }),
                                +err.status,
                            );
                        }
                    )
                ),
            );
    }
}
