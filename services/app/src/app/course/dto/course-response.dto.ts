import { Exclude, Transform, Type } from "class-transformer";
import { Category } from "src/app/category/category.entity";
import { SectionResponseDTO } from "src/app/section/dto/section-response.dto";
import { Section } from "src/app/section/section.entity";
import { CourseRatingDTO } from "src/app/student_course/dto/course_rating.dto";
import { TeacherResponseDTO } from "src/app/teacher/dto/teacher-response.dto";
import { Teacher } from "src/app/teacher/teacher.entity";

export class CourseResponseDTO {
    id: string;
    title: string;
    description: string;
    length: number;
    background: string;
    icon?: string;
    price: number;
    teacher: TeacherResponseDTO;
    sections: SectionResponseDTO[] = [];
    category: string;
    enrolled: boolean;
    saved: boolean
    courseRatings: CourseRatingDTO;

    @Type(() => Number)
    deletedAt: Date;
}