process.stdout.write(' \u001b[38;5;5;1mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;5;2mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;5;3mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;5;4mgsambou \u001b[0m \n');

process.stdout.write(' \u001b[38;5;5mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;226;1mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;226;2mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;226;3mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[38;5;226;4mgsambou \u001b[0m \n');

process.stdout.write('\u001b[43;m \u001b[30;1mgsambou \u001b[0m ');
process.stdout.write('\u001b[48;5;226;1m \u001b[38;5;232mgsambou \u001b[0m ');
process.stdout.write(' \u001b[48;5;5mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[48;5;226;1m \u001b[30;1mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[48;5;226;2m \u001b[30;1mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[48;5;226;3m \u001b[30;1mgsambou \u001b[0m \n');
process.stdout.write(' \u001b[48;5;226;4m \u001b[30;1mgsambou \u001b[0m \n');

// for (let i = 0; i < 256; i++) {
// 	process.stdout.write('[' + i + ']' + ' \u001b[38;5;' + i + 'm hello \u001b[0m\n');
// }
for (let i = 0; i < 256; i++) {
	process.stdout.write(
		'[' + i + ']' + ' \u001b[48;5;' + i + 'm hello \u001b[0m \u001b[38;5;' + i + 'm hello \u001b[0m\n'
	);
}
