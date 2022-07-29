import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Student {

    @PrimaryColumn("uuid", { generated: false })
    id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "id" })
    user: User;
}