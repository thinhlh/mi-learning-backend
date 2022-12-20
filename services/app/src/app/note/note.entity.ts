import { Type } from "class-transformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StudentLesson } from "../student_lesson/student_lesson.entity";

@Entity()
export class Note {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    createdAt: number;

    @ManyToOne(() => StudentLesson, (studentLesson) => studentLesson.notes)
    studentLesson: StudentLesson;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @Getter(value = AccessLevel.NONE)
    // private StudentLesson studentLesson;
}