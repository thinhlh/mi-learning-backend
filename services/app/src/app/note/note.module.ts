import { Module } from "@nestjs/common";
import { NoteController } from "./note.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./note.entity";
import { NoteService } from "./note.service";
import { StudentLesson } from "../student_lesson/student_lesson.entity";

@Module({
    controllers: [NoteController],
    imports: [TypeOrmModule.forFeature([Note, StudentLesson])],
    providers: [NoteService],
    exports: [NoteService]
})
export class NoteModule {

}