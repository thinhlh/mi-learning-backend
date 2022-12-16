import { CreateCategoryDTO } from "src/app/category/dto/create-category.dto";
import { CreateSectionBulkDTO } from "src/app/section/dto/create-section-bulk.dto";
export declare class CreateCourseBulkDTO {
    title: string;
    description: string;
    length: number;
    background: string;
    icon: string;
    price: number;
    sections?: (string | CreateSectionBulkDTO)[];
    teacherId: string;
    category: string | CreateCategoryDTO;
}
