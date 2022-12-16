import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { CourseService } from "../course/course.service";
import { CreateSectionDTO } from "./dto/create-section.dto";
import { UpdateSectionDTO } from "./dto/update-section.dto";
import { Section } from "./section.entity";

@Injectable()
export class SectionService {
    constructor(
        @InjectRepository(Section) private readonly sectionRepository: Repository<Section>,
        private readonly courseService: CourseService,
    ) { }

    async getSection(id: string, loadCourse: boolean = false): Promise<Section> {
        return this.sectionRepository.findOne({
            relations: {
                course: loadCourse,
                lessons: true
            },
            where: {
                id: id
            }
        })
    }

    async getSections(): Promise<Section[]> {
        return this.sectionRepository.find({
            relations: {
                lessons: true,
            },
        });
    }

    async createSection(createSectionDTO: CreateSectionDTO): Promise<Section> {
        const course = await this.courseService.getCourseById(createSectionDTO.courseId);

        if (!course) {
            throw new NotFoundException("Course not found!")
        }


        if (course.sections.some((section) => section.title == createSectionDTO.title)) {
            throw new BadRequestException("Section already exist in course!")
        }
        const section = this.sectionRepository.create({
            ...createSectionDTO,
            course: course,
            lessons: [],
        });

        return this.sectionRepository.save(section);
    }

    async updateSection(id: string, updateSectionDTO: UpdateSectionDTO): Promise<Section> {
        const section = await this.sectionRepository.preload({
            id: id,
            ...updateSectionDTO,
        });

        if (!section) {
            throw new NotFoundException("Section not found!");
        } else {
            return this.sectionRepository.save(section);
        }
    }

    async deleteSection(id: string): Promise<boolean> {
        const result = await this.sectionRepository.softDelete({ id: id });
        return true;
    }

    async restoreDeletedSection(id: string): Promise<any> {
        await this.sectionRepository.restore({ id: id });
        return null;
    }
}