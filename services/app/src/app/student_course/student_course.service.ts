import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StudentCourse } from "./student_course.entity";
import { I18nService } from "nestjs-i18n";

@Injectable()
export class StudentCourseService {
    constructor(
        @InjectRepository(StudentCourse) private readonly studentCourseRepository: Repository<StudentCourse>,
        private readonly i18nService: I18nService
    ) {

    }


    async purchaseCourse(studentId: string, courseId: string): Promise<boolean> {
        var studentCourse = await this.studentCourseRepository.findOneBy({ courseId: courseId, studentId: studentId });

        if (studentCourse) {
            if (studentCourse.enrolled) {
                throw new HttpException(
                    this.i18nService.translate("validation.duplicated.joined-course"),
                    HttpStatus.BAD_REQUEST
                )
            } else {
                studentCourse.enrolled = true
            }
        } else {
            studentCourse = this.studentCourseRepository.create({ courseId: courseId, studentId: studentId, enrolled: true })
        }
        const result = await this.studentCourseRepository.save(studentCourse)
        return true
    }
}