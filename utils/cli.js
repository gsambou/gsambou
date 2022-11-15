const { parseArgs } = require('node:util');
const options = require('./cli-options');
const getArgs = require('./argsParser');
const pkgJSON = require('./../package.json');

const helpText = `
 ${pkgJSON.description} \n
	Usage
	  $ npx gsambou [options] <commands>

	Options
            --social                  Print the social info
            --no-social               Don't print the social info
            --ad                      Print the ads info
            --no-ad                   Don't print the ad info
            --version                 Print CLI version

        Commands
            help                      Print CLI help information

	Examples
	  $ npx gsambou --social      Print the social info

`;

const { validArgs: args, invalidArgs } = getArgs(process.argv);

const { values: flag } = parseArgs({ args, options });

const showVersion = () => {
	console.log(pkgJSON.version);
};

module.exports = {
	flag,
	invalidArgs,
	helpText,
	showVersion,
};
