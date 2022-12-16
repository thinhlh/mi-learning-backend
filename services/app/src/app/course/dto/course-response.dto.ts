import { Exclude, Type } from "class-transformer";
import { Category } from "src/app/category/category.entity";
import { SectionResponseDTO } from "src/app/section/dto/section-response.dto";
import { Section } from "src/app/section/section.entity";

export class CourseResponseDTO {
    id: string;
    title: string;
    description: string;
    length: number;
    background: string;
    icon?: string;
    price: number;
    // teacher: Teacher;
    sections: SectionResponseDTO[] = [];
    category: Category;
    enrolled: boolean;
    saved: boolean

    @Type(() => Number)
    deletedAt: Date;
}