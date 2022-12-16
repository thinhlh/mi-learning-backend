import { Transform, TransformFnParams, Type } from "class-transformer";
import { Column, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { Section } from "../section/section.entity";
import { Student } from "../student/student.entity";
import { StudentCourse } from "../student_course/student_course.entity";
import { Teacher } from "../teacher/teacher.entity";

@Entity()
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        unique: true,
    })
    title: string;

    @Column()
    description: string;

    @Column()
    length: number;

    @Column()
    background: string;

    @Column({ nullable: true })
    icon: string;

    @Column({
        type: "float"
    })
    price: number;

    @ManyToOne(() => Teacher, teacher => teacher.courses)
    teacher: Teacher;

    @OneToMany(() => Section, section => section.course)
    sections: Section[];

    @OneToMany(() => StudentCourse, (studentCourse) => studentCourse.course)
    studentCourses: StudentCourse[];

    @ManyToOne(() => Category, category => category.courses)
    category: Category;

    @DeleteDateColumn()
    @Type(() => Number)
    deletedAt: Date;
}