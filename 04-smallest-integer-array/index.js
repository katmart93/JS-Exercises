const smallestNumber = (...args) => {
  return Math.min(...args);
};

console.log(`from smallestNumber function: ${smallestNumber(5, 2, 3, 8)}`);

// using class
class SmallestIntegerFinder {
  findSmallestInt(...args) {
    return Math.min(...args);
  }
}

const int1 = new SmallestIntegerFinder();
console.log(`from class 1: ${int1.findSmallestInt(5, 2, 3, 8, 1)}`);

// OR
class SmallestIntegerFinder2 {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const int2 = new SmallestIntegerFinder2();
console.log(`from class 2: ${int2.findSmallestInt([5, 2, 3, 8, 1, -100])}`);

// basic class method example
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  drive() {
    return this.brand + " " + this.model + " is driving...";
  }
}

const car1 = new Car("Toyota", "Yaris");
console.log(car1.drive());
