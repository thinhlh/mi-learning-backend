"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_module_1 = require("../category/category.module");
const lesson_entity_1 = require("../lesson/lesson.entity");
const schedule_entity_1 = require("../schedule/schedule.entity");
const section_entity_1 = require("../section/section.entity");
const student_entity_1 = require("../student/student.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const user_entity_1 = require("../user/user.entity");
const course_controller_1 = require("./course.controller");
const course_entity_1 = require("./course.entity");
const course_service_1 = require("./course.service");
let CourseModule = class CourseModule {
};
CourseModule = __decorate([
    (0, common_1.Module)({
        providers: [course_service_1.CourseService],
        controllers: [course_controller_1.CourseController],
        imports: [typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course, section_entity_1.Section, lesson_entity_1.Lesson, teacher_entity_1.Teacher, user_entity_1.User, student_entity_1.Student, schedule_entity_1.Schedule]), category_module_1.CategoryModule],
        exports: [course_service_1.CourseService],
    })
], CourseModule);
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map