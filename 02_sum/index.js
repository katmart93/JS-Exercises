// # 1
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// const numArr = [5, 5, 4, 6, 8, 10, -1];
const numArr = [1, 5.2, 4, 0, -1];
// const numArr = [];
// const numArr = [-2.398];

let result = 0;
function sum(numbers) {
  result = 0;
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
  } else if (numbers.length === 0) {
    return 0;
  }
  return result;
}

sum(numArr);
console.log(sum(numArr));

console.log(`result is: ${result}`);

const incrementResult = result + 2;
console.log(`ncremented result is: ${incrementResult}`);

document.querySelector(".sum").innerHTML = result;
