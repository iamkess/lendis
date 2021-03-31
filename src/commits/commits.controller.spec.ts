import { forwardRef } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TweetsModule } from 'src/tweets/tweets.module';
import { TweetsService } from 'src/tweets/tweets.service';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from './dto/create-commit.dto';

describe('CommitsController', () => {
  let commitController: CommitsController;
  let commitService: CommitsService;
  let twitterService: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitsController],
      providers: [CommitsService],
      imports:[forwardRef(() => TweetsModule)],
    }).compile();

    commitController = module.get<CommitsController>(CommitsController);
    commitService = module.get<CommitsService>(CommitsService);
  });

  it('commit controller should be defined', () => {
    expect(commitController).toBeDefined();
  });

  describe('Mock Webhook', () => {
    it('should call commit service', async () => {
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
      const commitHook = jest.spyOn(commitService, 'create').mockImplementation(() => result);
      await commitController.create(reqBody)
      expect(commitHook).toHaveBeenCalledTimes(1);
    });
  })

});
