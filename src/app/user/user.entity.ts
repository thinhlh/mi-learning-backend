import { Column, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role/role";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        nullable: false,
    })
    name: string;

    @Column()
    password: string;

    @Column({ nullable: false })
    email: string;

    @Column()
    occupation: string;

    @Column("timestamptz")
    birthday: Date;

    @Column()
    avatar: string;

    @DeleteDateColumn()
    deletedDate: Date

    @Column({
        type: "enum",
        enum: Role,
        nullable: false,
    })
    role: Role;

    @OneToOne(() => Teacher)
    teacher: Teacher;

    @OneToOne(() => Student)
    student: Student;
}