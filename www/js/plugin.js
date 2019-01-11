// Task 1

function multiply() {

    if( arguments.length === 0 ){
        return 0;
    } else {
        let result = 1;

        for( let i = 0; i < arguments.length; i++ ) {
            result *= arguments[i];
        }
        
        return result;
    }
};

//Task 2

function reversedString(str) {   

    let newStr = str.split('').reverse().join('');

    return newStr;

} 

//Task3

function getCharCodeFromString(str) {

    let charCodeString = '';

    for (let i = 0; i < str.length; i++) {
        charCodeString += str.charCodeAt(i) + ' ';
    }

    return charCodeString;
}

//Task 4

function luckyNumber(num) {
    if(num > 10 || num < 0) {
        console.log("invalid number")
    } else {
        let randomNumber = Math.floor(Math.random() * 10) + 1;

        if(randomNumber === num) {
            return "You won!"
        } else {
            return "Ohh man, you've just lost!"
        }
    }
};

//Task 5 

function letsMakeAnArray(num) {

    let newArray = [];

    for (let i = 0; i < num; i++) {

        newArray[i] = i + 1;
    }

    return newArray;
}

//Task 6

function doubleArray(arr) {

    let newArray = arr.slice(0);
    let doubleArray = newArray.concat(arr);

    return doubleArray;
}

//Task 7

function cutArray() {

    if(!arguments) {
        console.log('please enter value!')
    }

    let newArray = [];

    for (let i = 0; i < arguments.length; i++) {

        arguments[i].shift();

        newArray[i] = arguments[i];
    }

    return newArray;
}



//Task 8

function checkingArray(arr, property, value) {
    if(!arr || !property || !value) {
        console.log('Not all arguments are provided. Please make sure to indicate array, property and its value!');
    }

    let checkedUsers = [];

    for (let i = 0; i < arr.length; i++){
        if(arr[i][property] == value) {
            checkedUsers.push(arr[i]);
        }
    }

    return checkedUsers;
}

let users = [
    {
        name: 'Denis', 
        age: 29, 
        gender: 'male'
    },
    {
        name: 'Olga', 
        age: 35, 
        gender: 'female'
    },
    {
        name: 'Yegor', 
        age: 19, 
        gender: 'male'
    },
    {
        name: 'Gleb', 
        age: 99, 
        gender: 'male'
    },
    {
        name: 'Lisa', 
        age: 15, 
        gender: 'female'
    },
    {
        name: 'Jennie', 
        age: 24, 
        gender: 'female'
    },
    {
        name: 'Rose', 
        age: 26, 
        gender: 'female'
    },
    {
        name: 'Chris', 
        age: 26, 
        gender: 'male'
    },
    {
        name: 'John', 
        age: 26, 
        gender: 'male'
    }
];

