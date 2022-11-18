import { parseArgs } from 'node:util';

const options = {
	social: {
		type: 'boolean',
	},
	'no-social': {
		type: 'boolean',
	},
	ad: {
		type: 'boolean',
	},
	'no-ad': {
		type: 'boolean',
	},
	help: {
		type: 'boolean',
	},
	debug: {
		type: 'boolean',
	},
	version: {
		type: 'boolean',
		short: 'v',
	},
};

const ARGLIST = [
	'--social',
	'--no-social',
	'--ad',
	'--no-ad',
	'help',
	'--help',
	'debug',
	'--debug',
	'version',
	'--version',
	'-v',
	'2',
	'gsambou',
	'test',
];

const getArgs = (argList, args) => {
	const data = args.slice(2).filter((arg) => {
		if (argList.includes(arg)) {
			return arg;
		}
	});
	return { data, valid: args.slice(2).length === data.length && data.length > 0 };
};

const parsed = () => {
	const result = getArgs(ARGLIST, process.argv);

	if (result.valid) {
		const args = result.data.filter((d) => d.startsWith('-'));

		const othersArgs = result.data
			.filter((value) => !value.startsWith('-'))
			.reduce((acc, key) => {
				acc[key] = true;
				return acc;
			}, {});

		const { values } = parseArgs({ args, options });
		return { ...values, ...othersArgs };
	} else {
		return 'Need help please';
	}
};

console.log(parsed());
// const { validArgs: args, invalidArgs } = getArgs(process.argv);

// const { values: flag } = parseArgs({ args, options });

// export const showVersion = () => {
// 	console.log(pkgJSON.version);
// };

// export { flag, invalidArgs, helpText };
