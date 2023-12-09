const date = new Date();
console.log(new Date("2000-02-03").getMonth() + 1)

const birthDate = new Date("2000-02-03").toISOString().slice(5, 7);

const arrayMonth = birthDate.split("");


const string ="02" ;

let output = [];
 for (let i = 0; i <arrayMonth.length; i++) {
  output.push(arrayMonth[arrayMonth.length - i - 1]);
}

const result = output.join("");

console.log({ result });

  