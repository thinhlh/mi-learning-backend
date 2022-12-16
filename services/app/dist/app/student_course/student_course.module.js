"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCourseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_course_entity_1 = require("./student_course.entity");
const student_course_controller_1 = require("./student_course.controller");
const student_course_service_1 = require("./student_course.service");
let StudentCourseModule = class StudentCourseModule {
};
StudentCourseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([student_course_entity_1.StudentCourse])],
        controllers: [student_course_controller_1.StudentCourseController],
        providers: [student_course_service_1.StudentCourseService],
        exports: [student_course_service_1.StudentCourseService]
    })
], StudentCourseModule);
exports.StudentCourseModule = StudentCourseModule;
//# sourceMappingURL=student_course.module.js.map