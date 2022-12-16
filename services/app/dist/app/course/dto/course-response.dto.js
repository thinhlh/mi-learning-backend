"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResponseDTO = void 0;
const openapi = require("@nestjs/swagger");
class CourseResponseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, length: { required: true, type: () => Number }, background: { required: true, type: () => String }, icon: { required: true, type: () => String }, price: { required: true, type: () => Number }, sections: { required: true, type: () => [require("../../section/dto/section-response.dto").SectionResponseDTO] }, category: { required: true, type: () => require("../../category/category.entity").Category }, deletedAt: { required: true, type: () => Date } };
    }
}
exports.CourseResponseDTO = CourseResponseDTO;
//# sourceMappingURL=course-response.dto.js.map