// P01 (*) Find the last element of a list.
const findLast = <T>(array: T[]) => {
	const length = array.length;
	return length == 0 ? null : array[length - 1];
};

export default findLast;