"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticleDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_article_dto_1 = require("./create-article.dto");
class UpdateArticleDTO extends (0, swagger_1.PartialType)(create_article_dto_1.CreateArticleDTO) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateArticleDTO = UpdateArticleDTO;
//# sourceMappingURL=update-article.dto.js.map