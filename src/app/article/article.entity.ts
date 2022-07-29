import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    createdDate: Date;

    @Column()
    url: string;

    // @ManyToOne(fetch = FetchType.EAGER)
    // private Category category;

    @ManyToOne(() => Category, category => category.id)
    category: Category;
}
