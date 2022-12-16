import { Lesson } from "src/app/lesson/lesson.entity";
export declare class SectionResponseDTO {
    id: string;
    title: string;
    lessons: Lesson[];
    finishedLesson: number;
    totalLesson: number;
    length: number;
}
