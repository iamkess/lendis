import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';
import { TweetsService } from 'src/tweets/tweets.service';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService, TweetsService]
})
export class CommitsModule {}
