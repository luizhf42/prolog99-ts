import getLength from "../lists/04";

describe("Test P04: Find the Number of Elements in a List", () => {
	test("returns the correct length of a normal list", () => {
		expect(getLength([1, 2, 3, 4, 5])).toBe(5);
		expect(getLength(["a", "b", "c", "d"])).toBe(4);
		expect(getLength(["apple", "banana", "cherry", "date"])).toBe(4);
	});

	test("returns 0 for an empty list", () => {
		expect(getLength([])).toBe(0);
	});

	test("returns 1 for a list with one element", () => {
		expect(getLength([42])).toBe(1);
		expect(getLength(["hello"])).toBe(1);
	});

	test("returns the correct count for a list of nested lists", () => {
		expect(
			getLength([
				[1, 2],
				[3, 4],
				[5, 6],
			])
		).toBe(3);
		expect(getLength([[1], [[2], [3]]])).toBe(2);
	});

	test("returns the correct count for a mixed data type list", () => {
		expect(getLength([42, "hello", ["a", "b", "c"]])).toBe(3);
	});

	test("returns the correct count for a large list", () => {
		const largeList = Array.from({ length: 1000000 }, (_, index) => index + 1);
		expect(getLength(largeList)).toBe(1000000);
	});
});
