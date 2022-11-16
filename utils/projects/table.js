import chalkTable from 'chalk-table';

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
	const table = chalkTable(getTableOptions(), database);
	return table;
};
