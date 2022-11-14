#!/usr/bin/env node
const init = require('./utils/init');
const socials = require('./utils/socials');
const alert = require('alert-log');

(() => {
	init();
	socials();
	alert('info', 'Follow me on @gsdotdev');
})();
