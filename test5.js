// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
	// Your Code Here
	const countBits = num.toString(2).split('0').join('').length;

	return countBits;
}

console.log(result(number));
