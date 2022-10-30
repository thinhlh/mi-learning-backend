import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category.controller";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";

@Module({
    providers: [CategoryService],
    controllers: [CategoryController],
    imports: [TypeOrmModule.forFeature([Category])],
    exports: [CategoryService]
})
export class CategoryModule {

}