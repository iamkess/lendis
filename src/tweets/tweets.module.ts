import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Module({
  exports: [TweetsService]
})
export class TweetsModule {}
