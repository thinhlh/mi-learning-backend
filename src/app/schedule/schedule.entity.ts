import { Type } from "class-transformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../student/student.entity";
import { ScheduleColor, ScheduleStatus } from "./schedule.constants";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    note: string;

    @Column({ type: "timestamptz", nullable: false })
    @Type(() => Number)
    dueDate: Date;

    @ManyToOne(() => Student, student => student.schedules)
    student: Student;

    @Column({ type: "enum", enum: ScheduleColor, default: ScheduleColor.BLUE })
    color: ScheduleColor;


    @Column({ nullable: true })
    location: string;

    @Column({ type: "enum", enum: ScheduleStatus, default: ScheduleStatus.PENDING })
    status: ScheduleStatus;
}