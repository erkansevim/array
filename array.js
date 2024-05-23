//! Array literal

const ages=[30,29,45,27,55,89];
console.log(ages);

//array constructer

const cars=new Array("Mercedes-Benz", "Fiat")
console.log(cars);

const birth=1990;
const names=["erkan", "betül", 2024-birth, cars]

console.log(names);

console.log(names[2]);

console.log(names[3][0]);

//---------- *pop-- delete last data

const obst=["apfel", "kiwi", "birne"]
obst.pop()

console.log(obst);

//--- shift - delete first data

console.log(obst.shift());

//----push added data

obst.push("orange");
console.log(obst);

//-- sort

const numbers=[22,77,88,54,75,12,555,96,33,1,2,45,45]

numbers.sort((a,b)=>a-b)

console.log(numbers);

