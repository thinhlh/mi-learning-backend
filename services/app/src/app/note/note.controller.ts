import { Body, Controller, Get, Headers, Param, Post } from "@nestjs/common";
import { Note } from "./note.entity";
import { Role } from "../role/role";
import { Roles } from "src/config/guard/role.decorator";
import { NoteService } from "./note.service";
import { USER_KEY } from "src/config/guard/auth.guard";
import { CreateOrUpdateNoteDTO } from "./dto/create-or-update-note.dto";

@Controller()
export class NoteController {

    constructor(private readonly noteService: NoteService) {

    }

    @Get("/notes/:lessonId")
    @Roles(Role.STUDENT)
    async getNotesOfStudentOnCourses(@Headers(USER_KEY) user: string, @Param('lessonId') lessonId: string): Promise<Note[]> {
        return this.noteService.getNotesOfStudentOnLesson(user, lessonId)
    }

    @Post("/note")
    @Roles(Role.STUDENT)
    async createOrUpdateNote(@Headers(USER_KEY) user: string, @Body() createOrUpdateNote: CreateOrUpdateNoteDTO): Promise<boolean> {
        return this.noteService.createOrUpdateNote(user, createOrUpdateNote);
    }
}