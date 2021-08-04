const welcome = require('cli-welcome');
const unhandled = require('cli-handle-unhandled');
const checkNode = require('cli-check-node');
const boxen = require('boxen');
const pkgJSON = require('./../package.json');

const init = (minimal, clear) => {
	unhandled();
	minimal ||
		welcome({
			title: `MyName SAMBOU`,
			tagLine: `Hello nice to meet u`,
			description: pkgJSON.description,
			version: pkgJSON.version,
			bgColor: `#6937FF`,
			color: `#000000`,
			bold: true,
			clear,
		});
	minimal && console.log(boxen(`gsambou`, { padding: 1, float: 'center', dimBorder: true }));
	checkNode('12');
};

module.exports = init;
