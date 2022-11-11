import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StudentCourse } from "../student_course/student_course.entity";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @Column({ nullable: false, type: "int" })
    value: number;

    @ManyToOne(() => StudentCourse)
    studentCourse: StudentCourse
}