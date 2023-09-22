import isPalindrome from "../lists/06";

describe("Test P06: Find out whether a list is a palindrome.", () => {
	it("should return true for an empty array", () => {
		expect(isPalindrome([])).toBe(true);
	});

	it("should return true for an array with one element", () => {
		expect(isPalindrome([1])).toBe(true);
	});

	it("should return true for a palindrome array", () => {
		expect(isPalindrome([1, 2, 3, 3, 2, 1])).toBe(true);
	});

	it("should return true for a palindrome array of odd length", () => {
		expect(isPalindrome([1, 2, 3, 4, 3, 2, 1])).toBe(true);
	});

	it("should return false for a non-palindrome array", () => {
		expect(isPalindrome([1, 2, 3, 4, 5])).toBe(false);
	});

	it("should handle arrays with multiple data types", () => {
		expect(isPalindrome([1, "hello", true, "hello", 1])).toBe(true);
	});
});
