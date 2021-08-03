const alert = require('cli-info');

const debug = (options) => {
	if (!options.isDebug) return;
	alert({ type: 'warning', msg: 'DEBUGGING INFO ↓' });
	console.log(`input`, options.input);
	console.log(`flags`, options.flags);
	console.log('\n');
};

module.exports = debug;
