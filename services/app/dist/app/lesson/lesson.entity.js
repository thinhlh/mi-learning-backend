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
exports.Lesson = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const section_entity_1 = require("../section/section.entity");
let Lesson = class Lesson {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, lessonOrder: { required: true, type: () => Number }, section: { required: true, type: () => require("../section/section.entity").Section }, url: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Lesson.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], Lesson.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { nullable: false }),
    __metadata("design:type", Number)
], Lesson.prototype, "lessonOrder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, section => section.lessons),
    __metadata("design:type", section_entity_1.Section)
], Lesson.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lesson.prototype, "url", void 0);
Lesson = __decorate([
    (0, typeorm_1.Entity)()
], Lesson);
exports.Lesson = Lesson;
//# sourceMappingURL=lesson.entity.js.map