import { forwardRef, Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';
import { TweetsService } from 'src/tweets/tweets.service';
import { TweetsModule } from 'src/tweets/tweets.module';

@Module({
  controllers: [CommitsController],
  imports:[forwardRef(() => TweetsModule)],
  providers: [CommitsService],
  exports:[CommitsService]
})
export class CommitsModule {}
