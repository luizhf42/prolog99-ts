import findLastButOne from "../lists/02";

describe("Test P02: Find Second-to-Last Element of a List", () => {
	it("should return the second-to-last element of a normal list", () => {
		expect(findLastButOne([1, 2, 3, 4, 5])).toBe(4);
		expect(findLastButOne(["a", "b", "c", "d"])).toBe("c");
		expect(findLastButOne(["apple", "banana", "cherry", "date"])).toBe(
			"cherry"
		);
	});

	it("should return null for lists with one or fewer elements", () => {
		expect(findLastButOne([])).toBeNull();
		expect(findLastButOne([42])).toBeNull();
	});

	it("should return the first element for lists with two elements", () => {
		expect(findLastButOne([42, "hello"])).toBe(42);
		expect(findLastButOne(["a", "b"])).toBe("a");
	});

	it("should return the second-to-last sub-list for a list of nested lists", () => {
		expect(
			findLastButOne([
				[1, 2],
				[3, 4],
				[5, 6],
			])
		).toEqual([3, 4]);
		expect(findLastButOne([[1], [2], [3]])).toEqual([2]);
	});

	it("should return the correct value for a mixed data type list", () => {
		expect(findLastButOne([42, "hello", ["a", "b", "c"]])).toBe("hello");
	});

	it("should return the second-to-last element for a large list", () => {
		const largeList = Array.from({ length: 1000000 }, (_, index) => index + 1);
		expect(findLastButOne(largeList)).toBe(999999);
	});
});
