import { Exclude, Expose, Transform, Type } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity()
export class Article {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    thumbnail: string;

    @CreateDateColumn()
    @Type(() => Number)
    createdAt: Date;

    @DeleteDateColumn()
    @Type(() => Number)
    deletedAt?: Date;

    @Column()
    url: string;

    @ManyToOne(() => Category, category => category.id, { cascade: true, nullable: false })
    category: Category;
}
