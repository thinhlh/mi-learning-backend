import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @Column({ nullable: false, type: "int" })
    value: number;

    // @ManyToOne(fetch = FetchType.LAZY)
    // private StudentCourse studentCourse;
}