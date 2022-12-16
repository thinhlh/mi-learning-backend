import { Category } from "../category/category.entity";
import { Section } from "../section/section.entity";
import { StudentCourse } from "../student_course/student_course.entity";
import { Teacher } from "../teacher/teacher.entity";
export declare class Course {
    id: string;
    title: string;
    description: string;
    length: number;
    background: string;
    icon: string;
    price: number;
    teacher: Teacher;
    sections: Section[];
    studentCourses: StudentCourse[];
    category: Category;
    deletedAt: Date;
}
