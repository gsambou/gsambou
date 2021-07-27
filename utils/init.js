const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const unhandled = require('cli-handle-unhandled');
const checkNode = require('cli-check-node');

const init = () => {
	unhandled();
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

	checkNode('12');
};

module.exports = init;
