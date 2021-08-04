//const fetch = require('node-fetch');
const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
const ora = require('ora');
const { green, yellow } = require('chalk');

const apiURL = `https://api.github.com/users/gsambou`;
const spinner = ora({ text: '' });

const stats = async () => {
	spinner.start(`${yellow(`FOLLOWERS`)} fetching...`);
	const [error, res] = await to(axios(apiURL));
	handleError(`API CALL FAILED`, error, false, false);
	const { followers } = res.data;
	//spinner.succeed(`${green(`FOLLOWERS`)} fetched\n`);
	spinner.stop();
	console.log(`GitHub Followers: ${followers}`);
};

module.exports = stats;
