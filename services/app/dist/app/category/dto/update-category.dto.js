"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_category_dto_1 = require("./create-category.dto");
class UpdateCategoryDTO extends (0, swagger_1.PartialType)(create_category_dto_1.CreateCategoryDTO) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCategoryDTO = UpdateCategoryDTO;
//# sourceMappingURL=update-category.dto.js.map