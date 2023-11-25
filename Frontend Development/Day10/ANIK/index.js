function sum(a,b,c,d,e,f) {
  return a + b + c +d + e + f;
}

console.log(sum(1, 2, 3, 4,  5,  6));

let coins = [1,2,3,4,5,6,8,9];

for(let i=0; i<coins.length; i++){
  if(coins[i]===8){
    break;
  }else{
  console.log(coins[i]);
  }
}



