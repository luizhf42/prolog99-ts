// * P03 (*) Find the Kth element of a list.

// * O(1) space and time complexity
const findKthElement = <T>(array: T[], k: number) => {
  if (k < 1 || k > array.length) return null;
  return array[k - 1];
}

export default findKthElement;