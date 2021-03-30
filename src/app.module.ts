import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [CommitsModule, TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
