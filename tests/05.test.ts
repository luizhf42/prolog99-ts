import reverseArray from "../lists/05";

describe("Test P05: Reverse a List", () => {
	test("reverses a normal list", () => {
		expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
		expect(reverseArray(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"]);
		expect(reverseArray(["apple", "banana", "cherry", "date"])).toEqual([
			"date",
			"cherry",
			"banana",
			"apple",
		]);
	});

	test("returns an empty list for an empty list", () => {
		expect(reverseArray([])).toEqual([]);
	});

	test("returns the same list for a list with one element", () => {
		expect(reverseArray([42])).toEqual([42]);
		expect(reverseArray(["hello"])).toEqual(["hello"]);
	});

	test("reverses a list of nested lists", () => {
		expect(
			reverseArray([
				[1, 2],
				[3, 4],
				[5, 6],
			])
		).toEqual([
			[5, 6],
			[3, 4],
			[1, 2],
		]);
		expect(reverseArray([[1], [2], [3]])).toEqual([[3], [2], [1]]);
	});

	test("reverses a mixed data type list", () => {
		expect(reverseArray([42, "hello", ["a", "b", "c"]])).toEqual([
			["a", "b", "c"],
			"hello",
			42,
		]);
	});

	test("reverses a large list", () => {
		const largeList = Array.from({ length: 1000000 }, (_, index) => index + 1);
		const reversedLargeList = largeList.slice().reverse();
		expect(reverseArray(largeList)).toEqual(reversedLargeList);
	});
});
