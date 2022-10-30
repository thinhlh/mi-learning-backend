import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { CreateSectionDTO } from "./dto/create-section.dto";
import { UpdateSectionDTO } from "./dto/update-section.dto";
import { Section } from "./section.entity";
import { SectionService } from "./section.service";

@Controller()
export class SectionController {
    constructor(private readonly sectionService: SectionService) { }

    @Get("/sections")
    async getSections(): Promise<Section[]> {
        return this.sectionService.getSections();
    }

    @Post("/section")
    async createSection(@Body() createSectionDTO: CreateSectionDTO): Promise<Section> {
        return this.sectionService.createSection(createSectionDTO);
    }

    @Patch("/section/:id")
    async updateSection(@Body() updateSectionDTO: UpdateSectionDTO, @Param('id', ParseUUIDPipe) id: string): Promise<Section> {
        return this.sectionService.updateSection(id, updateSectionDTO);
    }

    @Delete('/section/:id')
    async deleteSection(@Param('id') id: string): Promise<boolean> {
        return this.sectionService.deleteSection(id);
    }

    @Post("/section/restore/:id")
    async restoreDeletedSection(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
        return this.sectionService.restoreDeletedSection(id)
    }
}