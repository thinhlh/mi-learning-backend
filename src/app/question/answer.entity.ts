import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @Column()
    isCorrect: boolean;

    @ManyToOne(() => Question, question => question.answers)
    question: Question;
}