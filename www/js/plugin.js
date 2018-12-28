// Task 1 Strings

let string = 'some test string';

//1

let firstSymbol = string[0];
let lastSymbol = string[ string.length -1 ];


//2

let toUpperCase = string[0].toUpperCase() + string.slice(1, -1) + string[string.length -1].toUpperCase();

console.log(toUpperCase);


//3

let index = string.indexOf('string');

//4
let space2 = string.lastIndexOf(' ');

//5
let cutString = string.substring(4, 9);

//6
let shortString = string.slice(5, 9);

//7
string7 = string.slice(0, -6);

console.log(string7);


//8
let a = 20;
let b = 16;

console.log(a.toString() + b.toString());



// Task 2 Numbers

//1
let piNum = (Math.PI).toFixed(2);
console.log(piNum);

//2
numMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

numMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(numMin);

console.log(numMax);

//3

let randomNum = (Math.random()).toFixed(2);
console.log(randomNum);

let num4 = Math.floor(Math.random()* 185.9948594857);
console.log(num4);

//4
let checking = ((0.6 * 10 + 0.7 * 10) / 10).toFixed(1);
console.log(checking);

//5

let price = parseInt("100$");
console.log(price);