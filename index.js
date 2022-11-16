#!/usr/bin/env node

import init from './utils/init.js';
import { bio, social, ads } from './utils/data.js';
import { flag, invalidArgs, helpText, showVersion } from './utils/cli.js';
import debug from './utils/debug.js';
import alert from 'alert-log';
import showGitProjects from './utils/projects/projects.js';

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

	!flag['no-social'] && console.log(social);
	process.stdout.write('\n');
	showGitProjects();
	!flag['no-ad'] && alert('info', ads);
	flag.debug && debug(flag, process.argv.slice(2));
})();
