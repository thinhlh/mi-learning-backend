"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_section_dto_1 = require("./create-section.dto");
class UpdateSectionDTO extends (0, swagger_1.PartialType)(create_section_dto_1.CreateSectionDTO) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSectionDTO = UpdateSectionDTO;
//# sourceMappingURL=update-section.dto.js.map