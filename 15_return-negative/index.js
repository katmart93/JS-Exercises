/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

// #1
const makeNegative = (num) => {
  return num <= 0 ? num : num * -1;
};

console.log("my solution", makeNegative(10));

// #2
function makeNegative2(num) {
  return -Math.abs(num);
}

console.log("#2", makeNegative2(5));

// #3
function makeNegative3(num) {
  if (num > 0) {
    return -num;
  } else if (num < 0) {
    return num;
  } else if (num === 0) {
    return 0;
  }
}

console.log("#3", makeNegative3(0));

// #4
function makeNegative4(num) {
  return num < 0 ? num : -num;
}

console.log("#4 this solution is NOT correct", makeNegative4(0));
