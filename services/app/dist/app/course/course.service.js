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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_i18n_1 = require("nestjs-i18n");
const typeorm_2 = require("typeorm");
const category_service_1 = require("../category/category.service");
const lesson_entity_1 = require("../lesson/lesson.entity");
const section_entity_1 = require("../section/section.entity");
const course_entity_1 = require("./course.entity");
let CourseService = class CourseService {
    constructor(entityManager, courseRepository, sectionRepository, lessonRepository, categoryService, i18n) {
        this.entityManager = entityManager;
        this.courseRepository = courseRepository;
        this.sectionRepository = sectionRepository;
        this.lessonRepository = lessonRepository;
        this.categoryService = categoryService;
        this.i18n = i18n;
    }
    async getCurrentNumberOfLesson(courseId) {
        return await this.entityManager
            .countBy(lesson_entity_1.Lesson, {
            section: {
                course: {
                    id: courseId
                }
            }
        });
    }
    async getCourse(id) {
        if (id == null)
            return null;
        return this.courseRepository.findOne({
            where: {
                id: id
            },
            relations: {
                sections: true
            }
        });
    }
    async getCourses(query) {
        var _a;
        return this.courseRepository.find({
            relations: {
                category: true,
                sections: query.loadSections == null ? false : {
                    lessons: (_a = query.loadLessons) !== null && _a !== void 0 ? _a : false
                },
            },
        });
    }
    async createCourseBulk(createCourseBulkDTO) {
        const categoryDTO = createCourseBulkDTO.category;
        let category;
        category = await this.categoryService.getOrCreateCategory(categoryDTO);
        var course = await this.courseRepository.findOne({ where: { title: createCourseBulkDTO.title }, relations: { sections: true } });
        const sections = [];
        for (const createSectionDTO of createCourseBulkDTO.sections) {
            var section;
            if (course == null) {
                if (typeof createSectionDTO == "string") {
                    section = await this.sectionRepository.findOneBy({ id: createSectionDTO });
                    if (!section) {
                        sections.push(section);
                    }
                }
                else {
                    sections.push(await this.createSection(createSectionDTO));
                }
            }
            else {
                if (typeof createSectionDTO == "string") {
                    const sectionExistsInCouse = course.sections.find((section) => section.id == createSectionDTO);
                    if (sectionExistsInCouse) {
                        sections.push(sectionExistsInCouse);
                    }
                    else {
                    }
                }
                else {
                    const sectionExistsInCouse = course.sections.find((section) => section.title == createSectionDTO.title);
                    if (sectionExistsInCouse) {
                        sections.push(sectionExistsInCouse);
                    }
                    else {
                        sections.push(await this.createSection(createSectionDTO));
                    }
                }
            }
        }
        if (course == null) {
            course = this.courseRepository.create(Object.assign(Object.assign({}, createCourseBulkDTO), { sections: sections, category: category }));
        }
        else {
            course.sections = sections;
        }
        return this.courseRepository.save(course);
    }
    async createSection(createSectionDTO) {
        const createdSection = this.sectionRepository.create(Object.assign(Object.assign({}, createSectionDTO), { lessons: await this.createLessons(createSectionDTO.lessons) }));
        const section = await this.sectionRepository.save(createdSection);
        return section;
    }
    async createLessons(createLessonDTOs) {
        const lessons = [];
        for (const createLessonDTO of createLessonDTOs) {
            let lesson;
            if (typeof createLessonDTO == "string") {
                lesson = await this.lessonRepository.findOneBy({ id: createLessonDTO });
                if (lessons.some((lessonInList) => lessonInList.title == lesson.title)) {
                    continue;
                }
                else {
                }
            }
            else {
                const createdLesson = this.lessonRepository.create(Object.assign({}, createLessonDTO));
                if (lessons.some((lessonInList) => lessonInList.title == createdLesson.title)) {
                    continue;
                }
                else {
                    lesson = await this.lessonRepository.save(createdLesson);
                }
            }
            if (lesson) {
                lessons.push(lesson);
            }
        }
        return lessons;
    }
    async createCourse(createCourseDTO) {
        const category = await this.categoryService.getOrCreateCategory(createCourseDTO.categoryId);
        if (!category) {
            throw new common_1.NotFoundException("Category not found!");
        }
        let course = this.courseRepository.create(Object.assign(Object.assign({}, createCourseDTO), { category: category, sections: [] }));
        course = await this.courseRepository.save(course);
        return course;
    }
    async updateCourse(id, updateCourseDTO) {
        const course = await this.courseRepository.preload(Object.assign(Object.assign({ id: id }, updateCourseDTO), { sections: await this.loadSections(updateCourseDTO.sections), category: await this.categoryService.getOrCreateCategory(updateCourseDTO.categoryId) }));
        if (course) {
            return this.courseRepository.save(course);
        }
    }
    async deleteCourse(id) {
        await this.courseRepository.softDelete({ id: id });
        return null;
    }
    async restoreDeletedCourse(id) {
        await this.courseRepository.restore({ id: id });
        return null;
    }
    async loadSections(ids) {
        return this.sectionRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(2, (0, typeorm_1.InjectRepository)(section_entity_1.Section)),
    __param(3, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        category_service_1.CategoryService,
        nestjs_i18n_1.I18nService])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map