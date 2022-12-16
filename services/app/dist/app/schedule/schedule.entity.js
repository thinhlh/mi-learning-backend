"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../student/student.entity");
const schedule_constants_1 = require("./schedule.constants");
let Schedule = class Schedule {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, note: { required: true, type: () => String }, dueDate: { required: true, type: () => Date }, student: { required: true, type: () => require("../student/student.entity").Student }, color: { required: true, enum: require("./schedule.constants").ScheduleColor }, location: { required: true, type: () => String }, status: { required: true, enum: require("./schedule.constants").ScheduleStatus } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", nullable: false }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], Schedule.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.schedules),
    __metadata("design:type", student_entity_1.Student)
], Schedule.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: schedule_constants_1.ScheduleColor, default: schedule_constants_1.ScheduleColor.BLUE }),
    __metadata("design:type", String)
], Schedule.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Schedule.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: schedule_constants_1.ScheduleStatus, default: schedule_constants_1.ScheduleStatus.PENDING }),
    __metadata("design:type", String)
], Schedule.prototype, "status", void 0);
Schedule = __decorate([
    (0, typeorm_1.Entity)()
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.entity.js.map