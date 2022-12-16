import { MiddlewareConsumer, NestModule, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EntityManager } from 'typeorm';
import { CourseService } from './course/course.service';
export declare class AppModule implements NestModule, OnModuleDestroy, OnModuleInit {
    private readonly manager;
    private readonly configService;
    private readonly courseService;
    constructor(manager: EntityManager, configService: ConfigService, courseService: CourseService);
    onModuleInit(): void;
    onModuleDestroy(): Promise<void>;
    configure(consumer: MiddlewareConsumer): void;
}
