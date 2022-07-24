// solution #1

function digitize(n) {
  let arr = n
    .toString() // stringify the number
    .split("") // make each digit an item in an array
    .map((num) => parseInt(num)) // convert all the items back into numbers
    .reverse(); // reverse the order of the array
  return arr;
}

console.log(digitize(10256));

// solution #2

function digitize2(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize2(5678));
