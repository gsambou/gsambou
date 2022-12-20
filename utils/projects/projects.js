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

const getProjects = async (api) => {
	const response = await fetch(api);
	const data = await response.json();
	let index = 0;

	const repos = data.map((repo) => {
		const days = dateDiff(repo.updated_at);

		if (!repo.fork) {
			index++;
			return {
				id: index,
				name: repo.name,
				description: repo.description ? repo.description.slice(0, 20) : '',
				updated_at: days > 0 ? `${days} days ago` : `Today`,
				language: repo.language,
			};
		}
	});

	return repos.filter(Boolean);
};

export default async () => {
	spinner.start();
	try {
		const gitRepositories = await getProjects(API);
		process.stdout.write('\n');
		process.stdout.write(initializeTerminal(gitRepositories));
		process.stdout.write('\n');
	} catch (error) {
		console.error('API CALL FAILED', error.message);
	}
	spinner.stop();
};
