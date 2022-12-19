import { Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Student } from "../student/student.entity";
import { Lesson } from "../lesson/lesson.entity";
import { Note } from "../note/note.entity";

@Entity()
export class StudentLesson {
    @PrimaryColumn("uuid")
    studentId: string

    @PrimaryColumn("uuid")
    lessonId: string

    @ManyToOne(() => Student, (student) => student.studentLessons)
    student: Student

    @ManyToOne(() => Lesson)
    lesson: Lesson

    @OneToMany(() => Note, (note) => note.studentLesson)
    notes: Note[]
}