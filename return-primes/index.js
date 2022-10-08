// Write a function that accepts an array of numbers
// and return a new array containing only prime numbers

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(7));

const primeNums = (arr) => {
  let primesArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primesArr.push(arr[i]);
    }
  }
  return primesArr;
};

console.log(
  primeNums([
    4, 1, 5, 2, 8, 3, 7, 333, 283, 878, 419, 547, 767, 575, 661, 878, 1082,
    276382, 854, 3271, 72, 2213, 87648327, 4153, 7129, 45, 5857,
  ])
);
