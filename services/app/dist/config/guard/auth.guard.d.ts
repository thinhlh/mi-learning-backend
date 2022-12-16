import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { HttpService } from "@nestjs/axios";
export declare const USER_KEY = "user";
export declare class AppGuard implements CanActivate {
    private reflector;
    private readonly httpService;
    constructor(reflector: Reflector, httpService: HttpService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
}
