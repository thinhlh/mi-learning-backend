import { Type } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @UpdateDateColumn()
    @Type(() => Number)
    updatedAt: Date;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @Getter(value = AccessLevel.NONE)
    // private StudentLesson studentLesson;
}