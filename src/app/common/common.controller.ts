import { Controller, Get, HttpException, HttpStatus, NotFoundException, ParseIntPipe, Query, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { ErrorResponseInterceptor } from "src/config/interceptors/error-response.interceptor";
import { IsNumberString } from "class-validator";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
@Controller()
export class CommonController {

    @Get("/")
    root() {
        return "Success!";
    }

}