
//TODO make methods static
exports.TweetManager = class {

    
    constructor() {

    }

    print(tweet, quoted) {
        console.log(tweet.user.name.cyan + " (@" + tweet.user.screen_name + ") " + ": " + tweet.text);
        console.log("Tweet id: " + tweet.id_str);
        console.log("retweets: " + tweet.retweet_count + ", likes: " + tweet.favorite_count);
        if(quoted == false) {
            if(tweet.quoted_status) {
                console.log("QUOTED TWEET");
                this.print(tweet.quoted_status, true);
            }
        } 
        
        console.log("\n");
        
   
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