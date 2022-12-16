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
exports.Section = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../course/course.entity");
const lesson_entity_1 = require("../lesson/lesson.entity");
let Section = class Section {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, course: { required: true, type: () => require("../course/course.entity").Course }, lessons: { required: true, type: () => [require("../lesson/lesson.entity").Lesson] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Section.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Section.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, course => course.sections),
    __metadata("design:type", course_entity_1.Course)
], Section.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lesson_entity_1.Lesson, lesson => lesson.section),
    __metadata("design:type", Array)
], Section.prototype, "lessons", void 0);
Section = __decorate([
    (0, typeorm_1.Entity)()
], Section);
exports.Section = Section;
//# sourceMappingURL=section.entity.js.map