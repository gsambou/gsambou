#!/usr/bin/env node

const init = require('./utils/init');
const { bio, social, ads } = require('./utils/data');
const { flag, invalidArgs, helpText, showVersion } = require('./utils/cli');
const debug = require('./utils/debug');
const alert = require('alert-log');

(() => {
	if (flag.version || process.argv.slice(2).includes('version')) {
		showVersion();
		return;
	}

	if (invalidArgs.length || flag.help || process.argv.slice(2).includes('help')) {
		console.log(helpText);
		return;
	}

	init();
	console.log(bio);
	if (!flag['no-social']) {
		console.log(social);
	}

	if (!flag['no-ad']) {
		alert('info', ads);
	}

	if (flag.debug) {
		debug(flag, process.argv.slice(2));
	}
})();
