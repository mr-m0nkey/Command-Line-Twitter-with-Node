
//TODO make methods static
exports.TweetManager = class {

    
    constructor() {

    }

    print(tweet) {
        console.log(tweet.user.name.cyan + " (@" + tweet.user.screen_name + ") " + ": " + tweet.text);
        console.log("Tweet id: " + tweet.id + "\n");
    }

    find(tweetId) {

        //find tweet then print it
    }

    retweet(tweetId) {

    }

    favourite(tweetId) {
        
    }

    comment(tweetId) {

    }

    quote(tweetId) {

    }
}