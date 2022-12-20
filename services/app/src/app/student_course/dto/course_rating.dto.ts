import { Rating } from "src/app/rating/rating.entity";
import { RatingDTO } from "./rating.dto";

export class CourseRatingDTO {
    average: number;
    ratingAverageByStar: number[];
    ratings: RatingDTO[]
}