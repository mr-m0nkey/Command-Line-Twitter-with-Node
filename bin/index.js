#!/usr/bin/env node

require('dotenv').config();
const colors = require('colors');
var Twitter = require('twitter-js-client').Twitter;


var error = function (err, response, body) {
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

var twitter = new Twitter(config);

class Tweet {
    constructor(data) {
        this.data = data;
    }

    print() {
        console.log(this.data.text);
        
    }
}

class TweetManager {

    
    constructor() {
        this.tweets = [];
    }

    add(tweet) {
        this.tweets.push(tweet);
        tweet.print();
    }
}

tweets = [];
tweetManager = new TweetManager();

function refreshTL() {
    twitter.getHomeTimeline({ screen_name: 'mr_m0nkey_', count: '2'}, error, function (data) {
        response = JSON.parse(data);
        response.forEach(tweet => {
            tweets.push(tweetManager.add(new Tweet(tweet)));
        });
    });
}    

refreshTL();
