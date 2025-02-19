const express = require('express');
const app = express();
const fetch = require('node-fetch');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./.data');
const fs = require('fs');
const OctokitApp = require('@octokit/app');
const request = require('@octokit/request');

class Server {
    constructor() {
        this.basicStr = 'basic';
        this.oAuthStr = 'OAuth';
        this.serverStr = 'Server-to-Server';
        this.test = true;
        this.test2 = true;
        this.searchStr = 'Search';
        this.userStr = 'User';
        this.state = {
            authType: '', // || 'OAuth' || 'Server-to-Server'
            authTarget: this.searchStr, // || 'User'
            clientId: process.env.GH_CLIENT_ID,
            test: true,
            oAuthToken: localStorage.getItem('oauth'),
            oAuthState: String(Math.random() * 1000000),
            rateLimitRemaining: '',
            rateLimitTotal: '',
            rateResetDate: '',
            serverToken: ''
        };
        this.startup();
        this.api();
    }
}