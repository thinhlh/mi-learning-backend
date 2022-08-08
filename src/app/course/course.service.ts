import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Category } from "../category/category.entity";
import { Section } from "../section/section.entity";
import { Course } from "./course.entity";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { UpdateCourseDTO } from "./dto/update-course.dto";

export class CourseService {
    constructor(
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
        @InjectRepository(Section) private readonly sectionRepository: Repository<Section>,
    ) { }


    async getCourses(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    async createCourse(createCourseDTO: CreateCourseDTO): Promise<Course> {
        const course = this.courseRepository.create({
            ...createCourseDTO,
            sections: await this.loadSections(createCourseDTO.sections),
            category: await this.loadCategory(createCourseDTO.categoryId),
        });

        return this.courseRepository.save(course);
    }

    async updateCourse(id: string, updateCourseDTO: UpdateCourseDTO): Promise<Course> {

        const course = await this.courseRepository.preload({
            id: id,
            ...updateCourseDTO,
            sections: await this.loadSections(updateCourseDTO.sections),
            category: await this.loadCategory(updateCourseDTO.categoryId),
        })

        if (course) {
            return this.categoryRepository.save(course);
        }
    }

    async deleteCourse(id: string): Promise<any> {
        await this.courseRepository.softDelete({ id: id });

        return null;
    }

    async restoreDeletedCourse(id: string): Promise<any> {
        await this.courseRepository.restore({ id: id });

        return null;
    }

    private async preloadCourse(id: string): Promise<Course> {
        return
    }


    private async loadCategory(id: string): Promise<Category> {
        return this.categoryRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async loadSections(ids: string[]): Promise<Section[]> {
        return this.sectionRepository.find({
            where: {
                id: In(ids)
            }
        })
    }
}