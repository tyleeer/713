const add = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};

const result = add(1, 2) + 0;
console.log(result, "type of result:", typeof result);

const findMax = (numberList: number[]): string => {
  if (numberList.length <= 1) return "Please provide at least 2 numbers.";
  return Math.max(...numberList).toString();
};

const result2 = findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]);
console.log(result2, "type of result2:", typeof result2);
