// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2));

const evenNum = 4 % 2;
console.log(evenNum);

const oddNum = 3 % 2;
console.log(oddNum);

// #2 solution
function even_or_odd2(number) {
  return number % 2 ? "Odd" : "Even";
}

console.log(even_or_odd2(3));
