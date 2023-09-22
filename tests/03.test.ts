import findKthElement from "../lists/03";


describe('Test P03: Find the K\'th Element of a List', () => {
  it('should return the K\'th element of a normal list', () => {
    expect(findKthElement([1, 2, 3, 4, 5], 3)).toBe(3);
    expect(findKthElement(['a', 'b', 'c', 'd'], 2)).toBe('b');
    expect(findKthElement(['apple', 'banana', 'cherry', 'date'], 4)).toBe('date');
  });

  it('should return null for lists with invalid K values', () => {
    expect(findKthElement([], 1)).toBeNull();
    expect(findKthElement([42], 0)).toBeNull();
    expect(findKthElement(['hello'], 2)).toBeNull();
  });

  it('should return the first element for K = 1', () => {
    expect(findKthElement([42, 'hello'], 1)).toBe(42);
    expect(findKthElement(['a', 'b'], 1)).toBe('a');
  });

  it('should return the K\'th sub-list for a list of nested lists', () => {
    expect(findKthElement([[1, 2], [3, 4], [5, 6]], 2)).toEqual([3, 4]);
    expect(findKthElement([[1], [2], [3]], 3)).toEqual([3]);
  });

  it('should return the correct value for a mixed data type list', () => {
    expect(findKthElement([42, 'hello', ['a', 'b', 'c']], 2)).toBe('hello');
  });

  it('should return the K\'th element for a large list', () => {
    const largeList = Array.from({ length: 1000000 }, (_, index) => index + 1);
    expect(findKthElement(largeList, 999999)).toBe(999999);
  });
});
