import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetsService {
  create(createTweetDto: CreateTweetDto) {
    console.log(createTweetDto.message);    
    return 'This action adds a new tweet';
  }
}
