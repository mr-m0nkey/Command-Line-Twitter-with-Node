#!/usr/bin/env node

const { UserManager } = require('../lib/UserManager');
const refreshTL = require('../lib/refreshTL');
const post = require('../lib/post');
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


program
    .command('post [tweet]') 
    .alias('update') 
    .description('Posts a tweet to your timeline') 
    .action((tweet) => {        
      post(tweet);
    });



program.parse(process.argv);