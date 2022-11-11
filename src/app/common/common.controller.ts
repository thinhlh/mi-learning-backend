import { Controller, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { } from "src/config/interceptors/error-response.interceptor";
import { FileInterceptor } from "@nestjs/platform-express";
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