import { Category } from "src/app/category/category.entity";
import { SectionResponseDTO } from "src/app/section/dto/section-response.dto";
export declare class CourseResponseDTO {
    id: string;
    title: string;
    description: string;
    length: number;
    background: string;
    icon: string;
    price: number;
    sections: SectionResponseDTO[];
    category: Category;
    deletedAt: Date;
}
