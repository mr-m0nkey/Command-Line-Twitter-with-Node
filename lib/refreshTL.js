const { twitter, twitterError } = require('../lib/Twitter');
const { TweetManager } = require('./TweetManager');


tweetManager = new TweetManager();


module.exports = function (tweetLimit) {
    twitter.getHomeTimeline({ screen_name: process.env.SCREEN_NAME, count: tweetLimit}, twitterError, function (data) {
        response = JSON.parse(data);
        console.log(response);
        //NOTE This is a temporary way to test without internet.
        /*
        response = [ { created_at: 'Sat Mar 02 23:34:25 +0000 2019',
        id: 1101989165078642700,
        id_str: '1101989165078642689',
        text: 'RT @_OhKayyyy: It’s something exotic https://t.co/D85KXGUgUA',
        truncated: false,
        entities:
         { hashtags: [],
           symbols: [],
           user_mentions: [Array],
           urls: [],
           media: [Array] },
        extended_entities: { media: [Array] },
        source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user:
         { id: 290126129,
           id_str: '290126129',
           name: 'Ikay 💫',
           screen_name: '___Ikechukwu',
           location: 'Lagos/Ibadan ',
           description: 'foodie| part-time alcoholic | rock music| ManUtd 😈',
           url: null,
           entities: [Object],
           protected: false,
           followers_count: 1285,
           friends_count: 1044,
           listed_count: 26,
           created_at: 'Fri Apr 29 19:34:24 +0000 2011',
           favourites_count: 4211,
           utc_offset: null,
           time_zone: null,
           geo_enabled: true,
           verified: false,
           statuses_count: 202084,
           lang: 'en',
           contributors_enabled: false,
           is_translator: false,
           is_translation_enabled: false,
           profile_background_color: '642D8B',
           profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
           profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
           profile_background_tile: true,
           profile_image_url: 'http://pbs.twimg.com/profile_images/1090152825651449856/AyV2TACf_normal.jpg',
           profile_image_url_https: 'https://pbs.twimg.com/profile_images/1090152825651449856/AyV2TACf_normal.jpg',
           profile_banner_url: 'https://pbs.twimg.com/profile_banners/290126129/1541208233',
           profile_link_color: 'FF0000',
           profile_sidebar_border_color: '65B0DA',
           profile_sidebar_fill_color: '7AC3EE',
           profile_text_color: '3D1957',
           profile_use_background_image: true,
           has_extended_profile: true,
           default_profile: false,
           default_profile_image: false,
           following: true,
           follow_request_sent: false,
           notifications: false,
           translator_type: 'none' },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        retweeted_status:
         { created_at: 'Sat Mar 02 17:22:38 +0000 2019',
           id: 1101895602730946600,
           id_str: '1101895602730946562',
           text: 'It’s something exotic https://t.co/D85KXGUgUA',
           truncated: false,
           entities: [Object],
           extended_entities: [Object],
           source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
           in_reply_to_status_id: null,
           in_reply_to_status_id_str: null,
           in_reply_to_user_id: null,
           in_reply_to_user_id_str: null,
           in_reply_to_screen_name: null,
           user: [Object],
           geo: null,
           coordinates: null,
           place: null,
           contributors: null,
           is_quote_status: false,
           retweet_count: 22,
           favorite_count: 133,
           favorited: false,
           retweeted: false,
           possibly_sensitive: false,
           possibly_sensitive_appealable: false,
           lang: 'en' },
        is_quote_status: false,
        retweet_count: 22,
        favorite_count: 0,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        possibly_sensitive_appealable: false,
        lang: 'en' } ];
        */
        response.forEach(tweet => {
            tweetManager.print(tweet);
        });
    });
}   

