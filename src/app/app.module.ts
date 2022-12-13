import { MiddlewareConsumer, Module, NestModule, OnApplicationShutdown, OnModuleDestroy, OnModuleInit, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/config/middlewares/logger.middleware';
import { CommonController } from './common/common.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { SectionModule } from './section/section.module';
import { StudentCourseModule } from './student_course/student_course.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { MulterModule } from '@nestjs/platform-express';
import { RatingModule } from './rating/rating.module';
import { EntityManager } from 'typeorm';
import { CourseService } from './course/course.service';
import { DataInitializerModule } from 'src/data/data-initializer.module';

@Module({
  imports: [
    // MulterModule.register({
    //   dest: "./static",
    //   preservePath: true,
    // }),
    ConfigModule.forRoot({
      envFilePath:
        `./env/${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      port: +process.env.POSTGRES_PORT,
      type: 'postgres',
      logger: "advanced-console",
      // logging: process.env.NODE_ENV === 'dev' ? true : false,
      autoLoadEntities: true,
      // synchronize: process.env.NODE_ENV === 'dev' ? true : false,
    }),
    CategoryModule,
    ArticleModule,
    CourseModule,
    LessonModule,
    SectionModule,
    StudentCourseModule,
    RatingModule,
    DataInitializerModule,
  ],

  controllers: [CommonController]
})
export class AppModule implements NestModule, OnModuleDestroy, OnModuleInit {

  constructor(
    private readonly manager: EntityManager,
    private readonly configService: ConfigService,
    private readonly courseService: CourseService,
  ) {

  }


  onModuleInit() {
  }
  async onModuleDestroy() {
    if (this.configService.get("NODE_ENV") === 'test') {
      const entities = this.manager.connection.entityMetadatas

      for (const entity of entities) {
        const repository = this.manager.getRepository(entity.name);
        await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
      }
    }
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      LoggerMiddleware
    ).forRoutes({
      path: "",
      method: RequestMethod.ALL
    });
  }
}
