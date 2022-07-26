// Write a function that takes a boolean as an argument and returns string "Yes" if it's true, and "No" if it's false

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

const printWord = boolToWord(true);

console.log(printWord);
