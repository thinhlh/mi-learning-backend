import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ScheduleController } from "./schedule.controller";
import { Schedule } from "./schedule.entity";
import { ScheduleService } from "./schedule.service";

@Module({
    controllers: [ScheduleController],
    imports: [TypeOrmModule.forFeature([Schedule])],
    providers: [ScheduleService]
})
export class ScheduleModule {

}