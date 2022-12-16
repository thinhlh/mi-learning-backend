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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_section_dto_1 = require("./dto/create-section.dto");
const update_section_dto_1 = require("./dto/update-section.dto");
const section_service_1 = require("./section.service");
let SectionController = class SectionController {
    constructor(sectionService) {
        this.sectionService = sectionService;
    }
    async getSections() {
        return this.sectionService.getSections();
    }
    async createSection(createSectionDTO) {
        return this.sectionService.createSection(createSectionDTO);
    }
    async updateSection(updateSectionDTO, id) {
        return this.sectionService.updateSection(id, updateSectionDTO);
    }
    async deleteSection(id) {
        return this.sectionService.deleteSection(id);
    }
    async restoreDeletedSection(id) {
        return this.sectionService.restoreDeletedSection(id);
    }
};
__decorate([
    (0, common_1.Get)("/sections"),
    openapi.ApiResponse({ status: 200, type: [require("./section.entity").Section] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "getSections", null);
__decorate([
    (0, common_1.Post)("/section"),
    openapi.ApiResponse({ status: 201, type: require("./section.entity").Section }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_section_dto_1.CreateSectionDTO]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "createSection", null);
__decorate([
    (0, common_1.Patch)("/section/:id"),
    openapi.ApiResponse({ status: 200, type: require("./section.entity").Section }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_section_dto_1.UpdateSectionDTO, String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "updateSection", null);
__decorate([
    (0, common_1.Delete)('/section/:id'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "deleteSection", null);
__decorate([
    (0, common_1.Post)("/section/restore/:id"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "restoreDeletedSection", null);
SectionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [section_service_1.SectionService])
], SectionController);
exports.SectionController = SectionController;
//# sourceMappingURL=section.controller.js.map