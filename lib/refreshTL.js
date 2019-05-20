const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');
const defaultNumberOfTweetsToRetrieve = 5;


tweetManager = new TweetManager();

module.exports = function (numberOfTweetsToRetrieve) {

  if(!numberOfTweetsToRetrieve) { //if no tweet limit was passed
    numberOfTweetsToRetrieve = defaultNumberOfTweetsToRetrieve;
  }
  twitter.getHomeTimeline({ screen_name: process.env.SCREEN_NAME, count: numberOfTweetsToRetrieve}, twitterError, function (data) {
      response = JSON.parse(data);
      response.forEach(tweet => {
          tweetManager.print(tweet);
      });
  });
}   

