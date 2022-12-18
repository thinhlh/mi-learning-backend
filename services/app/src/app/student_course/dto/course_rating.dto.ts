import { Rating } from "src/app/rating/rating.entity";

export class CourseRatingDTO {
    average: number;
    ratingAverageByStar: number[];
    ratings: Rating[]
}