#!/usr/bin/env node

const { UserManager } = require('../lib/UserManager');
const refreshTL = require('../lib/refreshTL');
const post = require('../lib/post');
const stream = require('../lib/stream');
const retweet = require('../lib/retweet');
const login = require('../lib/login');
const colors = require('colors');
const program = require('commander');
const { prompt } = require('inquirer');

//TODO store global twitter paths


program
  .version('1.0.0')
  .description('Twitter client on the terminal');


const loginPrompt = [
  {
    type : 'input',
    name : 'username',
    message : 'Enter Username ...'
  },
  {
    type : 'password',
    name : 'password',
    message : 'Enter password ...'
  },
  
];

//Registering commands
program
  .command('login') 
  .alias('l')
  .description('Login to twitter')
  .action(() => {
    prompt(loginPrompt).then(loginCredentials =>
      login(loginCredentials));
  });


program
    .command('refresh [tweetLimit]') 
    .alias('rfsh') 
    .description('Gets a new batch of tweets from your timeline') 
    .action((tweetLimit) => {        
        refreshTL(tweetLimit);
    });



const tweetPrompt = [
  {
    type : 'input',
    name : 'tweet',
    message : 'Type your tweet ...'
  },
];

program
    .command('post') 
    .alias('p')
    .description('Posts a tweet to your timeline')
    .action(() => {
      prompt(tweetPrompt).then(tweetBody =>
        post(tweetBody.tweet));
    });


const streamPrompt = [
  {
    type : 'input',
    name : 'keyword',
    message : 'Enter keyword ...'
  },
];

program
    .command('stream') 
    .alias('s')
    .description('tweet stream')
    .action(() => {
      prompt(streamPrompt).then(streamBody =>
        stream(streamBody.keyword));
    });

    const tweetInteractionPrompt = [
      {
        type : 'input',
        name : 'id',
        message : 'Enter tweet id ...'
      },
    ];


  program
    .command('retweet') 
    .alias('rtwt')
    .description('retweet a tweet')
    .action(() => {
      prompt(tweetInteractionPrompt).then(tweetDetails =>
        retweet(tweetDetails.id));
    });



program.parse(process.argv);