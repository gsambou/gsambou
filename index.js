#!/usr/bin/env node

const alert = require('cli-info');
const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');

const { social, ad, bio, minimal, clear } = cli.flags;
const options = {
	isDebug: cli.flags.debug,
	input: cli.input,
	flags: cli.flags,
};

(async () => {
	// Init and help
	init(minimal, clear);
	options.input.includes('help') && cli.showHelp(0);

	// Print out the info
	bio && console.log(data.bio);
	social && console.log(data.social);
	ad && alert({ type: 'info', msg: data.ad, name: 'ADS' });

	// Stats
	await stats();
	// Debug info if needed
	debug(options);
	console.log(`\n`);
})();
