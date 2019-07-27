const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');


tweetManager = new TweetManager();

module.exports = function (tweetId) {    
   
    twitter.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
        console.log(tweetId);
        
        if (!error) {
            tweetManager.print(tweet);
        } else {
            console.log(error.message);
            
        }
    });

}   




