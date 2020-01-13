const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');
const defaultNumberOfTweetsToRetrieve = 5;


tweetManager = new TweetManager();

module.exports = function (numberOfTweetsToRetrieve) {
  parameters = { 
    screen_name: process.env.SCREEN_NAME, 
    count: numberOfTweetsToRetrieve
  };
  
  twitter.get('statuses/home_timeline', parameters, function(error, tweets, response) {
    if (!error) {
      tweets.forEach(tweet => {
                 tweetManager.print(tweet, false);
            });
    }
  });
}   

