#!/usr/bin/env node
const welcome = require('cli-welcome');
const chalk = require('chalk');
const pkgJSON = require('./package.json');
const log = console.log;

const color = {
    twitter: chalk.hex(`#1da1f2`).bold.inverse,
    github: chalk.hex(`#6cc644`).bold.inverse,
    blog: chalk.hex(`#6937FF`).bold.inverse,
    dim: chalk.dim,
};
const italic = chalk.italic;


welcome({
    title: `MyName SAMBOU`,
    tagLine: `Hello nice to meet u`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937FF`,
    color: `#000000`,
    bold: true,
    clear: true,
});

log(`
${italic(`
Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
`)}

${color.twitter(` Twitter `)}: ${color.dim(`https://twitter.com/g_sambou`)}
${color.github(` GitHub `)}: ${color.dim(`https://github.com/gsambou`)}
${color.blog(` Blog `)}: ${color.dim(`https://gsambou.com`)}
`);
