import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @Column({
        default: 0,
        type: "int"
    })
    updatedAt: string;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @Getter(value = AccessLevel.NONE)
    // private StudentLesson studentLesson;
}