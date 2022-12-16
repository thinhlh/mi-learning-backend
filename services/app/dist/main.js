"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app/app.module");
const custom_exception_filter_1 = require("./config/filters/custom-exception.filter");
const response_interceptor_1 = require("./config/interceptors/response.interceptor");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await appConfig(app);
    await app.listen(8080);
}
async function appConfig(app) {
    app.enableShutdownHooks();
    app.setGlobalPrefix("/api");
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector), {}), new response_interceptor_1.ResponseTransformInterceptor());
    app.useGlobalFilters(new custom_exception_filter_1.CustomExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
            excludeExtraneousValues: true,
            exposeUnsetFields: false,
        }
    }));
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ["1"]
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'statics'), {
        fallthrough: true,
        prefix: "/statics",
    });
    app.enableCors();
    swaggerConfig(app);
}
async function swaggerConfig(app) {
    const swaggerOption = new swagger_1.DocumentBuilder()
        .setTitle("Mi Learning API")
        .setDescription("Mi Learning API documentation")
        .setVersion("1.0.0")
        .setContact("Hoang Thinh", "www.hoangthinh.me", "thinhlh0812@gmail.com")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerOption);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
}
bootstrap();
//# sourceMappingURL=main.js.map