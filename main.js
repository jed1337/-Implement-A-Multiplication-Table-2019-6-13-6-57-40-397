"use strict";
function startIsNotGreaterThanEnd (start, end) {
    return start <=end;
}

function withinTwoAndOneThousand(input){
	return input >=2 && input <=1000;
}

module.exports = {
	startIsNotGreaterThanEnd: startIsNotGreaterThanEnd,
	withinTwoAndOneThousand: withinTwoAndOneThousand
};