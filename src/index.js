module.exports = function toReadable (number) {
	let num = ('' + number).split('');//?
	let twelve = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
	let ninety = ['thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
	let fromTwelve = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
	let teen = 'teen'
	let ty = 'ty';
	let hundred = 'hundred';
	switch (num.length) {
		case 1:
			return twelve[number];
		case 2:
			if (number < 13) {
				return twelve[number];
			} else if (number < 20) {
				return ninety[number - 13] + teen;
			} else if (number <= 99) {
				return num[1] == 0 ? `${fromTwelve[num[0] - 2]}${ty}` : `${fromTwelve[num[0] - 2]}${ty} ${twelve[num[1]]}`;
			}
		case 3:
			let first = `${twelve[num[0]]} ${hundred}`;
			let outer = toReadable(+(num[1] + num[2]));
			return num[1] == 0 && num[2] == 0 ? first : `${first} ${outer}`;
		default:
			return 'enter valid number';
	}
}