"use strict";

function getMultiplicationTable(start, inclusiveEnd){
	if(!startIsNotGreaterThanEnd(start, inclusiveEnd)){
		return null;
	}

	if(!withinTwoAndOneThousand(start) || !withinTwoAndOneThousand(inclusiveEnd)){
		return null;
	}

	let multiplicationTable = "";
	for(let currentColumn = start; currentColumn<=inclusiveEnd; currentColumn++){
		multiplicationTable+=getMultiplicationRow(start, currentColumn, inclusiveEnd);
		multiplicationTable+="\n";
	}
	return multiplicationTable;
}

function startIsNotGreaterThanEnd (start, end) {
   return start <=end;
}

function withinTwoAndOneThousand(input){
	return input >=2 && input <=1000;
}

function getMultiplicationRow(inclusiveStart, inclusiveEnd, paddingNumber){
	let multiplicationRow = "";
	for(let current = inclusiveStart; current<=inclusiveEnd; current++){
		multiplicationRow+=getPaddedSingleMultiplication(current, inclusiveEnd, paddingNumber)+" ";
	}
	return multiplicationRow;
}

function getPaddedSingleMultiplication(currentRow, currentColumn, paddingNumber){
	const paddingLength = paddingNumber.toString().length
	const largestPaddingString = (paddingNumber*paddingNumber).toString().length;

	const paddedCurrentRow=currentRow.toString().padStart(paddingLength, ' ');
	const paddedResult = (currentRow*currentColumn).toString().padEnd(largestPaddingString, ' ');
	return `${paddedCurrentRow}*${currentColumn}=${paddedResult}`;
}

module.exports = {
	startIsNotGreaterThanEnd: startIsNotGreaterThanEnd,
	withinTwoAndOneThousand: withinTwoAndOneThousand,
	getMultiplicationRow: getMultiplicationRow,
	getPaddedSingleMultiplication: getPaddedSingleMultiplication,
	getMultiplicationTable: getMultiplicationTable
};