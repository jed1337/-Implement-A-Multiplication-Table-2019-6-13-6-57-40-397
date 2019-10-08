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
		multiplicationTable+=getMultiplicationRow(start, currentColumn);
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

function getMultiplicationRow(inclusiveStart, inclusiveEnd){
	let multiplicationRow = "";
	for(let current = inclusiveStart; current<=inclusiveEnd; current++){
		multiplicationRow+=getSingleMultiplication(current, inclusiveEnd)+" ";
	}
	return multiplicationRow;
}

function getSingleMultiplication(currentRow, currentColumn){
	return `${currentRow}*${currentColumn}=${currentRow*currentColumn}`;
}

module.exports = {
	startIsNotGreaterThanEnd: startIsNotGreaterThanEnd,
	withinTwoAndOneThousand: withinTwoAndOneThousand,
	getSingleMultiplication: getSingleMultiplication,
	getMultiplicationRow: getMultiplicationRow,
	getMultiplicationTable: getMultiplicationTable
};