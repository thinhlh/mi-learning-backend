import { CreateLessonBulkDTO } from "src/app/lesson/dto/create-lesson-bulk.dto";
export declare class CreateSectionBulkDTO {
    title: string;
    lessons?: (string | CreateLessonBulkDTO)[];
}
