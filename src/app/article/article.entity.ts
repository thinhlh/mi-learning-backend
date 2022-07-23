import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column("timestamp", {
        nullable: true,
        default: new Date()
    })
    createdDate: Date;

    @Column()
    url: string;
}