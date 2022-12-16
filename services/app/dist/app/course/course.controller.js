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
exports.CourseController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const course_service_1 = require("./course.service");
const create_course_dto_1 = require("./dto/create-course.dto");
const get_course_query_1 = require("./dto/get-course.query");
const update_course_dto_1 = require("./dto/update-course.dto");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getCourses(query) {
        await this.courseService.getCurrentNumberOfLesson("15fd3d17-6c40-489d-a5c4-a7e8bd418b38");
        return this.courseService.getCourses(query);
    }
    async createCourse(createCourseDTO) {
        return this.courseService.createCourse(createCourseDTO);
    }
    async updateCourse(id, updateCourseDTO) {
        return this.courseService.updateCourse(id, updateCourseDTO);
    }
    async deleteCourse(id) {
        return this.courseService.deleteCourse(id);
    }
    async restoreDeletedCourse(id) {
        return this.courseService.restoreDeletedCourse(id);
    }
};
__decorate([
    (0, common_1.Get)("/courses"),
    openapi.ApiResponse({ status: 200, type: [require("./course.entity").Course] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_course_query_1.GetCourseQuery]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourses", null);
__decorate([
    (0, common_1.Post)("/course"),
    openapi.ApiResponse({ status: 201, type: require("./course.entity").Course }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_dto_1.CreateCourseDTO]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Patch)("/course/:id"),
    openapi.ApiResponse({ status: 200, type: require("./course.entity").Course }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_course_dto_1.UpdateCourseDTO]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Delete)("/course/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "deleteCourse", null);
__decorate([
    (0, common_1.Post)("/course/restore/:id"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "restoreDeletedCourse", null);
CourseController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map