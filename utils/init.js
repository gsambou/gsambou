const COLORS = require('./constants');
const pkgJSON = require('./../package.json');

module.exports = () => {
	process.on('unhandledRejection', (err) => {
		console.log(err.message);
	});

	// clear the console => https://github.com/ahmadawais/clear-any-console
	(() => process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'))();
	console.log('\n');
	process.stdout.write('\u001b[48;5;93;1m \u001b[38;5;232mGhislain Sambou \u001b[0m ');
	process.stdout.write(pkgJSON.version);
	process.stdout.write('\u001b[90;3m Hello 👋🏽, nice to meet you \u001b[0m\n');
	process.stdout.write('\n\u001b[90;1;3m ' + pkgJSON.description + ' \u001b[0m\n');

	console.log(`

  ${COLORS.bio}Lorem Ipsum is simply dummy text of the printing and typesetting
  industry.Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book.
${COLORS.reset}
`);
};
