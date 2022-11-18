export default {
	social: {
		type: 'boolean',
	},
	'no-social': {
		type: 'boolean',
	},
	ad: {
		type: 'boolean',
	},
	'no-ad': {
		type: 'boolean',
	},
	help: {
		type: 'boolean',
		short: 'h',
	},
	debug: {
		type: 'boolean',
		short: 'd',
	},
	version: {
		type: 'boolean',
		short: 'v',
	},
};

export const ARGLIST = [
	'--social',
	'--no-social',
	'--ad',
	'--no-ad',
	'--help',
	'help',
	'-h',
	'debug',
	'--debug',
	'-d',
	'version',
	'--version',
	'-v',
];
