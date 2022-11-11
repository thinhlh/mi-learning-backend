import { BadRequestException, Get, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CourseService } from "../course/course.service";
import { SectionService } from "../section/section.service";
import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { UpdateLessonDTO } from "./dto/update-lesson.dto";
import { Lesson } from "./lesson.entity";

@Injectable()
export class LessonService {
    constructor(
        private readonly courseService: CourseService,
        private readonly sectionService: SectionService,
        @InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>,
    ) {

    }

    async getLessons(): Promise<Lesson[]> {
        return this.lessonRepository.find({});
    }

    async createLesson(createLesstonDTO: CreateLessonDTO): Promise<Lesson> {
        const section = await this.sectionService.getSection(createLesstonDTO.sectionId, true)

        if (!section) {
            throw new NotFoundException("Section not found!")
        }

        if (section.lessons.some((lesson) => lesson.title == createLesstonDTO.title)) {
            throw new BadRequestException("Lesson already exist!")
        }


        const lesson = this.lessonRepository.create({
            ...createLesstonDTO,
            lessonOrder: await this.courseService.getCurrentNumberOfLesson(section.course.id) + 1,
            section: section
        });

        return this.lessonRepository.save(lesson);
    }

    async updateLesson(id: string, updateLessonDTO: UpdateLessonDTO): Promise<Lesson> {
        const lesson = await this.lessonRepository.preload({
            id: id,
            ...updateLessonDTO,
        });

        if (!lesson) {
            throw new NotFoundException("Lesson not found!");
        } else {
            return this.lessonRepository.save(lesson);
        }
    }

    async deleteLesson(id: string): Promise<boolean> {
        const result = await this.lessonRepository.softDelete({ id: id });
        return true;
    }

    async restoreDeletedLesson(id: string): Promise<any> {
        await this.lessonRepository.restore({ id: id });
        return null;
    }


}