import { Exclude, Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity()
export class Article {
    @PrimaryGeneratedColumn("uuid")
    @Expose()
    id: string;

    @Column()
    @Expose()
    title: string;

    @Column()
    @Expose()
    author: string;

    @Column()
    @Expose()
    thumbnail: string;

    @CreateDateColumn()
    @Expose()
    createdDate: Date;

    @Column()
    @Expose()
    url: string;

    @ManyToOne(() => Category, category => category.id, { cascade: true })
    @Expose()
    category: Category;
}
