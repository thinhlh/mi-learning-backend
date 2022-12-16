import { Repository } from "typeorm";
import { Rating } from "./rating.entity";
export declare class RatingService {
    private readonly ratingRepository;
    constructor(ratingRepository: Repository<Rating>);
}
