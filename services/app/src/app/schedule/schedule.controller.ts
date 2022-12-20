import { Controller, Get, ParseIntPipe, Query } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { Schedule } from "./schedule.entity";
import { ReturningStatementNotSupportedError } from "typeorm";

@Controller()
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {

    }

    @Get('/schedules/dates')
    async getSchedulesDates(): Promise<Schedule[]> {
        return this.scheduleService.getAllSchedules()
    }

    @Get('/schedules')
    async getSchedules(@Query('date') date: string): Promise<Schedule[]> {
        return this.scheduleService.getScheduleByDate();
    }
}