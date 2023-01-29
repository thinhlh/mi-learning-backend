import { CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable, firstValueFrom, lastValueFrom } from "rxjs";
import { Role } from "src/app/role/role";
import { ROLES_KEY } from "./role.decorator";
import { Request } from "express";
import { HttpService } from "@nestjs/axios";

export const USER_KEY = 'user'

@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private readonly httpService: HttpService
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) ?? [];

        const request = context.switchToHttp().getRequest() as Request;
        const ignoreRole = requiredRoles.length == 0

        try {
            if (request.headers.authorization) {
                const token = request.headers.authorization.trim();

                console.log(`http://${process.env.AUTH_HOST ?? 'localhost'}:${process.env.AUTH_PORT}/check-permissions`)
                const result = await lastValueFrom(
                    this.httpService.get(`http://${process.env.AUTH_HOST ?? 'localhost'}:${process.env.AUTH_PORT}/check-permissions`, {
                        data: requiredRoles.map(role => role.toString()),
                        headers: {
                            "Authorization": token
                        },
                    })
                )


                if (result.status >= 200 && result.status < 300) {
                    request.headers[USER_KEY] = result.data.data.id
                    return true
                } else {
                    return ignoreRole;
                }
            } else {
                return ignoreRole
            }

        } catch (e) {
            console.log(e)


            return ignoreRole;
        }
    }

    private extractToken(token: string, prefix: string = 'Bearer'): string {
        if (!token || token.length == 0) {
            return null
        } else {
            token = token.replace(prefix, '').trim()

            if (!token || token.length == 0) return null
            return token
        }
    }
}