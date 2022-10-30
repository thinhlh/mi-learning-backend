import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseModule } from "../course/course.module";
import { SectionController } from "./section.controller";
import { Section } from "./section.entity";
import { SectionService } from "./section.service";

@Module({
    imports: [TypeOrmModule.forFeature([Section]), CourseModule],
    providers: [SectionService],
    controllers: [SectionController],
})
export class SectionModule {

}