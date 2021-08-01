#!/usr/bin/env node
const chalk = require('chalk');

const italic = chalk.italic;
const color = {
	twitter: chalk.hex(`#1da1f2`).bold.inverse,
	github: chalk.hex(`#6cc644`).bold.inverse,
	blog: chalk.hex(`#6937FF`).bold.inverse,
	dim: chalk.dim,
};

const social = `
${color.twitter(` Twitter `)}: ${color.dim(`https://twitter.com/g_sambou`)}
${color.github(` GitHub `)}: ${color.dim(`https://github.com/gsambou`)}
${color.blog(` Blog `)}: ${color.dim(`https://gsambou.com`)}
`;

const bio = `
${italic(`
Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
`)}
`;

const ad = `visit my website gsambou.com`;

module.exports = {
	bio,
	social,
	ad,
};
