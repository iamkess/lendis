import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { TweetsModule } from './tweets/tweets.module';
import { PushModule } from './push/push.module';
import { PushModule } from './push/push.module';

@Module({
  imports: [CommitsModule, TweetsModule, PushModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
