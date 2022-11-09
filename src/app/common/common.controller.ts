import { Controller, Get, HttpException, HttpStatus, MaxFileSizeValidator, NotFoundException, ParseFilePipe, ParseIntPipe, Post, Query, UploadedFile, UseInterceptors, ValidationPipe, Version, VERSION_NEUTRAL } from "@nestjs/common";
import { } from "src/config/interceptors/error-response.interceptor";
import { IsNumberString } from "class-validator";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { Article } from "../article/article.entity";
import { Repository } from "typeorm";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterField } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
@Controller()
export class CommonController {

    @Get("/")
    root() {
        return "Success!";
    }

    @Post("/upload")
    @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 1e10 }),
        ]
    })) file) {
        console.log(file)
    }

}