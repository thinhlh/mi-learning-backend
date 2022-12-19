import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Note } from "./note.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateNoteDTO } from "./dto/create-or-update-note.dto";

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note) private readonly noteRepository: Repository<Note>
    ) {

    }

    async getNotesOfStudentOnCourse(studentId: string, lessonId: string): Promise<Note[]> {


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
        } else {
            note = this.noteRepository.create({
                content: createOrUpdateNote.content,
                studentLesson: {
                    lessonId: createOrUpdateNote.lessonId,
                    studentId: studentId
                }
            });

            await this.noteRepository.save(note);

            return true
        }
    }

}