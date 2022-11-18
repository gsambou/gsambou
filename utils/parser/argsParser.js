import { parseArgs } from 'node:util';
import options, { ARGLIST } from './cli-options.js';

const getArgs = (argList, args) => {
	const data = args.slice(2).filter((arg) => {
		if (argList.includes(arg)) {
			return arg;
		}
	});
	return { data, valid: args.slice(2).length === data.length && data.length > 0 };
};

export default (callback) => {
	const result = getArgs(ARGLIST, process.argv);
	console.log(result);
	if (!result.valid && process.argv.slice(2).length > 0) {
		callback();
		process.exit();
	}

	const args = result.data.filter((d) => d.startsWith('-'));

	const othersArgs = result.data
		.filter((value) => !value.startsWith('-'))
		.reduce((acc, key) => {
			acc[key] = true;
			return acc;
		}, {});

	const { values } = parseArgs({ args, options });
	return { ...values, ...othersArgs };
};
