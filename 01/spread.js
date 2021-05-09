function sumTotal(a, b) {
  return a + b;
}

let myA = [5, 4];
// console.log(sumTotal(...myA));

// function sumTwo(...args) {
//   sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(sumTwo(1, 2, 3, 4));

function sumTwo(a, b, ...args) {
  let multiply = a * b;
  sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [multiply, sum];
}

console.log(sumTwo(8, 2, 3, 4));
