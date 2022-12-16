import { Course } from "../course/course.entity";
import { Lesson } from "../lesson/lesson.entity";
export declare class Section {
    id: string;
    title: string;
    course: Course;
    lessons: Lesson[];
}
