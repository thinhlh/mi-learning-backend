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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_middleware_1 = require("../config/middlewares/logger.middleware");
const common_controller_1 = require("./common/common.controller");
const config_1 = require("@nestjs/config");
const category_module_1 = require("./category/category.module");
const article_module_1 = require("./article/article.module");
const course_module_1 = require("./course/course.module");
const lesson_module_1 = require("./lesson/lesson.module");
const section_module_1 = require("./section/section.module");
const student_course_module_1 = require("./student_course/student_course.module");
const path = require("path");
const rating_module_1 = require("./rating/rating.module");
const typeorm_2 = require("typeorm");
const course_service_1 = require("./course/course.service");
const data_initializer_module_1 = require("../data/data-initializer.module");
const nestjs_i18n_1 = require("nestjs-i18n");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
    constructor(manager, configService, courseService) {
        this.manager = manager;
        this.configService = configService;
        this.courseService = courseService;
    }
    onModuleInit() {
    }
    async onModuleDestroy() {
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes({
            path: "",
            method: common_1.RequestMethod.ALL
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `../../env/${process.env.ENV}.env`,
                isGlobal: true,
            }),
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: "en",
                loaderOptions: {
                    path: path.join(__dirname, "../i18n/"),
                    watch: true,
                },
                resolvers: [nestjs_i18n_1.AcceptLanguageResolver, nestjs_i18n_1.QueryResolver],
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                async useFactory(configService) {
                    return {
                        host: process.env.POSTGRES_HOST,
                        username: process.env.POSTGRES_USER,
                        password: process.env.POSTGRES_PASSWORD,
                        database: process.env.POSTGRES_DB,
                        port: +process.env.POSTGRES_PORT,
                        type: 'postgres',
                        logger: "advanced-console",
                        autoLoadEntities: true,
                        synchronize: process.env.ENV === 'dev' ? true : false,
                    };
                },
            }),
            typeorm_1.TypeOrmModule.forRoot({
                host: process.env.POSTGRES_HOST,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                port: +process.env.POSTGRES_PORT,
                type: 'postgres',
                logger: "advanced-console",
                autoLoadEntities: true,
                synchronize: process.env.ENV === 'dev' ? true : false,
            }),
            category_module_1.CategoryModule,
            article_module_1.ArticleModule,
            course_module_1.CourseModule,
            lesson_module_1.LessonModule,
            section_module_1.SectionModule,
            student_course_module_1.StudentCourseModule,
            rating_module_1.RatingModule,
            user_module_1.UserModule,
            data_initializer_module_1.DataInitializerModule,
        ],
        controllers: [common_controller_1.CommonController]
    }),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        config_1.ConfigService,
        course_service_1.CourseService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map