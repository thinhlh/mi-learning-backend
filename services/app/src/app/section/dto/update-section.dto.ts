import { PartialType } from "@nestjs/swagger";
import { CreateSectionDTO } from "./create-section.dto";

export class UpdateSectionDTO extends PartialType(CreateSectionDTO) {

}