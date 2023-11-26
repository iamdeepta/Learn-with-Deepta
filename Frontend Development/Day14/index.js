const string = "ABCD"; //["A","B","C","D"]

// console.log(string.split(""));

//programming
const array = string.split(""); //to convert string into array
// console.log(array.reverse());
// const result = array.join(""); //to convert array into string

// console.log(result);

let output = [];
//for loop
for (let i = 0; i < array.length; i++) {
  output.push(array[array.length - i - 1]);
}

const result = output.join("");

console.log({ result });

//uppercase, lowercase
const x = "FOOTBALL";

// console.log(x.toUpperCase());
console.log(x.toLowerCase());

//convert to number
const number = "3";
console.log(parseInt(number));
console.log(Number(number));

//convert to string
const number2 = 3;
console.log(number2.toString());

//date
const date = new Date();

console.log(date.toISOString().slice(0, 10));
console.log(new Date("2023-09-12").toISOString().slice(0, 10));

console.log(
  new Date().getHours([], { timeZone: "Asia/Dhaka" }) +
    ":" +
    new Date().getMinutes([], { timeZone: "Asia/Dhaka" })
);
console.log(new Date().getMonth() + 1);

let asiaDhaka = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" });

console.log(asiaDhaka);
