import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "../schedule/schedule.entity";
import { StudentCourse } from "../student_course/student_course.entity";
import { User } from "../user/user.entity";

@Entity()
export class Student {

    @PrimaryColumn("uuid", { generated: false })
    id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "id" })
    user: User;

    @OneToMany(() => Schedule, schedule => schedule.student)
    schedules: Schedule[];

    @OneToMany(() => StudentCourse, (studentCourse) => studentCourse.student)
    studentCourses: StudentCourse[];
}