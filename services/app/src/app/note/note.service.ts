import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Note } from "./note.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateNoteDTO } from "./dto/create-or-update-note.dto";
import { HttpService } from "@nestjs/axios";
import { StudentLesson } from "../student_lesson/student_lesson.entity";

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
        @InjectRepository(StudentLesson) private readonly studentLessonRepository: Repository<StudentLesson>
    ) {

    }

    async getNotesOfStudentOnLesson(studentId: string, lessonId: string): Promise<Note[]> {
        return this.noteRepository.find({
            where: {
                studentLesson: {
                    studentId: studentId,
                    lessonId: lessonId
                }
            }
        })
    }

    async createOrUpdateNote(studentId: string, createOrUpdateNote: CreateOrUpdateNoteDTO): Promise<boolean> {
        let note: Note
        if (createOrUpdateNote.id) {
            note = await this.noteRepository.findOne({
                where: {
                    id: createOrUpdateNote.id
                }
            })

            note.content = createOrUpdateNote.content
            note.createdAt = createOrUpdateNote.createdAt
        } else {
            let studentLesson: StudentLesson
            studentLesson = await this.studentLessonRepository.findOneBy({ lessonId: createOrUpdateNote.lessonId, studentId: studentId });
            if (!studentLesson) {
                const studentLessonCreate = this.studentLessonRepository.create({ lessonId: createOrUpdateNote.lessonId, studentId: studentId });
                studentLesson = await this.studentLessonRepository.save(studentLessonCreate)
            }

            note = this.noteRepository.create({
                content: createOrUpdateNote.content,
                createdAt: createOrUpdateNote.createdAt,
                studentLesson: studentLesson
            });
        }

        try {
            await this.noteRepository.save(note);
            return true;
        } catch (e) {
            throw new HttpException("Unable to update note", HttpStatus.BAD_REQUEST);

        }
    }

}