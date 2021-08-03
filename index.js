#!/usr/bin/env node

const alert = require('cli-info');
const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const { social, ad, bio } = cli.flags;
const options = {
	isDebug: cli.flags.debug,
	input: cli.input,
	flags: cli.flags,
};

(() => {
	init();
	if (bio) console.log(data.bio);
	if (social) console.log(data.social);
	if (ad) alert({ type: 'info', msg: data.ad, name: 'ADS' });
	debug(options);
})();
