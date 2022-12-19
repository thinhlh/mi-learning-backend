import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course/course.entity";
import { Rating } from "../rating/rating.entity";
import { Student } from "../student/student.entity";

@Entity()
export class StudentCourse {

    @PrimaryColumn("uuid", { name: "student_id" })
    studentId: string

    @PrimaryColumn("uuid", { name: "course_id" })
    courseId: string

    @Column({ nullable: false, default: false })
    saved: boolean

    @Column({ nullable: false, default: false })
    enrolled: boolean

    @ManyToOne(() => Student, (student) => student.studentCourses)
    @JoinColumn({ name: "student_id" })
    student: Student

    @ManyToOne(() => Course, (course) => course.studentCourses)
    @JoinColumn({ name: "course_id" })
    course: Course

    @OneToMany(() => Rating, (rating) => rating.studentCourse)
    ratings: Rating[]
}