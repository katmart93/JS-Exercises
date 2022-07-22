const arr = [5, 5, 6, 4];

const reducedArr = arr.reduce((acc, currVal) => acc + currVal);

console.log(reducedArr);

const arr2 = [5, 5, 6, 4];

const reducedArr2 = arr2.reduce((acc, currVal) => {
  return acc + currVal;
}, 10);

console.log(reducedArr2);

document.querySelector(".sum").innerHTML = reducedArr;
