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
exports.Student = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const schedule_entity_1 = require("../schedule/schedule.entity");
const student_course_entity_1 = require("../student_course/student_course.entity");
const user_entity_1 = require("../user/user.entity");
let Student = class Student {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, user: { required: true, type: () => require("../user/user.entity").User }, schedules: { required: true, type: () => [require("../schedule/schedule.entity").Schedule] }, studentCourses: { required: true, type: () => [require("../student_course/student_course.entity").StudentCourse] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid", { generated: false }),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "id" }),
    __metadata("design:type", user_entity_1.User)
], Student.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => schedule_entity_1.Schedule, schedule => schedule.student),
    __metadata("design:type", Array)
], Student.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_course_entity_1.StudentCourse, (studentCourse) => studentCourse.student),
    __metadata("design:type", Array)
], Student.prototype, "studentCourses", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map