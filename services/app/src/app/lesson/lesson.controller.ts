import { Body, Controller, Get, NotFoundException, Post, Query } from "@nestjs/common";
import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { Lesson } from "./lesson.entity";
import { LessonService } from "./lesson.service";

@Controller()
export class LessonController {
    constructor(private readonly lessonService: LessonService) {

    }

    @Get("/lessons")
    async getLessons(): Promise<Lesson[]> {
        return this.lessonService.getLessons()
    }

    @Post("/lesson")
    async createLesson(@Body() createLessonDTO: CreateLessonDTO): Promise<Lesson> {
        return this.lessonService.createLesson(createLessonDTO)
    }

}