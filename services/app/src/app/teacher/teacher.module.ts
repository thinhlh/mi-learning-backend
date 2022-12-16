import { Module } from "@nestjs/common";
import { TeacherController } from "./teacher.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Teacher } from "./teacher.entity";
import { TeacherService } from "./teacher.service";

@Module({
    controllers: [TeacherController],
    imports: [TypeOrmModule.forFeature([Teacher])],
    exports: [TeacherService],
    providers: [TeacherService]
})

export class TeacherModule {

}