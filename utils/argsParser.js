import options from './cli-options.js';

const parseArgsInput = (args) => {
	const data = args.slice(2);
	const argsList = [];
	data.forEach((key) => {
		if (key.startsWith('--')) {
			argsList.push(key.slice(2));
		} else if (key.startsWith('-')) {
			argsList.push(key.slice(1));
		}
	});
	return argsList;
};

const sanitArgs = (args) => {
	const data = [];
	args.forEach((arg) => {
		let _ = Array.from(arg);
		_.unshift('--');
		const d = _.join('');
		data.push(d);
	});
	return data;
};

export default (args) => {
	const argsList = [];
	const invalidArgs = [];
	parseArgsInput(args).forEach((d) => {
		if (Object.keys(options).includes(d)) {
			argsList.push(d);
		} else {
			invalidArgs.push(d);
		}
	});
	const validArgs = sanitArgs(argsList);
	return { validArgs, invalidArgs };
};
