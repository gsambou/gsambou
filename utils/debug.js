const alert = require('alert-log');

module.exports = (flag, input) => {
	alert('warning', 'CLI DATA ⇣ 🔗', 'debugger');
	console.log(`input`, input);
	console.log(`flag`, { ...flag });
	console.log();
};
