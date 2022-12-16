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
exports.LessonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_service_1 = require("../course/course.service");
const section_service_1 = require("../section/section.service");
const lesson_entity_1 = require("./lesson.entity");
let LessonService = class LessonService {
    constructor(courseService, sectionService, lessonRepository) {
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.lessonRepository = lessonRepository;
    }
    async getLessons() {
        return this.lessonRepository.find({});
    }
    async createLesson(createLesstonDTO) {
        const section = await this.sectionService.getSection(createLesstonDTO.sectionId, true);
        if (!section) {
            throw new common_1.NotFoundException("Section not found!");
        }
        if (section.lessons.some((lesson) => lesson.title == createLesstonDTO.title)) {
            throw new common_1.BadRequestException("Lesson already exist!");
        }
        const lesson = this.lessonRepository.create(Object.assign(Object.assign({}, createLesstonDTO), { lessonOrder: await this.courseService.getCurrentNumberOfLesson(section.course.id) + 1, section: section }));
        return this.lessonRepository.save(lesson);
    }
    async updateLesson(id, updateLessonDTO) {
        const lesson = await this.lessonRepository.preload(Object.assign({ id: id }, updateLessonDTO));
        if (!lesson) {
            throw new common_1.NotFoundException("Lesson not found!");
        }
        else {
            return this.lessonRepository.save(lesson);
        }
    }
    async deleteLesson(id) {
        const result = await this.lessonRepository.softDelete({ id: id });
        return true;
    }
    async restoreDeletedLesson(id) {
        await this.lessonRepository.restore({ id: id });
        return null;
    }
};
LessonService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        section_service_1.SectionService,
        typeorm_2.Repository])
], LessonService);
exports.LessonService = LessonService;
//# sourceMappingURL=lesson.service.js.map