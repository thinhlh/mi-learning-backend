import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { Section } from "../section/section.entity";

@Entity()
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: "bigint",
    })
    length: number;

    @Column()
    background: string;

    @Column({ nullable: true })
    icon: string;

    @Column({
        type: "float"
    })
    price: number;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "teacher_id")
    // private Teacher teacher;

    @OneToMany(() => Section, section => section.course)
    sections: Section[];

    // @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    // @Getter(value = AccessLevel.NONE)
    // private Set<StudentCourse> students = new LinkedHashSet<>();


    @ManyToOne(() => Category, category => category.courses)
    category: Category;
}