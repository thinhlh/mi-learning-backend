import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { GetCourseQuery } from "./dto/get-course.query";
import { UpdateCourseDTO } from "./dto/update-course.dto";
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getCourses(query: GetCourseQuery): Promise<Course[]>;
    createCourse(createCourseDTO: CreateCourseDTO): Promise<Course>;
    updateCourse(id: string, updateCourseDTO: UpdateCourseDTO): Promise<Course>;
    deleteCourse(id: string): Promise<any>;
    restoreDeletedCourse(id: string): Promise<any>;
}
