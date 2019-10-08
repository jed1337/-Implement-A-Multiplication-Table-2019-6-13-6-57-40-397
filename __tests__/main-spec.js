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

it ('should create single multiplication single digit', () => {
	const currentRow=2;
	const currentColumn=3;
	const result = output.getSingleMultiplication(currentRow, currentColumn);
   expect(result).toBe("2*3=6");
});

it ('should create single multiplication double digit', () => {
	const currentRow=40;
	const currentColumn=20;
	const result = output.getSingleMultiplication(currentRow, currentColumn);
   expect(result).toBe("40*20=800");
});

it ('should create a multiplication 3 items', () => {
	const currentRow=2;
	const currentColumn=4;
	const result = output.getMultiplicationRow(currentRow, currentColumn);
   expect(result).toBe("2*4=8 3*4=12 4*4=16 ");
});

it ('should create a multiplication row 5 items', () => {
	const currentRow=6;
	const currentColumn=10;
	const result = output.getMultiplicationRow(currentRow, currentColumn);
   expect(result).toBe("6*10=60 7*10=70 8*10=80 9*10=90 10*10=100 ");
});

it ('should create a multiplication same start and end', () => {
	const start=2;
	const end=2;
	const result = output.getMultiplicationTable(start, end);
   expect(result).toBe("2*2=4 \n");
});

it ('should create a multiplication with the end = start+1', () => {
	const start=2;
	const end=3;
	const result = output.getMultiplicationTable(start, end);
	const expectedOutput =
		"2*2=4 \n"+
		"2*3=6 3*3=9 \n";
   expect(result).toBe(expectedOutput);
});

it ('should create a multiplication with the end = start+2', () => {
	const start=2;
	const end=4;
	const result = output.getMultiplicationTable(start, end);
	const expectedOutput =
		"2*2=4 \n"+
		"2*3=6 3*3=9 \n"+
		"2*4=8 3*4=12 4*4=16 \n";
   expect(result).toBe(expectedOutput);
});

it ('should create a multiplication with the end = start+2. 2 digit input', () => {
	const start=10;
	const end=12;
	const result = output.getMultiplicationTable(start, end);
	const expectedOutput =
		"10*10=100 \n"+
		"10*11=110 11*11=121 \n"+
		"10*12=120 11*12=132 12*12=144 \n";
   expect(result).toBe(expectedOutput);
});

it ('should return null if start is greater than end', () => {
	const start=10;
	const end=2;
	const result = output.getMultiplicationTable(start, end);
   expect(result).toBe(null);
});

it ('should return null if an start is one', () => {
	const start=10;
	const end=1;
	const result = output.getMultiplicationTable(start, end);
   expect(result).toBe(null);
});

it ('should return null if an start is one thousand one', () => {
	const start=1001;
	const end=1337;
	const result = output.getMultiplicationTable(start, end);
   expect(result).toBe(null);
});
