import findLast from "../lists/01";

describe("Test P01: Find the last element of a list", () => {
	it("should return the last element of a normal list", () => {
		expect(findLast([1, 2, 3, 5, 5, 8])).toBe(8);
		expect(findLast(["a", "b", "c", "d"])).toBe("d");
		expect(findLast(["apple", "banana", "cherry", "date"])).toBe("date");
	});

	it("should return the single element for a list with one element", () => {
		expect(findLast([42])).toBe(42);
		expect(findLast(["hello"])).toBe("hello");
	});

	it("should return null for an empty list", () => expect(findLast([])).toBe(null));

	it("should return the last sub-list for a list of nested lists", () => {
		expect(
			findLast([
				[1, 2],
				[3, 4],
				[5, 6],
			])
		).toEqual([5, 6]);
		expect(findLast([[1], [2], [3]])).toEqual([3]);
	});

	it("should return the correct value for a mixed data type list", () => {
		expect(findLast([42, "hello", ["a", "b", "c"]])).toEqual(["a", "b", "c"]);
	});

	it("should return the last element for a large list", () => {
		const largeList = Array.from({ length: 1000000 }, (_, index) => index + 1);
		expect(findLast(largeList)).toBe(1000000);
	});
});
