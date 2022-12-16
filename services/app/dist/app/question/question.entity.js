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
exports.Question = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const answer_entity_1 = require("./answer.entity");
let Question = class Question {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, content: { required: true, type: () => String }, background: { required: true, type: () => String }, answers: { required: true, type: () => [require("./answer.entity").Answer] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Question.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Question.prototype, "background", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.Answer, answer => answer.question),
    __metadata("design:type", Array)
], Question.prototype, "answers", void 0);
Question = __decorate([
    (0, typeorm_1.Entity)()
], Question);
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map