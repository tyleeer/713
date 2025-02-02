function sum(scores) {
  return scores.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum([10, 20, 30, 40]));
