// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
	// Your Code Here
	const binValue = num.toString(2).split('0').join('').length;

	return binValue;
}

console.log(result(number));
