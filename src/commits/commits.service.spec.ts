import { forwardRef } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TweetsModule } from 'src/tweets/tweets.module';
import { TweetsService } from 'src/tweets/tweets.service';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from './dto/create-commit.dto';

describe('CommitsService', () => {
  let commitService: CommitsService;
  let twitterService: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitsService],
      imports:[forwardRef(() => TweetsModule)],
    }).compile();

    commitService = module.get<CommitsService>(CommitsService);
    twitterService = module.get<TweetsService>(TweetsService);
  });

  it('commit service should be defined', () => {
    expect(commitService).toBeDefined();
  });

  describe('call twitter service', () => {
    it('should call create method on twitter service', async () => {
      let result :any;
      const reqBody : CreateCommitDto = {
        commits: [
          {
            "id": "007",
            "message": "Mock Twitter service",
            "timestamp": "31-03-2021 07:24",
            "url": "https://github.com/donkovah",
            "author": {
                "name": "Iam a Child Of God",
                "email": "john@doe.com",
                "username": "donkovah"
              }
          }
        ]
      }
      const tweetHook = jest.spyOn(twitterService, 'create').mockImplementation(() => result);
      await commitService.create(reqBody)
      expect(tweetHook).toHaveBeenCalledTimes(1);
    });
  })


});
