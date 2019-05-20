const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');


tweetManager = new TweetManager();

module.exports = function (tweet) {
    console.log(tweet);
    
    parameters = {
        status: tweet,
    }

}   




