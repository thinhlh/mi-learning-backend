import { Repository } from "typeorm";
import { CourseService } from "../course/course.service";
import { CreateSectionDTO } from "./dto/create-section.dto";
import { UpdateSectionDTO } from "./dto/update-section.dto";
import { Section } from "./section.entity";
export declare class SectionService {
    private readonly sectionRepository;
    private readonly courseService;
    constructor(sectionRepository: Repository<Section>, courseService: CourseService);
    getSection(id: string, loadCourse?: boolean): Promise<Section>;
    getSections(): Promise<Section[]>;
    createSection(createSectionDTO: CreateSectionDTO): Promise<Section>;
    updateSection(id: string, updateSectionDTO: UpdateSectionDTO): Promise<Section>;
    deleteSection(id: string): Promise<boolean>;
    restoreDeletedSection(id: string): Promise<any>;
}
