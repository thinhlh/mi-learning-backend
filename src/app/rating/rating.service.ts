import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Rating } from "./rating.entity";

@Injectable()
export class RatingService {
    constructor(@InjectRepository(Rating) private readonly ratingRepository: Repository<Rating>) { }
}