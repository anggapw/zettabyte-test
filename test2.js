// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
	// Your Code Here
	const filterArr = arr2.filter((val) => !arr1.includes(val));
	const isEven = (num) => num % 2 === 0;
	const sorter = (a, b) => {
		if (isEven(a) && !isEven(b)) {
			return 1;
		}

		if (!isEven(a) && isEven(b)) {
			return -1;
		}

		return a - b;
	};

	const oddEven = (arr) => {
		arr.sort(sorter);
	};
	oddEven(filterArr);

	const middleIndex = Math.floor(filterArr.length / 2);
	filterArr.splice(middleIndex, 0, ...arr1);

	return filterArr;
}

console.log(result(arr1, arr2));
