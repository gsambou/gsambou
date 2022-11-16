import alert from 'alert-log';

export default (flag, input) => {
	alert('warning', 'CLI DATA ⇣ 🔗', 'debugger');
	console.log(`input`, input);
	console.log(`flag`, { ...flag });
	console.log();
};
