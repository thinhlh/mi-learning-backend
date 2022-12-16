import { Repository } from "typeorm";
import { CourseService } from "../course/course.service";
import { SectionService } from "../section/section.service";
import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { UpdateLessonDTO } from "./dto/update-lesson.dto";
import { Lesson } from "./lesson.entity";
export declare class LessonService {
    private readonly courseService;
    private readonly sectionService;
    private readonly lessonRepository;
    constructor(courseService: CourseService, sectionService: SectionService, lessonRepository: Repository<Lesson>);
    getLessons(): Promise<Lesson[]>;
    createLesson(createLesstonDTO: CreateLessonDTO): Promise<Lesson>;
    updateLesson(id: string, updateLessonDTO: UpdateLessonDTO): Promise<Lesson>;
    deleteLesson(id: string): Promise<boolean>;
    restoreDeletedLesson(id: string): Promise<any>;
}
