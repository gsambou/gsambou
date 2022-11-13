#!/usr/bin/env node
const pkgJSON = require('./package.json');

const colors = {
	twitter: {
		back: '\u001b[48;5;81;1m',
		text: '\u001b[38;5;19;1m',
	},
	github: {
		back: '\u001b[48;5;154;1m',
		text: '\u001b[38;5;19;1m',
	},
	blog: {
		back: '\u001b[48;5;93;1m',
		text: '\u001b[38;5;17;1m',
	},
	reset: '\u001b[0m',
	link: '\u001b[90;4m',
	bio: '\u001b[38;5;231;3m',
};

const alerts = {
	success: '\u001b[48;5;76;1m',
	warning: '\u001b[48;5;220;1m',
	info: '\u001b[48;5;93;1m',
	error: '\u001b[48;5;196;1m',
	text: '\u001b[38;5;19;5m',
};
const symbols = {
	success: '\u001b[38;5;76;1m\u2714',
	warning: '\u001b[38;5;220;1m\u26A0',
	info: '\u001b[38;5;75;1m\u2139',
	error: '\u001b[38;5;196;1m\u2A2F',
};

// clear the console => https://github.com/ahmadawais/clear-any-console
(() => process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'))();
console.log('\n');
process.stdout.write('\u001b[48;5;93;1m \u001b[38;5;232mGhislain Sambou \u001b[0m ');
process.stdout.write(pkgJSON.version);
process.stdout.write('\u001b[90;3m Hello 👋🏽, nice to meet you \u001b[0m\n');
process.stdout.write('\n\u001b[90;1;3m ' + pkgJSON.description + ' \u001b[0m\n');

console.log(`

  ${colors.bio}Lorem Ipsum is simply dummy text of the printing and typesetting
  industry.Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book.
${colors.reset}
`);

console.log(`
    🐣 ${colors.twitter.back} ${colors.twitter.text}Twitter ${colors.reset}       ${colors.link}https://twitter.com/gsambou.dev${colors.reset}
    📖 ${colors.github.back} ${colors.github.text}GitHub ${colors.reset}        ${colors.link}https://github.com/gsambou${colors.reset}
    🥷🏽  ${colors.blog.back} ${colors.blog.text}Blog ${colors.reset}          ${colors.link}https://gsambou.dev${colors.reset}
`);

console.log(`
    ${symbols.success} ${alerts.success} ${alerts.text}SUCCESS ${colors.reset} Thank for checking out my CLI.
    ${symbols.info} ${alerts.info} ${alerts.text}INFO ${colors.reset} Thank for checking out my CLI.
    ${symbols.warning} ${alerts.warning} ${alerts.text}WARNING ${colors.reset} Thank for checking out my CLI.
    ${symbols.error} ${alerts.error} ${alerts.text}ERROR ${colors.reset} Thank for checking out my CLI.
`);
