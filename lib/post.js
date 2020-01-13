const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');


tweetManager = new TweetManager();

module.exports = function (tweet) {
    console.log(tweet);
    
    parameters = {
        status: tweet,
    }

    twitter.post('statuses/update', parameters)
    .then(function (tweet) {
        tweetManager.print(tweet, false);
        console.log("Successful");
    })
    .catch(function (error) {
        throw error;
    })

}   




