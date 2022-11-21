import { Module, OnModuleInit } from "@nestjs/common";
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
export class CategoryModule implements OnModuleInit {
    constructor(
        private readonly categoryService: CategoryService
    ) { }
    async onModuleInit() {
        await this.categoryService.createCategory({
            title: "Flutter",
            background: "https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png"
        })
    }
}