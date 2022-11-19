import chalkTable from 'chalk-table';

const getTableOptions = () => {
	return {
		leftPad: 1,
		columns: [
			{ field: 'id', name: 'ID' },
			{ field: 'name', name: 'Project' },
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
