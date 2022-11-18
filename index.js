#!/usr/bin/env node

import argsParser from './utils/parser/argsParser.js';
import cmd from './utils/repositories/cmd.js';

(() => {
	const flag = argsParser(cmd.help);

	if (flag.version) {
		cmd.showVersion();
		return;
	}

	if (flag.help) {
		cmd.help();
		return;
	}

	cmd.init();
	cmd.showBio();

	!flag['no-social'] && cmd.showSocial();
	cmd.newline();

	cmd.gitWorks();
	!flag['no-ad'] && cmd.showAds();

	flag.debug && cmd.debug(flag, process.argv.slice(2));
})();
