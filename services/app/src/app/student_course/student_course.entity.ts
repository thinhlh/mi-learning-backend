import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course/course.entity";
import { Rating } from "../rating/rating.entity";
import { Student } from "../student/student.entity";

@Entity()
export class StudentCourse {

    @PrimaryColumn("uuid")
    studentId: string

    @PrimaryColumn("uuid")
    courseId: string

    @ManyToOne(() => Student, (student) => student.studentCourses)
    student: Student

    @ManyToOne(() => Course, (course) => course.studentCourses)
    course: Course

    @OneToMany(() => Rating, (rating) => rating.studentCourse)
    ratings: Rating[]
}