import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { Section } from "../section/section.entity";
import { Teacher } from "../teacher/teacher.entity";

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

    @ManyToOne(() => Teacher, teacher => teacher.courses)
    teacher: Teacher;

    @OneToMany(() => Section, section => section.course)
    sections: Section[];

    // @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    // @Getter(value = AccessLevel.NONE)
    // private Set<StudentCourse> students = new LinkedHashSet<>();


    @ManyToOne(() => Category, category => category.courses)
    category: Category;
}