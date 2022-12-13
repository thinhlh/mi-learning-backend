import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { I18nService } from "nestjs-i18n";
import { EntityManager, In, Repository } from "typeorm";
import { Category } from "../category/category.entity";
import { CategoryService } from "../category/category.service";
import { CreateCategoryDTO } from "../category/dto/create-category.dto";
import { Lesson } from "../lesson/lesson.entity";
import { CreateSectionDTO } from "../section/dto/create-section.dto";
import { Section } from "../section/section.entity";
import { SectionService } from "../section/section.service";
import { Course } from "./course.entity";
import { CreateCourseBulkDTO } from "./dto/create-course-bulk.dto";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { GetCourseQuery } from "./dto/get-course.query";
import { UpdateCourseDTO } from "./dto/update-course.dto";

@Injectable()
export class CourseService {
    constructor(
        private readonly entityManager: EntityManager,
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
        @InjectRepository(Section) private readonly sectionRepository: Repository<Section>,
        private readonly categoryService: CategoryService,
        // private readonly sectionService: SectionService,
        private readonly i18n: I18nService,

    ) { }

    async getCurrentNumberOfLesson(courseId: string): Promise<number> {
        return await this.entityManager
            .countBy(Lesson, {
                section: {
                    course: {
                        id: courseId
                    }
                }
            })
    }

    async getCourse(id?: string): Promise<Course> {
        if (id == null) return null

        return this.courseRepository.findOne({
            where: {
                id: id
            },
            relations: {
                sections: true
            }
        })
    }

    async getCourses(query: GetCourseQuery): Promise<Course[]> {
        return this.courseRepository.find({
            relations: {
                category: true,
                sections: query.loadSections == null ? false : {
                    lessons: query.loadLessons ?? false
                },
            },
        });
    }

    async createCourseBulk(createCourseBulkDTO: CreateCourseBulkDTO): Promise<Course> {
        const categoryDTO = createCourseBulkDTO.category
        let category: Category;

        category = await this.categoryService.getOrCreateCategory(categoryDTO)

        var course = await this.courseRepository.findOneBy({ title: createCourseBulkDTO.title })

        if (course == null) {
            course = this.courseRepository.create({
                ...createCourseBulkDTO,
                sections: [],
                category: category,
            })
        }

        return this.courseRepository.save(course)

    }

    async createCourse(createCourseDTO: CreateCourseDTO): Promise<Course> {
        const category = await this.categoryService.getOrCreateCategory(createCourseDTO.categoryId)
        if (!category) {
            throw new NotFoundException("Category not found!")
        }

        let course = this.courseRepository.create({
            ...createCourseDTO,
            category: category,
            sections: [],
        });

        course = await this.courseRepository.save(course);

        return course;

    }

    async updateCourse(id: string, updateCourseDTO: UpdateCourseDTO): Promise<Course> {

        const course = await this.courseRepository.preload({
            id: id,
            ...updateCourseDTO,
            sections: await this.loadSections(updateCourseDTO.sections),
            category: await this.categoryService.getOrCreateCategory(updateCourseDTO.categoryId),
        })

        if (course) {
            return this.courseRepository.save(course);
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

    private async loadSections(ids: string[]): Promise<Section[]> {
        return this.sectionRepository.find({
            where: {
                id: In(ids)
            }
        })
    }
}