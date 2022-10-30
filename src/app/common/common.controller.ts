import { Controller, Get, HttpException, HttpStatus, NotFoundException, ParseIntPipe, Query, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { } from "src/config/interceptors/error-response.interceptor";
import { IsNumberString } from "class-validator";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { Article } from "../article/article.entity";
import { Repository } from "typeorm";
@Controller()
export class CommonController {

    @Get("/")
    root() {
        return "Success!";
    }

}