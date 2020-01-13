const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');
const defaultNumberOfTweetsToRetrieve = 5;


tweetManager = new TweetManager();

module.exports = function (keyword) {
console.log(keyword);

    var stream = twitter.stream('statuses/filter', {track: keyword});
    stream.on('data', function(event) {
        tweetManager.print(event, false);
        console.log("---------------------------------------------------------------------------");
    });
     
    stream.on('error', function(error) {
      console.log(error);
    });
}   




