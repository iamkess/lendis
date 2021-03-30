import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from 'src/tweets/dto/create-tweet.dto';
import { TweetsService } from 'src/tweets/tweets.service';
import { CreateCommitDto } from './dto/create-commit.dto';

@Injectable()
export class CommitsService {
  constructor(private readonly tweetService: TweetsService) {}
  
  async create(createCommitDto: CreateCommitDto) {
    for await (const commit of createCommitDto.commits) {
      const tweetBody: CreateTweetDto = {
        message: `Commit update: ${commit.message} at ${commit.timestamp} by ${commit.author.name}`
      }      
      this.tweetService.create(tweetBody);
    }

  }
}
