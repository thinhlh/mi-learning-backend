import { NestMiddleware } from "@nestjs/common";
import { Request } from "express";
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: any, next: (error?: any) => void): void;
}
