import { Controller, Get, HttpException, NotFoundException, ParseIntPipe, Query, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { ErrorResponseInterceptor } from "src/config/interceptors/error-response.interceptor";
import { IsNumberString } from "class-validator";
@Controller()
export class CommonController {

    @Get("/")
    root(@Query('any', ParseIntPipe) anything: number) {
        return "Success! " + anything;
    }

}