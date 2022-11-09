import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Section } from "../section/section.entity";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        nullable: false
    })
    title: string;

    @Column("integer")
    lessonOrder: number;

    @ManyToOne(() => Section, section => section.lessons)
    section: Section;

    @Column()
    url: string;

    // @OneToOne(fetch = FetchType.EAGER)
    // @JoinColumn(referencedColumnName = "id")
    // private VideoLesson videoLesson;

    // @OneToOne(fetch = FetchType.EAGER)
    // @JoinColumn(referencedColumnName = "id")
    // private TestLesson testLesson;

    // @OneToMany(fetch = FetchType.EAGER, mappedBy = "student")
    // @JsonIgnore
    // private List<StudentLesson> students;
}