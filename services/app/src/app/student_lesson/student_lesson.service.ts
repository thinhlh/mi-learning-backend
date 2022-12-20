import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { StudentLesson } from "./student_lesson.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateLessonDTO } from "../lesson/dto/update-lesson.dto";
import { updateLessonStatusDTO } from "./dto/update-lesson-status.dto";

@Injectable()
export class StudentLessonService {
    constructor(@InjectRepository(StudentLesson) private readonly studentLessonRepository: Repository<StudentLesson>) {

    }

    async checkStudentFinishedLesson(studentId: string, lessonId: string): Promise<boolean> {
        let studentLesson = await this.studentLessonRepository.findOneBy({ studentId: studentId, lessonId: lessonId });

        return studentLesson == null ? false : studentLesson.finished
    }

    async updateFinishStatus(studentId: string, updateLessonStatusDTO: updateLessonStatusDTO): Promise<boolean> {
        let studentLesson: StudentLesson

        studentLesson = await this.studentLessonRepository.findOneBy({ studentId: studentId, lessonId: updateLessonStatusDTO.lessonId });

        if (studentLesson) {
            studentLesson.finished = updateLessonStatusDTO.finished
            this.studentLessonRepository.save(studentLesson)
            return true;
        } else {
            const createdStudentLesson = this.studentLessonRepository.create({
                studentId: studentId,
                lessonId: updateLessonStatusDTO.lessonId,
                finished: updateLessonStatusDTO.finished
            })
            await this.studentLessonRepository.save(createdStudentLesson);
            return true;
        }
    }
}