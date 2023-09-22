// * P05 (*) Reverse a list.

// * O(1) space complexity; O(n) time complexity, but O(n/2) keeping constants
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

/* 
* O(n) space and time complexity
* Didn't pass test 6 due to timeout

 const reverseArray = <T>(array: T[]) => {
 	if (array.length <= 1) return array;
 	const reversedArray: T[] = [];
 	for (const el of array) reversedArray.unshift(el);
 	return reversedArray;
 };
*/

export default reverseArray;
