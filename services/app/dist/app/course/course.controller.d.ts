import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { GetCoursesQuery } from "./dto/get-course.query";
import { UpdateCourseDTO } from "./dto/update-course.dto";
import { CourseResponseDTO } from "./dto/course-response.dto";
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getCourses(query: GetCoursesQuery): Promise<Course[]>;
    getCourseDetail(user: string, courseId: string): Promise<CourseResponseDTO>;
    createCourse(createCourseDTO: CreateCourseDTO): Promise<Course>;
    updateCourse(id: string, updateCourseDTO: UpdateCourseDTO): Promise<Course>;
    deleteCourse(id: string): Promise<any>;
    restoreDeletedCourse(id: string): Promise<any>;
}
