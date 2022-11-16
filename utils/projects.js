import fetch from 'node-fetch';
import ora from 'ora';
import initializeTerminal from './table.js';

const spinner = ora({ text: `` });
const API = 'https://api.github.com/users/gsambou/repos';

const dateDiff = (start) => {
	let endDate = new Date().toISOString().slice(0, 10);
	const diffInMs = new Date(endDate) - new Date(start);
	const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
	return Math.floor(diffInDays);
};

export default async () => {
	try {
		spinner.start(` `);
		const response = await fetch(API);
		const data = await response.json();

		const gitRepositories = [];

		data.forEach((repo) => {
			const days = dateDiff(repo.updated_at);
			!repo.fork &&
				gitRepositories.push({
					name: repo.name,
					description: repo.description ? repo.description.slice(0, 20) : '',
					updated_at: days > 0 ? `${days} days ago` : `Today`,
					language: repo.language,
				});
		});
		spinner.stop();
		initializeTerminal(gitRepositories);
	} catch (error) {
		console.error('API CALL FAILED', error.message);
	}
};
