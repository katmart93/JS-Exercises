// solution #1

function digitize(n) {
  let arr = n
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reverse();
  return arr;
}

console.log(digitize(10256));

// solution #2

function digitize2(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize2(5678));
