const output= require('../main');

it ('should be true that start is not greater than end', () => {
	const start = 2;
	const end = 3;
	const result = output.startIsNotGreaterThanEnd(start, end);
   expect(result).toBe(true);
});

it ('should be false that start is greater than end', () => {
	const start = 22;
	const end = 3;
	const result = output.startIsNotGreaterThanEnd(start, end);
   expect(result).toBe(false);
});

it ('should be true if between two and one thousand inclusive', () => {
	const input = 420;
	const result = output.withinTwoAndOneThousand(input);
   expect(result).toBe(true);
});

it ('should be false if not within two and one thousand inclusive', () => {
	const input = 1337;
	const result = output.withinTwoAndOneThousand(input);
   expect(result).toBe(false);
});