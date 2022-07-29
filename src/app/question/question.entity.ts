import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./answer.entity";

@Entity()
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @Column({ nullable: true })
    background: string;

    @OneToMany(() => Answer, answer => answer.question)
    answers: Answer[];
    // Test Lesson
}