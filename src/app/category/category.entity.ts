import { Expose, Type } from "class-transformer";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "../article/article.entity";
import { Course } from "../course/course.entity";
import { Lesson } from "../lesson/lesson.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    background: string;

    @DeleteDateColumn({})
    @Type(() => Number)
    deletedAt: Date;

    @OneToMany(() => Course, course => course.category)
    courses: Course[];

    @OneToMany(() => Article, article => article.category)
    articles: Article[]
}