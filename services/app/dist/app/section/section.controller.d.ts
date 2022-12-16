import { CreateSectionDTO } from "./dto/create-section.dto";
import { UpdateSectionDTO } from "./dto/update-section.dto";
import { Section } from "./section.entity";
import { SectionService } from "./section.service";
export declare class SectionController {
    private readonly sectionService;
    constructor(sectionService: SectionService);
    getSections(): Promise<Section[]>;
    createSection(createSectionDTO: CreateSectionDTO): Promise<Section>;
    updateSection(updateSectionDTO: UpdateSectionDTO, id: string): Promise<Section>;
    deleteSection(id: string): Promise<boolean>;
    restoreDeletedSection(id: string): Promise<any>;
}
