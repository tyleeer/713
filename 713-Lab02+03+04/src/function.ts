const add = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};
// export default add;

const subtract = (a: number, b: number): string => {
  const result = a - b;
  return result.toString();
};

const findMax = (numberList: number[]): string => {
  if (numberList.length <= 1) return "Please provide at least 2 numbers.";
  return Math.max(...numberList).toString();
};

export default {
  add,
  subtract,
  findMax,
};
