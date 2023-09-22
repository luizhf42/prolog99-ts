// * P01 (*) Find the last element of a list.

// * O(1) space and time complexity
const findLast = <T>(array: T[]) => {
	const length = array.length;
	return length == 0 ? null : array[length - 1];
};

export default findLast;