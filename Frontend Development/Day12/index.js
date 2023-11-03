//arrow function
const function1 = (weight1, weight2) => {
  if (weight1 + weight2 > 100) {
    return "The sum is greater than 100";
  } else {
    return "The sum is less than 100";
  }
};

console.log(function1(40, 30)); //inside bracket the elements are called argument
// void means which has no return value

// javascript loop - for, while

//for loop
for (let i = 1; i <= 100; i++) {
  if (i === 4) {
    break;
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i === 4) {
    continue;
  } else {
    console.log(i);
  }
}

//while loop
let i = 1;
while (i < 100) {
  console.log(i);
  i++;
}
