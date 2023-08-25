// P05 (*) Reverse a list.

const reverseArray = <T>(array: T[]) => {
  const length = array.length;
	if (length <= 1) return array;
  
  const mid = Math.ceil(length / 2);
  
	for (let i = 0, j = length - 1; i < mid; i++, j--) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
	return array;
};

// Slower than the first one, also with O(n) space complexity
// const reverseArray = <T>(array: T[]) => {
// 	if (array.length <= 1) return array;
// 	const reversedArray: T[] = [];
// 	for (const el of array) reversedArray.unshift(el);
// 	return reversedArray;
// };

export default reverseArray;
