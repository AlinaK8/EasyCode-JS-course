// Task 1  Switch Case

let a = 'block';

switch (a) {
    case 'block':
        console.log('block')
        break
    case 'none':
        console.log('none')
        break
    case 'inline':
        console.log('inline')
        break
    default:
        console.log('other')}



// тернарный оператор
//Task 2

//1

let x = 'hidden';

let stringT = x === 'hidden' ? 'visible' : 'hidden';

console.log(stringT);


//2
let variable = -1;

variable == 0 ? variable = 1 : variable < 0 ? variable = 'less than zero' :variable *=10;

console.log(variable);

//3
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

car.age > 5 ? car.needRepair = true : car.needRepair = false;

console.log(car);


//Task 3

//1
let string = 'i am in the easycode';

let res = '';

 for (let i = 0; i < string.length; i++){
     let previous = i - 1;
     let result;

     if (string[previous] === ' ' || i === 0) {
         result = string[i].toUpperCase();
     } else {
         result = string[i];
     }

     res += result;
   
 }

console.log(res);


// let string = 'i am in the easycode';
// let result = '';
// for (let i = 0; i < string.length; i++){
// 	if (string[i - 1] === ' ' || i === 0) {
// 		result += string[i].toUpperCase();
// 	} else {
// 		result += string[i];
// 	}
// }
// console.log(result);

//2
let string2 = 'tseb eht ma i';

let updatedString = ' ';

for (let i = string2.length-1; i + 1> 0; i--){
    updatedString += string2[i];
}
console.log(updatedString);

//3
let factorial = 10;
let value = 1

for (let i = 1; i <= factorial; i++) {
    value *= i;
}
console.log(value);


//4
let string3 = 'JavaScript is a pretty good language';

let result = '';

for (let i = 0; i < string3.length; i++) {
    let previous = i - 1;
    let res;

    if (string3[i] === ' ') {
        continue;
    }

    if (string3[previous] === ' ') {
        res = string3[i].toUpperCase();
    } else {
        res = string3[i];
    }

    result += res;  
}

console.log(result);


//5
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let value of array) {
    if ( value % 2 ) {
        console.log(value);
    } 
}

// 
// let string3 = 'JavaScript is a pretty good language';
// let result = '';
// for (let i = 0; i < string3.length; i++) {
// 	if (string3[i] === ' ') {
// 		continue;
// 	}
	
// 	if (string3[i - 1] === ' ') {
// 		result += string3[i].toUpperCase();
// 	} else {
// 		result += string3[i];
// 	}
// }

//6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};

for (let key in list) {
    if (typeof list[key] == "string") {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);









    
