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
exports.GetCoursesQuery = exports.GetCourseType = void 0;
const class_validator_1 = require("class-validator");
var GetCourseType;
(function (GetCourseType) {
    GetCourseType["FOR_YOU"] = "FOR_YOU";
    GetCourseType["ME"] = "ME";
})(GetCourseType = exports.GetCourseType || (exports.GetCourseType = {}));
class GetCoursesQuery {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], GetCoursesQuery.prototype, "loadSections", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], GetCoursesQuery.prototype, "loadLessons", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(GetCourseType),
    __metadata("design:type", String)
], GetCoursesQuery.prototype, "type", void 0);
exports.GetCoursesQuery = GetCoursesQuery;
//# sourceMappingURL=get-course.query.js.map