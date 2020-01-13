const { twitter, twitterError } = require('./Twitter');
const { TweetManager } = require('./TweetManager');


tweetManager = new TweetManager();

module.exports = function (tweet) {    
    parameters = {
        status: tweet,
    }

    twitter.post('statuses/update', parameters)
    .then(function (tweetDetails) {
        tweetManager.print(tweetDetails, false);
        console.log("Successful");
    })
    .catch(function (error) {
        console.log(error);
        
    })

}   




