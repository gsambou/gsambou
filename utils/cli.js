#!/usr/bin/env node
const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk');

const helpText = `
	Usage
		${green(`npx gsambou`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}
	Options
		${yellow(`--bio`)}                 Print the social info ${dim(`(DEFAULT: true)`)}
		${yellow(`--no-bio`)}              Don't print the social info
		${yellow(`--social`)}              Print the social info ${dim(`(DEFAULT: true)`)}
		${yellow(`--no-social`)}           Don't print the social info
		${yellow(`--ad`)}                  Print the ad info ${dim(`(DEFAULT: true)`)}
		${yellow(`--no-ad`)}               Don't print the ad info
		${yellow(`--clear`)}               Clear the console ${dim(`(DEFAULT: true)`)}
		${yellow(`--no-clear`)}            Don't clear the console
		${yellow(`-m --minimal`)}          Print minimal info
       ${yellow(`-d, --debug`)}           Print debug info
       ${yellow(`-v, --version `)}        Print version info

    Commands
        ${cyan(`help`)}                 Print CLI help information
	Examples
        ${green(`npx gsambou`)} ${yellow(`--no-social`)}
        ${green(`npx gsambou`)} ${yellow(`--no-ad`)}
`;
const options = {
	flags: {
		minimal: {
			type: 'boolean',
			default: false,
			alias: 'm',
		},
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
		clear: {
			type: 'boolean',
			default: true,
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd',
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v',
		},
	},
};
module.exports = meow(helpText, options);
