import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Module({
  providers: [TweetsService],
  exports: [TweetsService]
})
export class TweetsModule {}
