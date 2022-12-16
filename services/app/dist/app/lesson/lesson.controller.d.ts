import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { Lesson } from "./lesson.entity";
import { LessonService } from "./lesson.service";
export declare class LessonController {
    private readonly lessonService;
    constructor(lessonService: LessonService);
    getLessons(): Promise<Lesson[]>;
    createLesson(createLessonDTO: CreateLessonDTO): Promise<Lesson>;
}
