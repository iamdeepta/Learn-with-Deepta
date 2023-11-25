//array method

let array = [1, 2, 3, 4, 5, 6, 5, 4, 9];
let array2 = [9, 10, 11];

const newArray = [...array, ...array2]; //3 dots are called spread operator

// console.log(newArray);

array.push(10);

array.pop();

array.splice(3, 0, "Anik"); //here 2 means index number, 0 means if I want to delete index number 2 or not, 3 no parameter indicates which element will be inserted.

array.map((product, index) => {
  console.log(product, index);
});

const coins = [1, 2, 3, 4, 5];

//sum with loop
let sum = 0;

for (let i = 0; i < coins.length; i++) {
  sum = sum + coins[i];
}

const object = [
  {
    name: "Anik",
    age: 23,
  },
  {
    name: "Deepta",
    age: 29,
  },
  {
    name: "Ranbir",
    age: 49,
  },
];

const sumOfAge = object.reduce((sum, curElement) => {
  return (sum = sum + curElement.age);
}, 0);

console.log(sumOfAge);

let array1 = [1, 2, 3, 4, 5, 6, 5, 4, 9];
console.log([...new Set(array1)]);

const slicedArray = array1.slice(0, 4); //first element refers to index and second element refers to how many element will it pick up.
console.log({ slicedArray });

// console.log(sum);

// console.log(array);
