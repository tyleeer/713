const add = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};
export default add;

export const subtract = (a: number, b: number): string => {
  const result = a - b;
  return result.toString();
};

export const findMax = (numberList: number[]): string => {
  if (numberList.length <= 1) return "Please provide at least 2 numbers.";
  return Math.max(...numberList).toString();
};
