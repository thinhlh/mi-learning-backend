import { Exclude, Type } from "class-transformer";
import { Category } from "src/app/category/category.entity";
import { SectionResponseDTO } from "src/app/section/dto/section-response.dto";
import { Section } from "src/app/section/section.entity";
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
    category: Category;
    enrolled: boolean;
    saved: boolean

    @Type(() => Number)
    deletedAt: Date;
}