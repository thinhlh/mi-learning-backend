import { LessonResposeDTO } from "src/app/lesson/dto/lesson-response.dto";
import { Lesson } from "src/app/lesson/lesson.entity";

export class SectionResponseDTO {
    id: string;
    title: string;
    lessons: LessonResposeDTO[];
    finishedLesson: number;
    totalLesson: number;
    length: number;
}