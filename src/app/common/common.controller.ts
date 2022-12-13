import { Controller, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { } from "src/config/interceptors/error-response.interceptor";
import { diskStorage } from 'multer';
import { extname } from "path";
import { FileInterceptor } from "@nestjs/platform-express";
import { I18n, I18nContext } from "nestjs-i18n";
@Controller()
export class CommonController {

    @Get("/")
    async root() {
        return "Success!";
    }

    @Post("/upload")
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './statics',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))
    upload(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 1e10 }),
        ]
    })) file) {
        return file.path
    }
}