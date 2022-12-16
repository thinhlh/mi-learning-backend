import { Student } from "../student/student.entity";
import { ScheduleColor, ScheduleStatus } from "./schedule.constants";
export declare class Schedule {
    id: string;
    title: string;
    note: string;
    dueDate: Date;
    student: Student;
    color: ScheduleColor;
    location: string;
    status: ScheduleStatus;
}
