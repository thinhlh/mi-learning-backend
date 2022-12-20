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

    async isStudentEnrolledCourse(studentId: string, courseId: string): Promise<boolean> {
        const studentCourse = await this.studentCourseRepository.findOneBy({ courseId: courseId, studentId: studentId });

        if (!studentCourse) {
            return false
        } else {
            return studentCourse.enrolled
        }
    }


    async purchaseCourse(studentId: string, courseId: string): Promise<boolean> {
        var studentCourse = await this.getOrCreateStudentCourse(studentId, courseId);

        if (studentCourse.enrolled) {
            throw new HttpException(
                this.i18nService.translate("validation.duplicated.joined-course"),
                HttpStatus.BAD_REQUEST
            )
        } else {
            studentCourse.enrolled = true
        }

        const result = await this.studentCourseRepository.save(studentCourse)
        return true
    }

    async getOrCreateStudentCourse(studentId: string, courseId: string): Promise<StudentCourse> {
        var studentCourse = await this.studentCourseRepository.findOneBy({ courseId: courseId, studentId: studentId });

        if (studentCourse) {
            return studentCourse
        } else {
            studentCourse = this.studentCourseRepository.create({ courseId: courseId, studentId: studentId })
            return this.studentCourseRepository.save(studentCourse)
        }
    }

    async toggleSaveCourse(studnetId: string, courseId: string): Promise<boolean> {
        var studentCourse = await this.getOrCreateStudentCourse(studnetId, courseId);

        studentCourse.saved = !studentCourse.saved
        this.studentCourseRepository.save(studentCourse);

        return true;
    }
}