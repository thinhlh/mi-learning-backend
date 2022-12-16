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
exports.SectionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_service_1 = require("../course/course.service");
const section_entity_1 = require("./section.entity");
let SectionService = class SectionService {
    constructor(sectionRepository, courseService) {
        this.sectionRepository = sectionRepository;
        this.courseService = courseService;
    }
    async getSection(id, loadCourse = false) {
        return this.sectionRepository.findOne({
            relations: {
                course: loadCourse,
                lessons: true
            },
            where: {
                id: id
            }
        });
    }
    async getSections() {
        return this.sectionRepository.find({
            relations: {
                lessons: true,
            },
        });
    }
    async createSection(createSectionDTO) {
        const course = await this.courseService.getCourseById(createSectionDTO.courseId);
        if (!course) {
            throw new common_1.NotFoundException("Course not found!");
        }
        if (course.sections.some((section) => section.title == createSectionDTO.title)) {
            throw new common_1.BadRequestException("Section already exist in course!");
        }
        const section = this.sectionRepository.create(Object.assign(Object.assign({}, createSectionDTO), { course: course, lessons: [] }));
        return this.sectionRepository.save(section);
    }
    async updateSection(id, updateSectionDTO) {
        const section = await this.sectionRepository.preload(Object.assign({ id: id }, updateSectionDTO));
        if (!section) {
            throw new common_1.NotFoundException("Section not found!");
        }
        else {
            return this.sectionRepository.save(section);
        }
    }
    async deleteSection(id) {
        const result = await this.sectionRepository.softDelete({ id: id });
        return true;
    }
    async restoreDeletedSection(id) {
        await this.sectionRepository.restore({ id: id });
        return null;
    }
};
SectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(section_entity_1.Section)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        course_service_1.CourseService])
], SectionService);
exports.SectionService = SectionService;
//# sourceMappingURL=section.service.js.map