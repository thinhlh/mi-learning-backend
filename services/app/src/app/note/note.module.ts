import { Module } from "@nestjs/common";
import { NoteController } from "./note.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./note.entity";
import { NoteService } from "./note.service";

@Module({
    controllers: [NoteController],
    imports: [TypeOrmModule.forFeature([Note])],
    providers: [NoteService]
})
export class NoteModule {

}