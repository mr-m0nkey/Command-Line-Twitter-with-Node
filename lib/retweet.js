const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');


tweetManager = new TweetManager();

module.exports = function (tweetId) {    
   
    twitter.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
        console.log("YOU RETWEETED");
        
        if (!error) {
            tweetManager.print(tweet, false);
        } else {
            console.log(error.message);
            
        }
    });

}   




