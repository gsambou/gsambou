#!/usr/bin/env node
const pkgJSON = require('./package.json');

// clear the console => https://github.com/ahmadawais/clear-any-console
(() => process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'))();
console.log('\n');
process.stdout.write('\u001b[43;m \u001b[30;1mgsambou \u001b[0m ');
process.stdout.write(pkgJSON.version);
process.stdout.write('\u001b[90;3m Hello, nice to meet you \u001b[0m\n');
process.stdout.write('\u001b[90;1;3m' + pkgJSON.description + ' \u001b[0m\n');

console.log(`
NAME: ${pkgJSON.name}
VERSION: ${pkgJSON.version}
DESCRIPTION: ${pkgJSON.description}
`);

console.log(`
gsambou

Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

🐣 Twitter:     https://twitter.com/gsambou.dev
📖 GitHub:      https://github.com/gsambou
🥷🏽  Blog:        https://gsambou.dev

`);
