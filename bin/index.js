#!/usr/bin/env node

const { UserManager } = require('../lib/UserManager');
const refreshTL = require('../lib/refreshTL');
const colors = require('colors');
const program = require('commander');




tweets = [];
userManager = new UserManager();
tweetLimit = 1;

program
    .command('refresh') // sub-command name
    .alias('rfsh') // alternative sub-command is `al`
    .description('Gets a new bath of tweets from your timeline') // command description

    // function to execute when command is uses
    .action(function () {
        refreshTL();
});
