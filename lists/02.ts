// P02 (*) Find the last but one element of a list.
const findLastButOne = <T>(array: T[]) => {
  const length = array.length;
  return length <= 1 ? null : array[length - 2];
}

export default findLastButOne;