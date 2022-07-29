import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ScheduleColor, ScheduleStatus } from "./schedule.constants";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    note: string;

    @Column({ type: "timestamptz", default: Date(), nullable: false })
    dueDate: Date;

    // @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    // @JoinColumn(name = "student_id")
    // @JsonIgnore
    // private Student student;

    @Column({ type: "enum", enum: ScheduleColor, default: ScheduleColor.BLUE })
    color: ScheduleColor;


    @Column({ nullable: true })
    localtion: string;

    @Column({ type: "enum", enum: ScheduleStatus, default: ScheduleStatus.PENDING })
    status: ScheduleStatus;
}