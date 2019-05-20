require('dotenv').config();
var Twitter = require('twitter');

exports.twitterError = function (err, response, body) {
    console.log('ERROR [%s]', err);
    console.log(response);
    console.log(body);
    
};



//Get this data from your twitter apps dashboard
var config = {
    "consumer_key": process.env.TWITTER_CONSUMER_KEY,
    "consumer_secret": process.env.TWITTER_CONSUMER_SECRET,
    "access_token_key": process.env.TWITTER_ACCESS_TOKEN_KEY,
    "access_token_secret": process.env.TWITTER_ACCESS_TOKEN_SECRET
}

exports.twitter = new Twitter(config);
