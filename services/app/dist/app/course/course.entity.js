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
exports.Course = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../category/category.entity");
const section_entity_1 = require("../section/section.entity");
const student_course_entity_1 = require("../student_course/student_course.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
let Course = class Course {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, length: { required: true, type: () => Number }, background: { required: true, type: () => String }, icon: { required: true, type: () => String }, price: { required: true, type: () => Number }, teacher: { required: true, type: () => require("../teacher/teacher.entity").Teacher }, sections: { required: true, type: () => [require("../section/section.entity").Section] }, studentCourses: { required: true, type: () => [require("../student_course/student_course.entity").StudentCourse] }, category: { required: true, type: () => require("../category/category.entity").Category }, deletedAt: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
    }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Course.prototype, "background", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "float"
    }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, teacher => teacher.courses),
    __metadata("design:type", teacher_entity_1.Teacher)
], Course.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => section_entity_1.Section, section => section.course),
    __metadata("design:type", Array)
], Course.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_course_entity_1.StudentCourse, (studentCourse) => studentCourse.course),
    __metadata("design:type", Array)
], Course.prototype, "studentCourses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, category => category.courses),
    __metadata("design:type", category_entity_1.Category)
], Course.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], Course.prototype, "deletedAt", void 0);
Course = __decorate([
    (0, typeorm_1.Entity)()
], Course);
exports.Course = Course;
//# sourceMappingURL=course.entity.js.map