import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class AppGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {

        return true;
    }
}