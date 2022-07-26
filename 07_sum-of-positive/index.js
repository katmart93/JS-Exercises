//You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// #1 my solution
let numArr = [-5, 5, 3, -4, 2];

function positiveSum(arr) {
  if (arr.length > 0) {
    const filtered = arr.filter((num) => num >= 0);
    return filtered.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  } else if (arr.length === 0) {
    return 0;
  }
}

const filteredNums = positiveSum(numArr);
console.log(`my solution: ${filteredNums}`);

// #2 solution
function positiveSum2(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}

// #3 solution
function positiveSum3(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(`solution 3: ${positiveSum3(numArr)}`);

// #4 solution
function positiveSum4(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}

// #5 solution
const positiveSum5 = (arr) =>
  arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
