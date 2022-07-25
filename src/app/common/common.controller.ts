import { Controller, Get, HttpException, HttpStatus, NotFoundException, ParseIntPipe, Query, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { ErrorResponseInterceptor } from "src/config/interceptors/error-response.interceptor";
import { IsNumberString } from "class-validator";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
@Controller()
export class CommonController {

    @ApiTags("Tag")
    @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden" })
    @Get("/")
    root(@Query('any', ParseIntPipe) anything: number) {
        return "Success! " + anything;
    }

}