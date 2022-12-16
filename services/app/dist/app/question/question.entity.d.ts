import { Answer } from "./answer.entity";
export declare class Question {
    id: string;
    content: string;
    background: string;
    answers: Answer[];
}
