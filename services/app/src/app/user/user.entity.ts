import { Exclude, Transform, Type } from "class-transformer";
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
    @Exclude()
    password: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column()
    occupation: string;

    @Column("timestamp without time zone")
    @Type(() => Number)
    birthday: Date;

    @Column()
    avatar: string;

    @DeleteDateColumn()
    @Type(() => Number)
    deletedAt: Date

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