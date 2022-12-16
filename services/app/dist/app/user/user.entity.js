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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const role_1 = require("../role/role");
const student_entity_1 = require("../student/student.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, password: { required: true, type: () => String }, email: { required: true, type: () => String }, occupation: { required: true, type: () => String }, birthday: { required: true, type: () => Date }, avatar: { required: true, type: () => String }, deletedAt: { required: true, type: () => Date }, role: { required: true, enum: require("../role/role").Role }, teacher: { required: true, type: () => require("../teacher/teacher.entity").Teacher }, student: { required: true, type: () => require("../student/student.entity").Student } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "occupation", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone"),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], User.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: role_1.Role,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => teacher_entity_1.Teacher),
    __metadata("design:type", teacher_entity_1.Teacher)
], User.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => student_entity_1.Student),
    __metadata("design:type", student_entity_1.Student)
], User.prototype, "student", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map