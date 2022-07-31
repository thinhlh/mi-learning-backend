import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "../schedule/schedule.entity";
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
}