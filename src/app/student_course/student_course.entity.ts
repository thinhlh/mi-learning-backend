import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Course } from "../course/course.entity";
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
}