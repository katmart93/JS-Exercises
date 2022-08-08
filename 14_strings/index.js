/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

const strEndsWith = (str, ending) => {
  return str.endsWith(ending);
};

console.log("my solution", strEndsWith("abcde", "abc"));

// #2
function solution2(str, ending) {
  let strArray = str.split("");
  let endArray = ending.split("");
  let wasteArrayLength = strArray.length - endArray.length;
  let newArray = [];

  for (let i = wasteArrayLength; i < strArray.length; i++) {
    newArray.push(strArray[i]);
  }

  let newEnding = endArray.join();
  let newString = newArray.join();

  if (newString == newEnding) {
    return true;
  } else {
    return false;
  }
}

console.log("#2", solution2("abcde", "cdf"));

// #3
function solution3(str, ending) {
  return str.slice(0 - ending.length) === ending;
}

console.log("#3", solution3("abcde", "cde"));

// #4
function solution4(str, ending) {
  return str.substr(-ending.length) == ending;
}

console.log("#4", solution4("abcde", "cde"));

// #5
function solution5(str, ending) {
  if (typeof str != "string" || typeof ending != "string") throw "wrong type";
  if (ending.length > str.length) return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}

console.log("#5", solution5("abcde", "cde"));
