import { Expose } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "../article/article.entity";
import { Course } from "../course/course.entity";
import { Lesson } from "../lesson/lesson.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    @Expose()
    id: string;

    @Column()
    @Expose()
    title: string;

    @Column()
    @Expose()
    background: string;

    @OneToMany(() => Course, course => course.category)
    @Expose()
    courses: Course[];

    @OneToMany(() => Article, article => article.category)
    articles: Article[]

}