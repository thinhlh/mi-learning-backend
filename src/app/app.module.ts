import { MiddlewareConsumer, Module, NestModule, OnModuleInit, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/config/middlewares/logger.middleware';
import { CommonController } from './common/common.controller';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { SectionModule } from './section/section.module';
import { StudentCourseModule } from './student_course/student_course.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    //   exclude: ['/api*'],
    // }),
    MulterModule.register({
      dest: "./upload"
    }),
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
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'dev' ? true : false,
    }),
    ArticleModule,
    CategoryModule,
    CourseModule,
    LessonModule,
    SectionModule,
    StudentCourseModule,
  ],

  controllers: [CommonController]
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      LoggerMiddleware
    ).forRoutes({
      path: "",
      method: RequestMethod.ALL
    });
  }
}
