import alert from 'alert-log';
import { helpText } from '../data/cli.js';
import pkgJSON from '../data/jsonFile.js';
import gitWorks from '../projects/projects.js';
import { bio, social, ads } from '../data/data.js';
import init from '../init.js';

export default {
	init,
	debug: (flag, input) => {
		alert('warning', 'CLI DATA ⇣ 🔗', 'debugger');
		console.log(`input`, input);
		console.log(`flag`, { ...flag });
		console.log();
	},

	gitWorks,
	help: () => {
		console.log(helpText);
	},
	showVersion: () => {
		console.log(pkgJSON.version);
	},
	showBio: () => {
		console.log(bio);
	},
	showSocial: () => {
		console.log(social);
	},
	showAds: () => {
		alert('info', ads);
	},
	newline: () => {
		process.stdout.write('\n');
	},
};
