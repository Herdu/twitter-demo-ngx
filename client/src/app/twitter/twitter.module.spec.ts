import { TwitterModule } from './twitter.module';

describe('TwitterModule', () => {
  let twitterModule: TwitterModule;

  beforeEach(() => {
    twitterModule = new TwitterModule();
  });

  it('should create an instance', () => {
    expect(twitterModule).toBeTruthy();
  });
});
