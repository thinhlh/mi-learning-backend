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
exports.CreateCourseBulkDTO = void 0;
const openapi = require("@nestjs/swagger");
const decorators_1 = require("class-validator/types/decorator/decorators");
class CreateCourseBulkDTO {
    constructor() {
        this.sections = [];
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, description: { required: true, type: () => String }, length: { required: true, type: () => Number, minimum: 1 }, background: { required: true, type: () => String }, icon: { required: true, type: () => String }, price: { required: true, type: () => Number, minimum: 0 }, sections: { required: false, type: () => [Object], default: [] }, teacherId: { required: true, type: () => String }, category: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseBulkDTO.prototype, "title", void 0);
__decorate([
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseBulkDTO.prototype, "description", void 0);
__decorate([
    (0, decorators_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateCourseBulkDTO.prototype, "length", void 0);
__decorate([
    (0, decorators_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCourseBulkDTO.prototype, "background", void 0);
__decorate([
    (0, decorators_1.IsUrl)(),
    (0, decorators_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseBulkDTO.prototype, "icon", void 0);
__decorate([
    (0, decorators_1.IsNumber)(),
    (0, decorators_1.Min)(0),
    __metadata("design:type", Number)
], CreateCourseBulkDTO.prototype, "price", void 0);
__decorate([
    (0, decorators_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCourseBulkDTO.prototype, "sections", void 0);
__decorate([
    (0, decorators_1.IsUUID)(),
    (0, decorators_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseBulkDTO.prototype, "teacherId", void 0);
exports.CreateCourseBulkDTO = CreateCourseBulkDTO;
//# sourceMappingURL=create-course-bulk.dto.js.map