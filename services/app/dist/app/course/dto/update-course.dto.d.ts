import { CreateCourseDTO } from "./create-course.dto";
declare const UpdateCourseDTO_base: import("@nestjs/common").Type<Partial<CreateCourseDTO>>;
export declare class UpdateCourseDTO extends UpdateCourseDTO_base {
    sections: string[];
}
export {};
