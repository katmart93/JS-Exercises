// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// #1 solution
const arr = [4, 1, 1, 1, 4];

let result = 1;
function grow(x) {
  result = 1;
  for (let i = 0; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}

console.log("From solution #1", grow(arr));

// #2 solution
const arr2 = [1, 2, 3, 4, 5];
const grow2 = (x) => x.reduce((prev, curr) => prev * curr);

console.log("From solution #2", grow2(arr2));
