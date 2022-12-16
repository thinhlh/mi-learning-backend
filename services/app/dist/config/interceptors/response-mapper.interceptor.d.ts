import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
interface ClassType<T> {
    new (): T;
}
export declare class ResponseMapperInterceptor<T> implements NestInterceptor<T, T> {
    private readonly classType;
    constructor(classType: ClassType<T>);
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<T> | Promise<Observable<T>>;
}
export {};
