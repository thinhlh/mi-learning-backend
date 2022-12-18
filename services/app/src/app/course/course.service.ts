import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { I18nService } from "nestjs-i18n";
import { ArrayContains, EntityManager, In, Repository } from "typeorm";
import { Category } from "../category/category.entity";
import { CategoryService } from "../category/category.service";
import { CreateCategoryDTO } from "../category/dto/create-category.dto";
import { CreateLessonBulkDTO } from "../lesson/dto/create-lesson-bulk.dto";
import { Lesson } from "../lesson/lesson.entity";
import { CreateSectionBulkDTO } from "../section/dto/create-section-bulk.dto";
import { CreateSectionDTO } from "../section/dto/create-section.dto";
import { Section } from "../section/section.entity";
import { SectionService } from "../section/section.service";
import { Course } from "./course.entity";
import { CreateCourseBulkDTO } from "./dto/create-course-bulk.dto";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { UpdateCourseDTO } from "./dto/update-course.dto";
import { CourseResponseDTO } from "./dto/course-response.dto";
import { SectionResponseDTO } from "../section/dto/section-response.dto";
import { classToPlain, plainToClass } from "class-transformer";
import { GetCoursesQuery } from "./dto/get-course.query";
import { TeacherService } from "../teacher/teacher.service";
import { Teacher } from "../teacher/teacher.entity";
import { Rating } from "../rating/rating.entity";
import { VideoLesson } from "../lesson/dto/lesson-response.dto";

