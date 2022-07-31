import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "../course/course.entity";
import { User } from "../user/user.entity";

@Entity()
export class Teacher {
    @PrimaryColumn("uuid", { generated: false })
    id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "id" })
    user: User;

    @OneToMany(() => Course, course => course.teacher)
    courses: Course[]
}