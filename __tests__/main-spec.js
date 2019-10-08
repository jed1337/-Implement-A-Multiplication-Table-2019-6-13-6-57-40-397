const startIsNotGreaterThanEnd = require('../main');

it ('should be true that start is not greater than end', () => {
	const start = 2;
	const end = 3;
	const result = startIsNotGreaterThanEnd(start, end);
   expect(result).toBe(true);
});

it ('should be false that start is greater than end', () => {
	const start = 22;
	const end = 3;
	const result = startIsNotGreaterThanEnd(start, end);
   expect(result).toBe(false);
});