import operations from "./function";
const result = operations.add(1, 2) + 0;
const result2 = operations.subtract(1, 2) + 0;
console.log(result, "type of result:", typeof result);
console.log(result2, "type of result2:", typeof result2);

const result3 = operations.findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]);
console.log(result3, "type of result2:", typeof result2);
