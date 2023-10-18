//function
// function - name, parameter/argument, return, void

function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(5, 9, 2)); //call of a function

function getPlayerName(object) {
  return object.name;
}

const player = {
  name: "Sakib",
  age: 38,
};

const player2 = {
  name: "Tamim",
  age: 35,
};

console.log(getPlayerName(player));
console.log(getPlayerName(player2));

//if else - condition

const weather = "Winter Day";

if (weather === "Rainy Day") {
  console.log("It is raining outside");
} else if (weather === "Winter Day") {
  console.log("Falling snow outside");
} else if (weather === "Spring Day") {
  console.log("spring");
} else {
  console.log("It is a sunny day");
}

const number1 = 2;
const number2 = 6;

if (number1 + number2 > 10) {
  console.log("Sum is greater than 10");
} else {
  console.log("Sum is less than 10");
}

console.log("3" + 5);
