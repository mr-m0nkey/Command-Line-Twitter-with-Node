require('dotenv').config();
var Twitter = require('twitter-js-client').Twitter;


exports.twitterError = function (err, response, body) {
    console.log('ERROR [%s]', err);
    console.log(response);
    console.log(body);
    
};

var Twitter = require('twitter-js-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": process.env.TWITTER_CONSUMER_KEY,
    "consumerSecret": process.env.TWITTER_CONSUMER_SECRET,
    "accessToken": process.env.TWITTER_ACCESS_TOKEN_KEY,
    "accessTokenSecret": process.env.TWITTER_ACCESS_TOKEN_SECRET
}

exports.twitter = new Twitter(config);