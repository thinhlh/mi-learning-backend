"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLessonDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_lesson_dto_1 = require("./create-lesson.dto");
class UpdateLessonDTO extends (0, swagger_1.PartialType)(create_lesson_dto_1.CreateLessonDTO) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateLessonDTO = UpdateLessonDTO;
//# sourceMappingURL=update-lesson.dto.js.map