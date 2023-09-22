// * P06 (*) Find out whether a list is a palindrome.

// * O(1) space complexity; O(n) time complexity, but O(n/2) keeping constants
const isPalindrome = <T>(array: T[]) => {
  const length = array.length;
	if (length <= 1) return true;
  
  const mid = Math.ceil(length / 2);
  
	for (let i = 0, j = length - 1; i <= mid; i++, j--) {
    if (array[i] !== array[j]) return false;
  }
  
	return true;
}

export default isPalindrome;