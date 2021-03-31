import { Test, TestingModule } from '@nestjs/testing';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let tweetService: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    tweetService = module.get<TweetsService>(TweetsService);
  });

  it('tweet service should be defined', () => {
    expect(tweetService).toBeDefined();
  });


  describe('call twitter service', () => {
    it('should call create method on twitter service', async () => {
      let result :any;
      const reqBody : CreateTweetDto = {
        message: 'Commit update'
      }
      const tweetHook = jest.spyOn(tweetService, 'create').mockImplementation(() => result);
      await tweetService.create(reqBody)
      expect(tweetHook).toHaveBeenCalledTimes(1);
    });
  })

});
