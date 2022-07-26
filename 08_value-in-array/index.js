// #1
const array = ["dog", "cat", "horse", 7, 8];

function check(a, x) {
  return a.includes(x);
}

console.log(check(array, "horse"));

// #2
function check2(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

console.log(check2(array, "horse"));
