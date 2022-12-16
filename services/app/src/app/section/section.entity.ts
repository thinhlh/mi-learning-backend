import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "../course/course.entity";
import { Lesson } from "../lesson/lesson.entity";

@Entity()
export class Section {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    title: string;

    @ManyToOne(() => Course, course => course.sections)
    course: Course;

    @OneToMany(() => Lesson, lesson => lesson.section)
    lessons: Lesson[];
}