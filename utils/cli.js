import { parseArgs } from 'node:util';
import options from './cli-options.js';
import getArgs from './argsParser.js';
import pkgData from './readpkg.js';

const pkgJSON = pkgData;

const helpText = `
 ${pkgJSON.description} \n
	Usage
	  $ \u001b[38;5;118mnpx gsambou\u001b[0m \u001b[38;5;3m [--options]\u001b[0m \u001b[38;5;14m<commands>\u001b[0m

	Options
            \u001b[38;5;3m--social\u001b[0m                  Print the social info
            \u001b[38;5;3m--no-social\u001b[0m               Don't print the social info
            \u001b[38;5;3m--ad\u001b[0m                      Print the ads info
            \u001b[38;5;3m--no-ad\u001b[0m                   Don't print the ad info
            \u001b[38;5;3m--debug\u001b[0m                   Print debug information
            \u001b[38;5;3m--version\u001b[0m                 Print CLI version

        Commands
            \u001b[38;5;14mhelp\u001b[0m                      Print CLI help information

	Examples
	  $ \u001b[38;5;118mnpx gsambou\u001b[0m \u001b[38;5;3m--social\u001b[0m
	  $ \u001b[38;5;118mnpx gsambou\u001b[0m \u001b[38;5;3m--no-ad\u001b[0m

`;

const { validArgs: args, invalidArgs } = getArgs(process.argv);

const { values: flag } = parseArgs({ args, options });

export const showVersion = () => {
	console.log(pkgJSON.version);
};

export { flag, invalidArgs, helpText };
