import { Body, Controller, Get, Header, Headers, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { diskStorage } from 'multer';
import { extname } from "path";
import { FileInterceptor } from "@nestjs/platform-express";
import { I18n, I18nContext } from "nestjs-i18n";
import { Roles } from "src/config/guard/role.decorator";
import { Role } from "../role/role";
import { AppGuard, USER_KEY } from "src/config/guard/auth.guard";
@Controller()
export class CommonController {

    @Get("/")
    async root(@Body() me: string) {
        return "Success!"
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