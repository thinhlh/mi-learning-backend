"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_module_1 = require("../course/course.module");
const section_controller_1 = require("./section.controller");
const section_entity_1 = require("./section.entity");
const section_service_1 = require("./section.service");
let SectionModule = class SectionModule {
};
SectionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([section_entity_1.Section]), course_module_1.CourseModule],
        providers: [section_service_1.SectionService],
        controllers: [section_controller_1.SectionController],
        exports: [section_service_1.SectionService]
    })
], SectionModule);
exports.SectionModule = SectionModule;
//# sourceMappingURL=section.module.js.map