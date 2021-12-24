module.exports = function toReadable (number) {
	let twelve = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
	let ninety = ['thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
	let otTwenty = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
	let teen = 'teen'
	let ty = 'ty';
	let hundred = 'hundred';
	if (number < 13) {
		return twelve[number];
	}
	if (number < 20) {
		return ninety[number - 13] + teen;
	}
	if (number <= 99) {
		return ('' + number)[1] == 0 ? otTwenty[('' + number)[0] - 2] + ty : otTwenty[('' + number)[0] - 2] + ty + ' ' + twelve[('' + number)[1]];
	}
	if (number == 100) {
		return 'one hundred';
	}
	if (number > 100) {
		let first = twelve[('' + number)[0]] + ' ' + hundred;
		let outer = toReadable(+(('' + number)[1] + ('' + number)[2]));
		return ('' + number)[1] == 0 && ('' + number)[2] == 0 ? first : first + ' ' + outer;
	}
}