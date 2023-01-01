import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Rating } from "./rating.entity";
import { StudentCourse } from "../student_course/student_course.entity";
import { CreateRatingDTO } from "./dto/create-rating.dto";
import { StudentCourseService } from "../student_course/student_course.service";

@Injectable()
export class RatingService {
    constructor(
        @InjectRepository(Rating) private readonly ratingRepository: Repository<Rating>,
        @InjectRepository(StudentCourse) private readonly studentCourseRepository: Repository<StudentCourse>,
        private readonly studentCourseService: StudentCourseService,
    ) {

    }

    async getRatingOfCourse(courseId: string): Promise<Rating[]> {
        if (courseId) {
            return await this.ratingRepository.find({
                where: {
                    studentCourse: {
                        courseId: courseId
                    }
                }
            })
        }
        else {
            return []
        }
    }

    async createRating(createRatingDTO: CreateRatingDTO): Promise<Rating> {

        const studentCourse = await this.studentCourseService.getOrCreateStudentCourse(createRatingDTO.studentId, createRatingDTO.courseId);

        const createdRating = this.ratingRepository.create({ ...createRatingDTO, studentCourse: studentCourse });

        return this.ratingRepository.save(createdRating);
    }
}