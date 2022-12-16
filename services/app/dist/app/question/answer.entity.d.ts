import { Question } from "./question.entity";
export declare class Answer {
    id: string;
    content: string;
    isCorrect: boolean;
    question: Question;
}
