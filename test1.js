// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
	// Your Code Here
	let temp = 0;

	input.map((value) => {
		temp += value;
	});

	return temp;
}

console.log(result(input));
