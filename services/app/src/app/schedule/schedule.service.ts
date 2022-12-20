import { Injectable } from "@nestjs/common";
import { Schedule } from "./schedule.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { randomUUID } from "crypto";
import { ScheduleColor, ScheduleStatus } from "./schedule.constants";
import { Student } from "../student/student.entity";

@Injectable()
export class ScheduleService {

    constructor(@InjectRepository(Schedule) private readonly scheduleRepository: Repository<Schedule>) { }

    async getAllSchedules(): Promise<Schedule[]> {
        return this.scheduleRepository.find({});
    }

    async getScheduleByDate(): Promise<Schedule[]> {
        return this.scheduleRepository.find({});
    }
}