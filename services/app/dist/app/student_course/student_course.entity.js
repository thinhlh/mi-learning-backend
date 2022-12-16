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
exports.StudentCourse = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../course/course.entity");
const rating_entity_1 = require("../rating/rating.entity");
const student_entity_1 = require("../student/student.entity");
let StudentCourse = class StudentCourse {
    static _OPENAPI_METADATA_FACTORY() {
        return { studentId: { required: true, type: () => String }, courseId: { required: true, type: () => String }, student: { required: true, type: () => require("../student/student.entity").Student }, course: { required: true, type: () => require("../course/course.entity").Course }, ratings: { required: true, type: () => [require("../rating/rating.entity").Rating] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], StudentCourse.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], StudentCourse.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.studentCourses),
    __metadata("design:type", student_entity_1.Student)
], StudentCourse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.studentCourses),
    __metadata("design:type", course_entity_1.Course)
], StudentCourse.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.studentCourse),
    __metadata("design:type", Array)
], StudentCourse.prototype, "ratings", void 0);
StudentCourse = __decorate([
    (0, typeorm_1.Entity)()
], StudentCourse);
exports.StudentCourse = StudentCourse;
//# sourceMappingURL=student_course.entity.js.map