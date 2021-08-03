#!/usr/bin/env node
const meow = require('meow');

const helpText = `
	Usage
		npx gsambou [options]
	Options
		social          Show the social info
		--no-social     Don't Show the social info
		ad              Show the ad info
		--no-ad         Don't Show the ad info
        -d, --debug     Print debug information

	Examples
		npx gsambou --no-social
`;
const options = {
	flags: {
		social: {
			type: 'boolean',
			default: true,
		},
		ad: {
			type: 'boolean',
			default: true,
		},
		bio: {
			type: 'boolean',
			default: true,
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd',
		},
	},
};
module.exports = meow(helpText, options);
