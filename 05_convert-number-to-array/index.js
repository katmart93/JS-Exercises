console.log("hello");

function digitize(n) {
  let arr = n
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reverse();
  return arr;
}

console.log(digitize(10256));
