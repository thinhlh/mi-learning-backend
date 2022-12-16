"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionResponseDTO = void 0;
const openapi = require("@nestjs/swagger");
class SectionResponseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, lessons: { required: true, type: () => [require("../../lesson/lesson.entity").Lesson] }, finishedLesson: { required: true, type: () => Number }, totalLesson: { required: true, type: () => Number }, length: { required: true, type: () => Number } };
    }
}
exports.SectionResponseDTO = SectionResponseDTO;
//# sourceMappingURL=section-response.dto.js.map