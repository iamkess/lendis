import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { TweetsService } from 'src/tweets/tweets.service';
import { CreateTweetDto } from 'src/tweets/dto/create-tweet.dto';
import { CreateCommitDto } from './dto/create-commit.dto';

@Injectable()
export class CommitsService {
  constructor(
    @Inject(forwardRef(() => TweetsService))
    private readonly tweetService: TweetsService) { }

  async create(createCommitDto: CreateCommitDto) {
    try {
      for await (const commit of createCommitDto.commits) {
        const tweetBody: CreateTweetDto = {
          message: `Commit update: ${commit.message} at ${commit.timestamp} by ${commit.author.name}`
        }
        this.tweetService.create(tweetBody);
      }

    } catch (error) {
      console.log(error);

      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    }

  }
}
