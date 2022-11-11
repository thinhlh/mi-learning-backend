import { Category } from "src/app/category/category.entity";
import { SectionResponseDTO } from "src/app/section/dto/section-response.dto";

export class CourseResponseDTO {
    id: string;
    title: string;
    description: string;
    length: number;
    background: string;
    icon: string;
    price: number;
    // teacher: Teacher;
    sections: SectionResponseDTO[];
    category: Category;
    deletedAt: Date;
}