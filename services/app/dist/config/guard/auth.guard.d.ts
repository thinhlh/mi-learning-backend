import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class AppGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