@Injectable()
export class CourseService {
    constructor(
        private readonly entityManager: EntityManager,
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
        @InjectRepository(Section) private readonly sectionRepository: Repository<Section>,
        @InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>,
        private readonly categoryService: CategoryService,
        private readonly teacherService: TeacherService,
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

    async getCourseById(id: string): Promise<Course> {
        if (id == null) return null

        return this.courseRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                category: true,
                sections: true,
            }
        })
    }

    async getCourse(user?: string, courseId?: string): Promise<CourseResponseDTO> {
        if (courseId == null) return null

        const course = await this.courseRepository.findOne({
            where: {
                id: courseId,
                // studentCourses: {
                //     courseId: courseId,
                //     // studentId: user
                // }
            },
            select: {
                studentCourses: false,
            },
            relations: {
                studentCourses: {
                    ratings: true
                },
                teacher: {
                    user: true
                },
                category: true,
                sections: {
                    lessons: true
                },
            }
        })

        return this.mapCourseToDTO(course)
    }

    async getCourses(query: GetCoursesQuery): Promise<Course[]> {
        const courses = await this.courseRepository.find({
            relations: {
                // studentCourses: true,
                category: true,
                sections: query.loadSections == null ? false : {
                    lessons: query.loadLessons ?? false
                },
            },
        });

        return courses;
    }

    async getCoursesBulk(): Promise<CourseResponseDTO[]> {
        const courses = await this.courseRepository.find({
            relations: {
                studentCourses: {
                    ratings: true
                },
                teacher: {
                    user: true
                },
                category: true,
                sections: {
                    lessons: true
                },
            }
        });

        return courses.map((course) => this.mapCourseToDTO(course));
    }

    async createCourseBulk(createCourseBulkDTO: CreateCourseBulkDTO): Promise<Course> {
        const categoryDTO = createCourseBulkDTO.category
        let category: Category;

        category = await this.categoryService.getOrCreateCategory(categoryDTO)

        var course = await this.courseRepository.findOne({ where: { title: createCourseBulkDTO.title }, relations: { sections: true } })

        const sections: Section[] = []

        for (const createSectionDTO of createCourseBulkDTO.sections) {
            var section: Section

            if (course == null) {
                // No course before
                if (typeof createSectionDTO == "string") {
                    section = await this.sectionRepository.findOneBy({ id: createSectionDTO });
                    if (!section) {
                        sections.push(section);
                    }
                } else {
                    sections.push(await this.createSection(createSectionDTO));
                }
            } else {
                // Already has course
                if (typeof createSectionDTO == "string") {
                    const sectionExistsInCouse = course.sections.find((section) => section.id == createSectionDTO)

                    if (sectionExistsInCouse) {
                        sections.push(sectionExistsInCouse)
                    } else {
                        // Section not found => skip
                    }
                } else {
                    const sectionExistsInCouse = course.sections.find((section) => section.title == createSectionDTO.title)
                    if (sectionExistsInCouse) {
                        sections.push(sectionExistsInCouse)
                    } else {
                        sections.push(await this.createSection(createSectionDTO));
                    }
                }
            }
        }

        if (course == null) {
            course = this.courseRepository.create({
                ...createCourseBulkDTO,
                sections: sections,
                teacher: await this.teacherService.getTeacherByEmail(createCourseBulkDTO.teacherEmail),
                category: category,
            })
        } else {
            course.sections = sections
        }

        return this.courseRepository.save(course)
    }

    private async createSection(createSectionDTO: CreateSectionBulkDTO): Promise<Section> {
        const createdSection = this.sectionRepository.create({ ...createSectionDTO, lessons: await this.createLessons(createSectionDTO.lessons) });
        const section = await this.sectionRepository.save(createdSection);

        return section
    }

    private async createLessons(createLessonDTOs: (string | CreateLessonBulkDTO)[]): Promise<Lesson[]> {
        const lessons: Lesson[] = []
        for (const createLessonDTO of createLessonDTOs) {
            let lesson: Lesson
            if (typeof createLessonDTO == "string") {
                lesson = await this.lessonRepository.findOneBy({ id: createLessonDTO });

                if (lessons.some((lessonInList) => lessonInList.title == lesson.title)) {
                    // Already exist in section
                    continue;
                } else {

                }
            } else {
                const createdLesson = this.lessonRepository.create({ ...createLessonDTO })

                if (lessons.some((lessonInList) => lessonInList.title == createdLesson.title)) {
                    // Already exist in section
                    continue;
                } else {
                    lesson = await this.lessonRepository.save(createdLesson);
                }
            }

            if (lesson) {
                lessons.push(lesson);
            }
        }

        return lessons
    }

    async createCourse(createCourseDTO: CreateCourseDTO): Promise<Course> {
        const category = await this.categoryService.getOrCreateCategory(createCourseDTO.categoryId)
        if (!category) {
            throw new NotFoundException("Category not found!")
        }
        let course = this.courseRepository.create({
            ...createCourseDTO,
            category: category,
            teacher: await this.teacherService.getTeacherByEmail(createCourseDTO.teacherEmail),
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

    private mapCourseToDTO(course: Course): CourseResponseDTO {
        const ratings = course
            .studentCourses
            .map((studentCourse) => studentCourse.ratings)
            .reduce((previos, current) => {
                previos.push(...current);
                return previos;
            }, [])
        const ratingByStars = [0, 0, 0, 0, 0] // From 1->5

        for (const rating of ratings) {
            ratingByStars[rating.value - 1] += 1
        }

        const totalRatings = ratings.reduce((prev, cur) => prev + cur.value, 0)

        const response: CourseResponseDTO = ({
            id: course.id,
            title: course.title,
            background: course.background,
            deletedAt: course.deletedAt,
            description: course.description,
            length: course.length,
            price: course.price,
            icon: course.icon,
            sections: course.sections.map<SectionResponseDTO>((section) => ({
                id: section.id,
                title: section.title,
                lessons: section.lessons.map((lesson) => ({
                    id: lesson.id,
                    lessonOrder: lesson.lessonOrder,
                    title: lesson.title,
                    videoLesson: ({ length: 0, videoUrl: lesson.url }),
                    metadata: ({ finished: Math.random() >= 0.5, notes: [], playback: 0 })
                })),
                finishedLesson: 0,
                totalLesson: section.lessons.length,
                length: 3600
            })),
            courseRatings: {
                ratings: ratings,
                average: ratings.length == 0 ? 0 : totalRatings / ratings.length,
                // Count the appearnce of each rating value and divide by the total of rating
                ratingAverageByStar: ratingByStars.map((numberOfRatingByStar) => Math.floor((numberOfRatingByStar / (ratings.length == 0 ? 1 : ratings.length)) * 100))
            },
            teacher: {
                id: course.teacher.id,
                name: course.teacher.user.name,
                avatar: course.teacher.user.avatar
            },
            category: course.category.title,
            enrolled: course.studentCourses == null ? false : course.studentCourses.some((studentCourse) => studentCourse.enrolled),
            saved: course.studentCourses == null ? false : course.studentCourses.some((studentCourse) => studentCourse.saved)
        })
        return response;
    }
}