const n = [1, 2, 3, 4, 5, 6];
const square = n.map((num) => num * num);
console.log(square);

const even = n.filter((num) => num % 2 === 0);
console.log(even);

const squareSome = n
  .filter((num) => num % 3 === 0)
  .map((num) => Math.pow(num, 3));

console.log(squareSome);
