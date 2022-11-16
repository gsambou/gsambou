import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';

const initializeTable = (database) => {
	const table = chalkTable(getTableOptions(), database);
	console.draft(table);
	process.stdout.write('\n');
};

const getTableOptions = () => {
	return {
		leftPad: 1,
		columns: [
			{ field: 'name', name: 'Name' },
			{ field: 'description', name: 'Description' },
			{ field: 'updated_at', name: 'Last Update' },
			{ field: 'language', name: 'Language' },
		],
	};
};

export default (database) => {
	DraftLog(console);
	initializeTable(database);
};
